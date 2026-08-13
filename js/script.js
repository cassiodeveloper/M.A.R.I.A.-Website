/**
 * M.A.R.I.A. site runtime: language switching, analytics events, form state.
 *
 * i18n contract
 * -------------
 * Markup declares translation targets with stable keys, never positions:
 *
 *   <h1 data-i18n="hero.h1">…</h1>            -> innerHTML
 *   <input data-i18n-placeholder="form.email">-> placeholder attribute
 *   <a data-i18n-aria="nav.home">             -> aria-label attribute
 *
 * Strings live in i18n/translations.js as `common` (shared chrome) plus a
 * per-page map. A page only needs to declare what is unique to it.
 */

const LANG_STORAGE_KEY = 'maria_lang';
const LANG_ORDER = ['en-US', 'pt-BR'];
const LANG_UI = {
    'en-US': { short: 'EN', flag: '\u{1F1FA}\u{1F1F8}' },
    'pt-BR': { short: 'PT', flag: '\u{1F1E7}\u{1F1F7}' }
};

const header = document.querySelector('.site-header');
const body = document.body;
const pageKey = body?.dataset?.page || 'index';

let activeSendingText = 'Sending...';
let sourceTitle = document.title;
let i18nConfig = window.MARIA_TRANSLATIONS || null;

/* ---------------------------------------------------------------- analytics */

/**
 * Traffic origin, resolved once per page view.
 *
 * UTM parameters win when present; otherwise the referrer host is used, so an
 * organic link from HN or LinkedIn is still attributable. Nothing here reads or
 * writes storage — it's derived from the current URL and document.referrer only.
 */
const getTrafficSource = () => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source');

    if (utmSource) {
        return {
            traffic_source: utmSource,
            traffic_medium: params.get('utm_medium') || '(not set)',
            traffic_campaign: params.get('utm_campaign') || '(not set)'
        };
    }

    if (!document.referrer) {
        return { traffic_source: '(direct)', traffic_medium: '(none)' };
    }

    try {
        const host = new URL(document.referrer).hostname;
        if (host === window.location.hostname) {
            return { traffic_source: '(internal)', traffic_medium: 'internal' };
        }
        return { traffic_source: host, traffic_medium: 'referral' };
    } catch {
        return { traffic_source: '(unknown)', traffic_medium: '(unknown)' };
    }
};

const trafficSource = getTrafficSource();

const trackGAEvent = (eventName, params = {}) => {
    if (!eventName) {
        return;
    }

    const eventParams = {
        page_key: pageKey,
        page_path: window.location.pathname,
        language: document.documentElement.lang,
        ...trafficSource,
        ...params
    };

    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventParams);
        return;
    }

    if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: eventName, ...eventParams });
    }
};

/* -------------------------------------------------------------------- i18n */

const getSavedLang = () => {
    try {
        return localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
        return null;
    }
};

const saveLang = (lang) => {
    try {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
        /* private mode: language still applies for this page view */
    }
};

const pickInitialLang = (config) => {
    const saved = getSavedLang();
    if (saved && config.labels?.[saved]) {
        return saved;
    }

    if ((navigator.language || '').toLowerCase().startsWith('pt')) {
        return 'pt-BR';
    }

    return config.defaultLang || 'en-US';
};

const sourceMeta = new Map();

const setMetaContent = (selector, value) => {
    const element = document.querySelector(selector);
    if (!element) {
        return;
    }

    if (!sourceMeta.has(selector)) {
        sourceMeta.set(selector, element.getAttribute('content') || '');
    }

    element.setAttribute('content', value || sourceMeta.get(selector));
};

/**
 * The HTML source is the source language (see `sourceLang`). Snapshotting it at
 * boot means translation files only carry the *other* languages, and a key that
 * is missing or not yet translated falls back to real copy instead of blanking.
 */
const sourceStrings = new Map();

const snapshotSource = () => {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        sourceStrings.set(element.dataset.i18n, element.innerHTML);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        sourceStrings.set(
            `@placeholder:${element.dataset.i18nPlaceholder}`,
            element.getAttribute('placeholder') || ''
        );
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        sourceStrings.set(
            `@aria:${element.dataset.i18nAria}`,
            element.getAttribute('aria-label') || ''
        );
    });
};

