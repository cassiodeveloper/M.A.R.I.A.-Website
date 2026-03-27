const header = document.querySelector('.site-header');
const form = document.querySelector('.waitlist-form');
const submitButton = form?.querySelector('button[type="submit"]');

const LANG_STORAGE_KEY = 'maria_lang';
const body = document.body;
const pageKey = body?.dataset?.page || (window.location.pathname.includes('/why/') ? 'why' : 'index');
const isWhyPage = pageKey === 'why';
const preferredTranslationsPath = isWhyPage ? '../i18n/translations.json' : 'i18n/translations.json';

const LANG_ORDER = ['en-US', 'pt-BR'];
const LANG_UI = {
    'en-US': { short: 'EN', flag: '🇺🇸' },
    'pt-BR': { short: 'PT', flag: '🇧🇷' }
};

let activeSendingText = 'Sending...';
let i18nConfig = null;

const trackGAEvent = (eventName, params = {}) => {
    if (!eventName) {
        return;
    }

    const eventParams = {
        page_key: pageKey,
        page_path: window.location.pathname,
        ...params
    };

    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventParams);
        return;
    }

    if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
            event: eventName,
            ...eventParams
        });
    }
};

const updateHeaderState = () => {
    if (!header) {
        return;
    }

    header.classList.toggle('is-scrolled', window.scrollY > 12);
};

const getSavedLang = () => localStorage.getItem(LANG_STORAGE_KEY);

const pickInitialLang = (config) => {
    const saved = getSavedLang();
    if (saved && config.labels?.[saved]) {
        return saved;
    }

    const browser = (navigator.language || '').toLowerCase();
    if (browser.startsWith('pt')) {
        return 'pt-BR';
    }

    return config.defaultLang || 'pt-BR';
};

const setMetaContent = (selector, value) => {
    if (!value) {
        return;
    }

    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute('content', value);
    }
};

const applyEntry = (entry) => {
    if (!entry?.selector) {
        return;
    }

    const targets = document.querySelectorAll(entry.selector);
    if (!targets.length) {
        return;
    }

    targets.forEach((target) => {
        if (entry.text !== undefined) {
            target.textContent = entry.text;
        }

        if (entry.html !== undefined) {
            target.innerHTML = entry.html;
        }

        if (entry.placeholder !== undefined) {
            target.setAttribute('placeholder', entry.placeholder);
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
    const pageTranslations = config.pages?.[pageKey]?.[lang];
    if (!pageTranslations) {
        return;
    }

    document.documentElement.lang = pageTranslations.htmlLang || lang;
    document.title = pageTranslations.title || document.title;

    setMetaContent('meta[name="description"]', pageTranslations.meta?.description);
    setMetaContent('meta[property="og:title"]', pageTranslations.meta?.ogTitle);
    setMetaContent('meta[property="og:description"]', pageTranslations.meta?.ogDescription);
    setMetaContent('meta[name="twitter:title"]', pageTranslations.meta?.twitterTitle);
    setMetaContent('meta[name="twitter:description"]', pageTranslations.meta?.twitterDescription);

    (pageTranslations.entries || []).forEach(applyEntry);

    activeSendingText = pageTranslations.sendingText || activeSendingText;
    paintToggleState(lang);
};

const ensureToggle = (config, initialLang) => {
    const headerInner = document.querySelector('.header-inner');
    if (!headerInner || !config.labels) {
        return;
    }

    let toggle = headerInner.querySelector('.lang-toggle');

    if (!toggle) {
        toggle = document.createElement('div');
        toggle.className = 'lang-toggle';
        toggle.setAttribute('role', 'group');
        toggle.setAttribute('aria-label', 'Language selector');
        headerInner.appendChild(toggle);
    }

    toggle.innerHTML = '';

    LANG_ORDER.filter((langCode) => config.labels?.[langCode]).forEach((langCode) => {
        const ui = LANG_UI[langCode] || { short: config.labels[langCode], flag: '' };
        const button = document.createElement('button');

        button.type = 'button';
        button.dataset.lang = langCode;
        button.innerHTML = `<span class="lang-flag" aria-hidden="true">${ui.flag}</span><span class="lang-label">${ui.short}</span>`;
        button.setAttribute('aria-pressed', langCode === initialLang ? 'true' : 'false');
        button.className = langCode === initialLang ? 'active' : '';
        button.addEventListener('click', () => {
            localStorage.setItem(LANG_STORAGE_KEY, langCode);
            if (i18nConfig) {
                applyLanguage(i18nConfig, langCode);
            } else {
                paintToggleState(langCode);
            }
        });
        toggle.appendChild(button);
    });

    paintToggleState(initialLang);
};

const bindStaticToggleFallback = () => {
    document.querySelectorAll('.lang-toggle button').forEach((button) => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            if (!lang) {
                return;
            }

            localStorage.setItem(LANG_STORAGE_KEY, lang);
            if (!i18nConfig) {
                paintToggleState(lang);
            }
        });
    });

    const saved = getSavedLang();
    if (saved) {
        paintToggleState(saved);
    }
};

const fetchTranslationsConfig = async () => {
    if (window.MARIA_TRANSLATIONS) {
        return window.MARIA_TRANSLATIONS;
    }

    const candidatePaths = [
        preferredTranslationsPath,
        '/i18n/translations.json',
        'i18n/translations.json',
        '../i18n/translations.json'
    ];

    for (const path of candidatePaths) {
        try {
            const response = await fetch(path, { cache: 'no-cache' });
            if (!response.ok) {
                continue;
            }

            return await response.json();
        } catch {
            // Try next path.
        }
    }

    return null;
};

const initI18n = async () => {
    bindStaticToggleFallback();

    const config = await fetchTranslationsConfig();
    if (!config) {
        return;
    }

    i18nConfig = config;

    const initialLang = pickInitialLang(config);
    ensureToggle(config, initialLang);
    applyLanguage(config, initialLang);
};

document.addEventListener('click', (event) => {
    const clickedElement = event.target.closest('a, button');
    if (!clickedElement) {
        return;
    }

    const href = clickedElement.getAttribute('href') || '';
    const trackedEventName = clickedElement.dataset.trackEvent;
    const fallbackEventName = href.includes('demo.mariaappsec.com') ? 'demo_click' : '';
    const eventName = trackedEventName || fallbackEventName;

    if (!eventName) {
        return;
    }

    const eventLabel = (clickedElement.textContent || '').trim().slice(0, 80);
    const eventLocation = clickedElement.dataset.trackLocation || (isWhyPage ? 'why_page' : 'index_page');

    trackGAEvent(eventName, {
        event_category: 'engagement',
        event_label: eventLabel,
        cta_location: eventLocation,
        link_url: href
    });
});

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

if (form && submitButton) {
    form.addEventListener('submit', () => {
        trackGAEvent('waitlist_submit', {
            event_category: 'conversion',
            cta_location: 'waitlist_form'
        });
        submitButton.disabled = true;
        submitButton.textContent = activeSendingText;
    });
}

void initI18n();