const resolveStrings = (config, lang) => ({
    ...(config.common?.[lang] || {}),
    ...(config.pages?.[pageKey]?.[lang]?.strings || {})
});

const applyStrings = (strings) => {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        const value = strings[key] ?? sourceStrings.get(key);
        if (value !== undefined) {
            element.innerHTML = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        const value = strings[key] ?? sourceStrings.get(`@placeholder:${key}`);
        if (value !== undefined) {
            element.setAttribute('placeholder', value);
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        const key = element.dataset.i18nAria;
        const value = strings[key] ?? sourceStrings.get(`@aria:${key}`);
        if (value !== undefined) {
            element.setAttribute('aria-label', value);
        }
    });
};

const paintToggleState = (lang) => {
    document.querySelectorAll('.lang-toggle').forEach((toggle) => {
        toggle.dataset.activeLang = lang;
    });

    document.querySelectorAll('.lang-toggle button').forEach((button) => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
};

const applyLanguage = (config, lang) => {
    const page = config.pages?.[pageKey]?.[lang];

    document.documentElement.lang = page?.htmlLang || lang;

    if (page?.title) {
        document.title = page.title;
    } else if (sourceTitle) {
        document.title = sourceTitle;
    }

    setMetaContent('meta[name="description"]', page?.meta?.description);
    setMetaContent('meta[property="og:title"]', page?.meta?.ogTitle);
    setMetaContent('meta[property="og:description"]', page?.meta?.ogDescription);
    setMetaContent('meta[name="twitter:title"]', page?.meta?.twitterTitle);
    setMetaContent('meta[name="twitter:description"]', page?.meta?.twitterDescription);

    applyStrings(resolveStrings(config, lang));

    activeSendingText = page?.sendingText || activeSendingText;
    paintToggleState(lang);
};

const buildToggle = (config, initialLang) => {
    const toggle = document.querySelector('.lang-toggle');
    if (!toggle || !config?.labels) {
        return;
    }

    toggle.innerHTML = '';

    LANG_ORDER.filter((code) => config.labels[code]).forEach((code) => {
        const ui = LANG_UI[code] || { short: config.labels[code], flag: '' };
        const button = document.createElement('button');

        button.type = 'button';
        button.dataset.lang = code;
        button.innerHTML =
            `<span class="lang-flag" aria-hidden="true">${ui.flag}</span>` +
            `<span class="lang-label">${ui.short}</span>`;
        button.addEventListener('click', () => {
            saveLang(code);
            applyLanguage(config, code);
            trackGAEvent('language_switch', { language: code });
        });

        toggle.appendChild(button);
    });

    paintToggleState(initialLang);
};

const initI18n = () => {
    if (!i18nConfig) {
        return;
    }

    snapshotSource();

    const initialLang = pickInitialLang(i18nConfig);
    buildToggle(i18nConfig, initialLang);
    applyLanguage(i18nConfig, initialLang);
};

/* --------------------------------------------------------------- behaviour */

const updateHeaderState = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
};

const initForm = () => {
    const form = document.querySelector('.waitlist-form');
    const submitButton = form?.querySelector('button[type="submit"]');

    if (!form || !submitButton) {
        return;
    }

    form.addEventListener('submit', () => {
        trackGAEvent('waitlist_submit', {
            event_category: 'conversion',
            cta_location: form.dataset.formLocation || 'waitlist_form'
        });

        submitButton.disabled = true;
        submitButton.textContent = activeSendingText;
    });
};

document.addEventListener('click', (event) => {
    const element = event.target.closest('a, button');
    if (!element) {
        return;
    }

    const href = element.getAttribute('href') || '';
    const eventName =
        element.dataset.trackEvent ||
        (href.includes('demo.mariaappsec.com') ? 'demo_click' : '');

    if (!eventName) {
        return;
    }

    trackGAEvent(eventName, {
        event_category: 'engagement',
        event_label: (element.textContent || '').trim().slice(0, 80),
        cta_location: element.dataset.trackLocation || `${pageKey}_page`,
        link_url: href
    });
});

window.addEventListener('scroll', updateHeaderState, { passive: true });

updateHeaderState();
initI18n();
initForm();

// The pre-paint guard in <head> hides the body until strings are applied, so a
// pt-BR visitor never sees the English source flash past. Always release it.
document.documentElement.classList.remove('i18n-pending');
