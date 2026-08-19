const stages = [
    {
        key: 'sast',
        acronym: 'SAST',
        title: 'Static Application Security Testing',
        tools: [
            { key: 'semgrep', name: 'Semgrep CE', logo: '../img/integrations/semgrep.svg', version: '1.162.0', license: 'LGPL-2.1', output: 'SARIF', recommended: true, note: 'Open-source ruleset via p/ci by default.' },
            { key: 'opengrep', name: 'Opengrep', logo: '../img/integrations/opengrep.svg', version: '1.20.0', license: 'LGPL-2.1', output: 'SARIF', recommended: false, note: 'Semgrep-compatible option for SAST.' }
        ]
    },
    {
        key: 'secrets',
        acronym: 'Secrets',
        title: 'Secret Scanning',
        tools: [
            { key: 'gitleaks', name: 'Gitleaks', logo: '../img/integrations/gitleaks.svg', version: '8.30.1', license: 'MIT', output: 'SARIF', recommended: true, note: 'Git or directory secret scan with allowlist support.' },
            { key: 'trufflehog', name: 'TruffleHog', logo: '../img/integrations/trufflehog.svg', version: '3.95.0', license: 'AGPL-3.0', output: 'JSONL/SARIF', recommended: false, note: 'Optional verified credential checks.' },
            { key: 'trivy-secret', name: 'Trivy Secret', logo: '../img/integrations/trivy.svg', version: '0.70.0', license: 'Apache-2.0', output: 'SARIF', recommended: false, note: 'Filesystem secret scanner.' }
        ]
    },
    {
        key: 'sca',
        acronym: 'SCA',
        title: 'Software Composition Analysis',
        tools: [
            { key: 'osv-scanner', name: 'OSV-Scanner', logo: '../img/integrations/osv-scanner.svg', version: '2.3.8', license: 'Apache-2.0', output: 'SARIF', recommended: true, note: 'Best with lockfiles and OSV data.' },
            { key: 'dependency-check', name: 'OWASP Dependency-Check', logo: '../img/integrations/dependency-check.png', version: '12.2.2', license: 'Apache-2.0', output: 'SARIF', recommended: false, note: 'Broad OWASP dependency analysis.' },
            { key: 'grype', name: 'Grype', logo: '../img/integrations/grype.svg', version: '0.92.0', license: 'Apache-2.0', output: 'SARIF', recommended: false, note: 'Anchore vulnerability data for filesystem scan.' },
            { key: 'trivy-sca', name: 'Trivy SCA', logo: '../img/integrations/trivy.svg', version: '0.70.0', license: 'Apache-2.0', output: 'SARIF', recommended: false, note: 'Trivy vulnerability scan for source tree.' }
        ]
    },
    {
        key: 'container',
        acronym: 'Container',
        title: 'Container Image Scanning',
        tools: [
            { key: 'trivy-container', name: 'Trivy', logo: '../img/integrations/trivy.svg', version: '0.70.0', license: 'Apache-2.0', output: 'SARIF', recommended: true, note: 'Requires MARIA_TRIVY_IMAGE_REF variable.' },
            { key: 'grype-container', name: 'Grype', logo: '../img/integrations/grype.svg', version: '0.92.0', license: 'Apache-2.0', output: 'SARIF', recommended: false, note: 'Requires MARIA_GRYPE_IMAGE_REF variable.' }
        ]
    },
    {
        key: 'iac',
        acronym: 'IaC',
        title: 'Infrastructure as Code Scanning',
        tools: [
            { key: 'kics', name: 'KICS', logo: '../img/integrations/kics.png', version: '2.1.20', license: 'Apache-2.0', output: 'SARIF', recommended: true, note: 'Terraform, Kubernetes, Dockerfile and more.' },
            { key: 'checkov', name: 'Checkov', logo: '../img/integrations/checkov.svg', version: '3.2.527', license: 'Apache-2.0', output: 'SARIF', recommended: false, note: 'Broad IaC policy coverage.' },
            { key: 'trivy-iac', name: 'Trivy IaC', logo: '../img/integrations/trivy.svg', version: '0.70.0', license: 'Apache-2.0', output: 'SARIF', recommended: false, note: 'Misconfiguration scan with Trivy.' }
        ]
    },
    {
        key: 'dast',
        acronym: 'DAST',
        title: 'Dynamic Application Security Testing',
        tools: [
            { key: 'zap-baseline', name: 'OWASP ZAP Baseline', logo: '../img/integrations/owasp-zap.png', version: '2.17.0', license: 'Apache-2.0', output: 'JSON', recommended: false, note: 'Passive baseline only; requires authorized target.' },
            { key: 'nuclei', name: 'Nuclei', logo: '../img/integrations/nuclei.svg', version: '3.8.0', license: 'MIT', output: 'SARIF', recommended: false, note: 'Template-based scan; requires authorized target.' }
        ]
    },
    {
        key: 'malware',
        acronym: 'Malware',
        title: 'Malware Scanning',
        tools: [
            { key: 'clamav', name: 'ClamAV', logo: '../img/integrations/clamav.svg', version: '1.4.3', license: 'GPL-2.0-only', output: 'SARIF', recommended: false, note: 'Offline repository/artifact malware scan.' },
            { key: 'virustotal-hash', name: 'VirusTotal Hash Lookup', logo: '../img/integrations/virustotal.svg', version: 'v3 API', license: 'API terms', output: 'SARIF', recommended: false, note: 'Hash lookup only; no file upload.' }
        ]
    },
    {
        key: 'sbom',
        acronym: 'SBOM',
        title: 'Software Bill of Materials',
        tools: [
            { key: 'cdxgen', name: 'cdxgen', logo: '../img/integrations/cyclonedx.svg', version: '12.0.0', license: 'Apache-2.0', output: 'CycloneDX JSON', recommended: true, note: 'CycloneDX SBOM generator.' },
            { key: 'syft', name: 'Syft', logo: '../img/integrations/syft.svg', version: '1.38.0', license: 'Apache-2.0', output: 'CycloneDX JSON', recommended: false, note: 'Anchore SBOM generator.' }
        ]
    }
];

const stackGrid = document.getElementById('stackGrid');
const scanFlow = document.getElementById('scanFlow');
const selectedSummary = document.getElementById('selectedSummary');
const fileList = document.getElementById('fileList');

const selected = new Set(stages.flatMap(stage => stage.tools.filter(tool => tool.recommended).map(tool => tool.key)));
const copy = {
    'pt-BR': {
        notSelected: 'Não selecionado',
        selected: (count) => `${count} ferramenta${count === 1 ? '' : 's'} selecionada${count === 1 ? '' : 's'}`,
        download: 'Download ZIP',
        downloading: 'Gerando ZIP...',
        downloaded: 'ZIP gerado',
        recommended: 'Selecionar recomendado',
        clear: 'Limpar stack',
        nav: {
            '/product/': 'Produto',
            '/openscan/': 'Open Scan',
            '/pricing/': 'Preços',
            '/why/': 'História',
            '/enterprise/': 'Enterprise'
        },
        navDemo: 'Ver demo',
        brand: 'Scanners open-source. Inteligência de risco quando você estiver pronto.',
        heroEyebrow: 'FREE OPEN SCAN PACK',
        heroTitle: 'Comece AppSec sem esperar budget enterprise.',
        heroSubtitle: 'Escolha uma stack mínima de scanners open-source, baixe os templates e rode tudo no seu CI. Sem login. Sem conectar GitHub. Sem entregar código para ninguém.',
        heroPrimary: 'Gerar templates grátis',
        heroSecondary: 'Ver versão automatizada',
        upgradeKicker: 'O upgrade natural',
        upgradeTitle: 'No MARIA pago, isso vira programa.',
        upgradeItems: [
            'Cria pull requests direto nos repositórios.',
            'Gera tokens e configura upload de SARIF, JSON e CycloneDX.',
            'Normaliza findings, cria baseline e calcula risk score.',
            'Comenta delta de risco em pull requests.'
        ],
        generatorEyebrow: 'GENERATOR',
        generatorTitle: 'Escolha sua stack',
        generatorCopy: 'O pacote gerado inclui GitHub Actions e arquivos de configuração. O upload para MARIA fica comentado como próximo passo.',
        previewEyebrow: 'O QUE VEM NO ZIP',
        previewTitle: 'Templates prontos para revisar e commitar.',
        previewCopy: 'Nada é executado pelo site. O download é gerado no navegador e os scanners rodam no CI/CD do seu repositório.',
        bottomDownload: 'Baixar maria-open-scan-pack.zip',
        paidCta: 'Quero o MARIA automatizando isso',
        footerCopy: 'Templates grátis colocam você em movimento. MARIA transforma outputs de scanners em inteligência de risco de aplicação.',
        afterEyebrow: 'PACK BAIXADO',
        afterTitle: 'Agora instale. Leva menos de um minuto.',
        afterSteps: [
            'Descompacte na raiz do repositório. Os caminhos já estão prontos: <code>.github/workflows/</code>, <code>.maria/</code> e os arquivos de config na raiz.',
            'Abra <code>.github/workflows/maria-open-scan.yml</code> e revise os gatilhos. Ele já vem com <code>workflow_dispatch</code>, então dá para rodar na mão antes de ligar no push.',
            'Se marcou Container, DAST ou VirusTotal, defina as variáveis do repositório que o workflow referencia (<code>MARIA_TRIVY_IMAGE_REF</code>, <code>MARIA_ZAP_TARGET_URL</code> e afins). Sem elas, esses jobs não têm alvo.',
            'Commit, push e rode pela aba Actions. Os resultados saem em <code>maria-results/</code> como SARIF, JSON e CycloneDX.'
        ],
        optinTitle: 'Quer saber quando eu atualizar isso?',
        optinBody: 'Os scanners mudam de versão, quebram flag e mudam formato de saída. Quando eu atualizar os templates, eu te aviso. Sem sequência de vendas.',
        optinEmailLabel: 'E-mail',
        optinPlaceholder: 'voce@empresa.com',
        optinConsent: 'Pode me mandar atualizações dos templates e conteúdo de AppSec.',
        optinSubmit: 'Me avisa quando atualizar',
        optinSending: 'Enviando...',
        optinOk: 'Pronto. Te aviso quando sair versão nova.',
        optinErrEmail: 'Confere o e-mail.',
        optinErrConsent: 'Marque o consentimento para eu poder te escrever.',
        optinErrGeneric: 'Não consegui registrar agora. Seu download não foi afetado.',
        ladderEyebrow: 'PRÓXIMO DEGRAU',
        ladderItems: [
            { text: 'Quer isso rodando contínuo no CI, com risco calculado e delta em PR', link: 'MARIA', href: '/pricing/' },
            { text: 'Quer alguém junto por 3 dias arrumando isso no seu ambiente', link: 'AppSec Nightmare', href: 'COLE_AQUI_URL_APPSEC_NIGHTMARE' },
            { text: 'Quer capacitar o time para não depender de você', link: 'Software de Ferro', href: 'COLE_AQUI_URL_SOFTWARE_DE_FERRO' }
        ],
        ladderBook: 'Falar comigo'
    },
    'en-US': {
        notSelected: 'Not selected',
        selected: (count) => `${count} tool${count === 1 ? '' : 's'} selected`,
        download: 'Download ZIP',
        downloading: 'Generating ZIP...',
        downloaded: 'ZIP generated',
        recommended: 'Select recommended',
        clear: 'Clear stack',
        nav: {
            '/product/': 'Product',
            '/openscan/': 'Open Scan',
            '/pricing/': 'Pricing',
            '/why/': 'Why',
            '/enterprise/': 'Enterprise'
        },
        navDemo: 'See the demo',
        brand: 'Open-source scanners. Risk intelligence when you are ready.',
        heroEyebrow: 'FREE OPEN SCAN PACK',
        heroTitle: 'Start AppSec without waiting for enterprise budget.',
        heroSubtitle: 'Choose a minimal open-source scanner stack, download CI templates, and run everything in your own pipeline. No login. No SCM connection. No code shared.',
        heroPrimary: 'Generate free templates',
        heroSecondary: 'See automated version',
        upgradeKicker: 'The natural upgrade',
        upgradeTitle: 'With paid MARIA, this becomes a program.',
        upgradeItems: [
            'Creates pull requests directly in your repositories.',
            'Generates tokens and configures SARIF, JSON and CycloneDX upload.',
            'Normalizes findings, creates baseline and calculates risk score.',
            'Comments risk delta on pull requests.'
        ],
        generatorEyebrow: 'GENERATOR',
        generatorTitle: 'Choose your stack',
        generatorCopy: 'The generated pack includes GitHub Actions and configuration files. MARIA upload remains documented as the next step.',
        previewEyebrow: 'WHAT IS IN THE ZIP',
        previewTitle: 'Templates ready to review and commit.',
        previewCopy: 'Nothing runs on this site. The download is generated in your browser and scanners run in your repository CI/CD.',
        bottomDownload: 'Download maria-open-scan-pack.zip',
        paidCta: 'I want MARIA to automate this',
        footerCopy: 'Free templates get you started. MARIA turns scanner outputs into application risk intelligence.',
        afterEyebrow: 'PACK DOWNLOADED',
        afterTitle: 'Now install it. Takes under a minute.',
        afterSteps: [
            'Unzip at the root of your repository. The paths are already correct: <code>.github/workflows/</code>, <code>.maria/</code> and the config files at root level.',
            'Open <code>.github/workflows/maria-open-scan.yml</code> and review the triggers. It ships with <code>workflow_dispatch</code>, so you can run it by hand before wiring it to push.',
            'If you picked Container, DAST or VirusTotal, set the repository variables the workflow references (<code>MARIA_TRIVY_IMAGE_REF</code>, <code>MARIA_ZAP_TARGET_URL</code> and friends). Without them those jobs have no target.',
            'Commit, push and run it from the Actions tab. Results land in <code>maria-results/</code> as SARIF, JSON and CycloneDX.'
        ],
        optinTitle: 'Want to know when I update this?',
        optinBody: 'Scanners bump versions, break flags and change output formats. When I update the templates, I let you know. No sales sequence.',
        optinEmailLabel: 'Email',
        optinPlaceholder: 'you@company.com',
        optinConsent: 'You can send me template updates and AppSec content.',
        optinSubmit: 'Tell me when it updates',
        optinSending: 'Sending...',
        optinOk: 'Done. I will ping you when a new version ships.',
        optinErrEmail: 'Check the email address.',
        optinErrConsent: 'Tick the consent box so I can write to you.',
        optinErrGeneric: 'Could not register that right now. Your download was not affected.',
        ladderEyebrow: 'NEXT STEP',
        ladderItems: [
            { text: 'Want this running continuously in CI, with calculated risk and PR deltas', link: 'MARIA', href: '/pricing/' },
            { text: 'Want someone alongside you for 3 days fixing this in your environment', link: 'AppSec Nightmare', href: 'COLE_AQUI_URL_APPSEC_NIGHTMARE' },
            { text: 'Want to train the team so it stops depending on you', link: 'Software de Ferro', href: 'COLE_AQUI_URL_SOFTWARE_DE_FERRO' }
        ],
        ladderBook: 'Talk to me'
    }
};

const yamlList = (values, indent = 10) => values.map(value => `${' '.repeat(indent)}- ${value}`).join('\n');
const checked = (key) => selected.has(key);
const fileSafe = (text) => String(text).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const currentLang = () => localStorage.getItem('maria_lang') === 'en-US' ? 'en-US' : 'pt-BR';
const t = () => copy[currentLang()];

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
}

function setHtml(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
}

function applyOpenScanLanguage() {
    const lang = t();
    document.documentElement.lang = currentLang();
    document.title = currentLang() === 'en-US'
        ? 'MARIA Open Scan Pack Generator | Free AppSec templates'
        : 'MARIA Open Scan Pack Generator | Templates AppSec gratuitos';
    // Keyed by href, not by position: adding or reordering a nav item must not
    // silently relabel the others.
    document.querySelectorAll('.site-nav a, .footer-nav a').forEach((link) => {
        const label = lang.nav[link.getAttribute('href')];
        if (label) link.textContent = label;
    });
    setText('.header-actions .button', lang.navDemo);
    setText('.brand-copy', lang.brand);
    setText('.openscan-hero .eyebrow', lang.heroEyebrow);
    setText('.openscan-hero h1', lang.heroTitle);
    setText('.openscan-hero .hero-subtitle', lang.heroSubtitle);
    setText('.openscan-hero .hero-actions a:nth-child(1)', lang.heroPrimary);
    setText('.openscan-hero .hero-actions a:nth-child(2)', lang.heroSecondary);
    setText('.openscan-upgrade-card .card-kicker', lang.upgradeKicker);
    setText('.openscan-upgrade-card h2', lang.upgradeTitle);
    setHtml('.openscan-upgrade-card ul', lang.upgradeItems.map(item => `<li>${item}</li>`).join(''));
    setText('.openscan-generator-section .eyebrow', lang.generatorEyebrow);
    setText('.openscan-generator-section h2', lang.generatorTitle);
    setText('.openscan-generator-section .section-copy', lang.generatorCopy);
    setText('#selectRecommended', lang.recommended);
    setText('#clearStack', lang.clear);
    setText('.openscan-preview-section .eyebrow', lang.previewEyebrow);
    setText('.openscan-preview-section h2', lang.previewTitle);
    setText('.openscan-preview-section .section-copy', lang.previewCopy);
    setText('#downloadPackBottom', lang.bottomDownload);
    setText('.openscan-preview-section a.button-secondary', lang.paidCta);
    setText('.footer-copy', lang.footerCopy);
    document.querySelectorAll('[data-openscan-download]').forEach(button => {
        if (!button.classList.contains('is-busy') && !button.classList.contains('is-done')) {
            button.textContent = button.id === 'downloadPackBottom' ? lang.bottomDownload : lang.download;
        }
    });
    if (typeof renderAfterPanel === 'function' && document.getElementById('openscanAfter')) {
        renderAfterPanel();
    }
    render();
}

function render() {
    scanFlow.innerHTML = stages.map(stage => {
        const active = stage.tools.some(tool => selected.has(tool.key));
        const tool = stage.tools.find(candidate => selected.has(candidate.key));
        return `
            <div class="openscan-flow-step ${active ? 'is-active' : ''}">
                <span></span>
                <strong>${stage.acronym}</strong>
                <small>${tool ? tool.name : t().notSelected}</small>
            </div>
        `;
    }).join('');

    stackGrid.innerHTML = stages.map(stage => `
        <section class="openscan-stage-card ${stage.tools.some(tool => selected.has(tool.key)) ? 'is-active' : ''}">
            <div class="openscan-stage-card-header">
                <div>
                    <span>${stage.acronym}</span>
                    <h3>${stage.title}</h3>
                </div>
            </div>
            <div class="openscan-tool-list">
                ${stage.tools.map(tool => `
                    <label class="openscan-tool-card ${checked(tool.key) ? 'is-selected' : ''}">
                        <input type="checkbox" value="${tool.key}" ${checked(tool.key) ? 'checked' : ''}>
                        <span class="openscan-tool-logo"><img src="${tool.logo}" alt="" loading="lazy"></span>
                        <span class="openscan-tool-copy">
                            <strong>${tool.name}</strong>
                        </span>
                        <span class="openscan-switch"><span></span></span>
                    </label>
                `).join('')}
            </div>
        </section>
    `).join('');

    stackGrid.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.addEventListener('change', () => {
            const stage = stages.find(candidate => candidate.tools.some(tool => tool.key === input.value));
            if (input.checked && stage) {
                stage.tools.forEach(tool => selected.delete(tool.key));
                selected.add(input.value);
            } else {
                selected.delete(input.value);
            }
            render();
        });
    });

    const count = selected.size;
    selectedSummary.textContent = t().selected(count);
    fileList.innerHTML = buildFiles().map(file => `<code>${file.path}</code>`).join('');
}

function enabledTools() {
    return stages.flatMap(stage => stage.tools.filter(tool => selected.has(tool.key)).map(tool => ({ ...tool, category: stage.key })));
}

function buildFiles() {
    const tools = enabledTools();
    return [
        { path: '.maria/scanners.yml', content: scannersYaml(tools) },
        { path: '.github/workflows/maria-open-scan.yml', content: githubWorkflow() },
        { path: '.gitleaks.toml', content: gitleaksConfig() },
        { path: '.trivy.yaml', content: trivyConfig() },
        { path: 'kics.config', content: kicsConfig() },
        { path: '.zap/rules.tsv', content: zapRules() },
        { path: 'README.md', content: readme(tools) }
    ];
}

function scannersYaml(tools) {
    const rows = tools.map(tool => `  ${tool.key}:
    enabled: true
    name: "${fileSafe(tool.name)}"
    category: "${tool.category}"
    version: "${fileSafe(tool.version)}"
    license: "${fileSafe(tool.license)}"
    output: "${fileSafe(tool.output)}"`).join('\n');

    return `version: 1
repository:
  provider: github
  default_branch: "main"
scanners:
${rows || '  none:\n    enabled: false'}
upload:
  maria_required: false
  note: "Set MARIA_API_URL and MARIA_UPLOAD_TOKEN only when you want MARIA to ingest SARIF, JSON and CycloneDX artifacts."
`;
}

function githubWorkflow() {
    const steps = [
        `      - name: Checkout
        uses: actions/checkout@34e114876b0b11c390a56381ad16ebd13914f8d5
        with:
          fetch-depth: 0`,
        `      - name: Prepare output directory
        run: mkdir -p maria-results`
    ];

    if (selected.has('semgrep')) steps.push(`      - name: Semgrep CE
        run: docker run --rm -v "$PWD:/src" semgrep/semgrep:1.162.0 semgrep scan --config p/ci --sarif --output /src/maria-results/semgrep.sarif --exclude tests --exclude docs --exclude vendor --exclude node_modules /src`);
    if (selected.has('opengrep')) steps.push(`      - name: Opengrep
        run: |
          curl -sSL -o opengrep https://github.com/opengrep/opengrep/releases/download/v1.20.0/opengrep_manylinux_x86
          chmod +x opengrep
          ./opengrep scan --config p/ci --sarif --output maria-results/opengrep.sarif .`);
    if (selected.has('gitleaks')) steps.push(`      - name: Gitleaks
        run: docker run --rm -v "$PWD:/repo" ghcr.io/gitleaks/gitleaks:v8.30.1 detect --source /repo --config /repo/.gitleaks.toml --report-format sarif --report-path /repo/maria-results/gitleaks.sarif --redact --verbose --exit-code 0`);
    if (selected.has('trufflehog')) steps.push(`      - name: TruffleHog
        run: docker run --rm -v "$PWD:/repo" ghcr.io/trufflesecurity/trufflehog:v3.95.0 git file:///repo --json --no-update > maria-results/trufflehog.jsonl || true`);
    if (selected.has('trivy-secret')) steps.push(trivyFsStep('Trivy Secret', 'secret', 'trivy-secret'));
    if (selected.has('osv-scanner')) steps.push(`      - name: OSV-Scanner
        run: docker run --rm -v "$PWD:/src" ghcr.io/google/osv-scanner:v2.3.8 scan source --recursive --format sarif --output /src/maria-results/osv-scanner.sarif /src`);
    if (selected.has('dependency-check')) steps.push(`      - name: OWASP Dependency-Check
        run: docker run --rm -v "$PWD:/src" -v "$PWD/maria-results:/report" owasp/dependency-check:12.2.2 --scan /src --format SARIF --out /report --project "$GITHUB_REPOSITORY" --failOnCVSS 11 --prettyPrint --disableOssIndex --disableNodeAudit`);
    if (selected.has('grype')) steps.push(`      - name: Grype SCA
        run: docker run --rm -v "$PWD:/src" anchore/grype:v0.92.0 dir:/src -o sarif --fail-on negligible > maria-results/grype.sarif || true`);
    if (selected.has('trivy-sca')) steps.push(trivyFsStep('Trivy SCA', 'vuln', 'trivy-sca'));
    if (selected.has('trivy-container')) steps.push(`      - name: Trivy Container
        if: vars.MARIA_TRIVY_IMAGE_REF != ''
        uses: aquasecurity/trivy-action@ed142fd0673e97e23eac54620cfb913e5ce36c25
        with:
          image-ref: \${{ vars.MARIA_TRIVY_IMAGE_REF }}
          format: sarif
          output: maria-results/trivy-container.sarif
          vuln-type: os,library
          severity: UNKNOWN,LOW,MEDIUM,HIGH,CRITICAL`);
    if (selected.has('grype-container')) steps.push(`      - name: Grype Container
        if: vars.MARIA_GRYPE_IMAGE_REF != ''
        run: docker run --rm anchore/grype:v0.92.0 "\${{ vars.MARIA_GRYPE_IMAGE_REF }}" -o sarif > maria-results/grype-container.sarif`);
    if (selected.has('kics')) steps.push(`      - name: KICS
        run: docker run --rm -v "$PWD:/path" checkmarx/kics:v2.1.20-debian scan --config /path/kics.config --report-formats sarif --output-path /path/maria-results --output-name kics --ignore-on-exit results`);
    if (selected.has('checkov')) steps.push(`      - name: Checkov
        run: docker run --rm -v "$PWD:/src" bridgecrew/checkov:3.2.527 -d /src --framework terraform,kubernetes,cloudformation,dockerfile,secrets --output sarif --output-file-path /src/maria-results/checkov.sarif --compact --quiet || true`);
    if (selected.has('trivy-iac')) steps.push(trivyFsStep('Trivy IaC', 'misconfig', 'trivy-iac'));
    if (selected.has('zap-baseline')) steps.push(`      - name: OWASP ZAP Baseline
        if: vars.MARIA_ZAP_TARGET_URL != ''
        run: docker run --rm -v "$PWD:/zap/wrk" ghcr.io/zaproxy/zaproxy:2.17.0 zap-baseline.py -t "\${{ vars.MARIA_ZAP_TARGET_URL }}" -J maria-results/zap-baseline.json -c .zap/rules.tsv || true`);
    if (selected.has('nuclei')) steps.push(`      - name: Nuclei
        if: vars.MARIA_NUCLEI_TARGET_URL != ''
        run: docker run --rm -v "$PWD:/work" projectdiscovery/nuclei:v3.8.0 -u "\${{ vars.MARIA_NUCLEI_TARGET_URL }}" -severity low,medium,high,critical -sarif-export /work/maria-results/nuclei.sarif -no-color || true`);
    if (selected.has('clamav')) steps.push(`      - name: ClamAV
        run: docker run --rm -v "$PWD:/scan:ro" -v "$PWD/maria-results:/out" clamav/clamav:1.4.3 clamscan -r --infected --no-summary /scan > maria-results/clamav.txt || true`);
    if (selected.has('virustotal-hash')) steps.push(`      - name: VirusTotal Hash Lookup
        if: secrets.VIRUSTOTAL_API_KEY != ''
        run: echo "Hash lookup template included. Add organization-approved hashing scope before enabling in production." > maria-results/virustotal.sarif`);
    if (selected.has('cdxgen')) steps.push(`      - name: cdxgen SBOM
        run: docker run --rm -v "$PWD:/app" ghcr.io/cyclonedx/cdxgen:v12.0.0 -r /app -o /app/maria-results/cdxgen.cdx.json`);
    if (selected.has('syft')) steps.push(`      - name: Syft SBOM
        run: docker run --rm -v "$PWD:/src" anchore/syft:v1.38.0 dir:/src -o cyclonedx-json=/src/maria-results/syft.cdx.json`);

    steps.push(`      - name: Upload SARIF results to GitHub Code Scanning
        uses: github/codeql-action/upload-sarif@68bde559dea0fdcac2102bfdf6230c5f70eb485e
        if: always()
        with:
          sarif_file: maria-results
        continue-on-error: true`);
    steps.push(`      - name: MARIA upload placeholder
        if: always()
        run: |
          if [ -z "\${MARIA_API_URL:-}" ] || [ -z "\${MARIA_UPLOAD_TOKEN:-}" ]; then
            echo "::notice title=MARIA upload skipped::Set MARIA_API_URL and MARIA_UPLOAD_TOKEN when you are ready to ingest artifacts into MARIA."
            exit 0
          fi
          echo "Upload SARIF, ZAP JSON and CycloneDX files to MARIA here."`);

    return `name: MARIA Open Scan Pack

on:
  push:
    branches: ["main", "master", "develop"]
  pull_request:
    branches: ["main", "master", "develop"]
  workflow_dispatch:

permissions:
  contents: read
  security-events: write

jobs:
  open-scan:
    name: Open-source AppSec scans
    runs-on: ubuntu-24.04
    env:
      MARIA_API_URL: \${{ vars.MARIA_API_URL }}
      MARIA_UPLOAD_TOKEN: \${{ secrets.MARIA_UPLOAD_TOKEN }}
    steps:
${steps.join('\n\n')}
`;
}

function trivyFsStep(title, scanners, outputName) {
    return `      - name: ${title}
        run: docker run --rm -v "$PWD:/src" aquasec/trivy:0.70.0 fs --scanners ${scanners} --format sarif --output /src/maria-results/${outputName}.sarif --severity UNKNOWN,LOW,MEDIUM,HIGH,CRITICAL --skip-dirs /src/node_modules --skip-dirs /src/vendor /src`;
}

function gitleaksConfig() {
    return `title = "MARIA Gitleaks Config"

[extend]
useDefault = true

[allowlist]
description = "Ignore common test fixture paths. Secret values should never be stored in MARIA."
paths = [
  '''(^|/)test(s)?/fixtures/''',
  '''(^|/)docs/'''
]
`;
}

function trivyConfig() {
    return `severity:
${yamlList(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'], 2)}
ignore-unfixed: true
vuln-type:
${yamlList(['os', 'library'], 2)}
`;
}

function kicsConfig() {
    return `path: /path
exclude-paths:
  - node_modules
  - vendor
type:
  - all
disable-full-descriptions: true
`;
}

function zapRules() {
    return `# ZAP baseline passive rule policy.
# Format: <rule-id><tab>WARN|IGNORE|FAIL<tab>(description)
10010\tWARN\t(Cookie No HttpOnly Flag)
10011\tWARN\t(Cookie Without Secure Flag)
10020\tWARN\t(X-Frame-Options Header Scanner)
10021\tWARN\t(X-Content-Type-Options Header Missing)
10202\tWARN\t(Absence of Anti-CSRF Tokens)
`;
}

function readme(tools) {
    return `# MARIA Open Scan Pack

This free template pack runs selected open-source AppSec scanners in GitHub Actions.
It does not require a MARIA account.

## Enabled tools

${tools.map(tool => `- ${tool.name} ${tool.version} (${tool.category}, ${tool.output})`).join('\n') || '- No scanner selected'}

## How to use

1. Copy these files to the root of your repository.
2. Commit them in a branch and open a pull request.
3. Configure optional repository variables when selected:
   - MARIA_TRIVY_IMAGE_REF for container Trivy.
   - MARIA_GRYPE_IMAGE_REF for container Grype.
   - MARIA_ZAP_TARGET_URL for ZAP baseline.
   - MARIA_NUCLEI_TARGET_URL for Nuclei.
4. Review SARIF, JSON and CycloneDX artifacts in the workflow run.

## Upgrade path

MARIA paid automation connects to your SCM, creates pull requests, uploads artifacts, normalizes findings, creates baseline, calculates risk score and comments risk delta on pull requests.
`;
}

function crc32(bytes) {
    let crc = -1;
    for (let i = 0; i < bytes.length; i += 1) {
        crc ^= bytes[i];
        for (let j = 0; j < 8; j += 1) {
            crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
        }
    }
    return (crc ^ -1) >>> 0;
}

function u16(value) {
    return [value & 255, (value >>> 8) & 255];
}

function u32(value) {
    return [value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255];
}

function makeZip(files) {
    const encoder = new TextEncoder();
    const chunks = [];
    const central = [];
    let offset = 0;

    files.forEach(file => {
        const name = encoder.encode(file.path);
        const data = encoder.encode(file.content);
        const crc = crc32(data);
        const local = new Uint8Array([
            ...u32(0x04034b50), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0),
            ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0),
            ...name, ...data
        ]);
        chunks.push(local);
        central.push(new Uint8Array([
            ...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0),
            ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...u16(0),
            ...u16(0), ...u16(0), ...u32(0), ...u32(offset), ...name
        ]));
        offset += local.length;
    });

    const centralSize = central.reduce((sum, item) => sum + item.length, 0);
    const end = new Uint8Array([
        ...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length),
        ...u32(centralSize), ...u32(offset), ...u16(0)
    ]);

    return new Blob([...chunks, ...central, end], { type: 'application/zip' });
}

function downloadPack(button) {
    const lang = t();
    const buttons = document.querySelectorAll('[data-openscan-download]');
    buttons.forEach(item => {
        item.classList.remove('is-done');
        item.classList.add('is-busy');
        item.textContent = lang.downloading;
    });

    const blob = makeZip(buildFiles());
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'maria-open-scan-pack.zip';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    buttons.forEach(item => {
        item.classList.remove('is-busy');
        item.classList.add('is-done');
        item.textContent = lang.downloaded;
    });

    window.setTimeout(() => {
        buttons.forEach(item => {
            item.classList.remove('is-done');
            item.textContent = item.id === 'downloadPackBottom' ? t().bottomDownload : t().download;
        });
    }, 1800);

    if (typeof window.gtag === 'function') {
        window.gtag('event', 'openscan_download', {
            event_category: 'conversion',
            selected_tools: Array.from(selected).join(',')
        });
    }

    revealAfterPanel();
}

document.getElementById('selectRecommended')?.addEventListener('click', () => {
    selected.clear();
    stages.flatMap(stage => stage.tools).filter(tool => tool.recommended).forEach(tool => selected.add(tool.key));
    render();
});

document.getElementById('clearStack')?.addEventListener('click', () => {
    selected.clear();
    render();
});

document.getElementById('downloadPackTop')?.addEventListener('click', event => downloadPack(event.currentTarget));
document.getElementById('downloadPackBottom')?.addEventListener('click', event => downloadPack(event.currentTarget));
document.addEventListener('click', event => {
    if (event.target.closest('.lang-toggle button')) {
        window.setTimeout(applyOpenScanLanguage, 0);
    }
});



/* =========================================================================
   Painel pos-download: instrucoes, opt-in de e-mail e ponte para a escada.
   O download NAO depende de nada aqui. Os templates ja sao publicos em
   js/openscan.js e no repositorio, entao gatear o arquivo seria teatro.
   O e-mail e opt-in honesto, pedido depois da pessoa ja ter o que veio buscar.
   ========================================================================= */

const afterPanel = document.getElementById('openscanAfter');
const optinForm = document.getElementById('optinForm');
const optinNote = document.getElementById('optinNote');
const optinSubmit = document.getElementById('optinSubmit');

let afterPanelShown = false;

function renderAfterPanel() {
    if (!afterPanel) return;
    const lang = t();

    setText('#afterEyebrow', lang.afterEyebrow);
    setText('#afterTitle', lang.afterTitle);
    setHtml('#afterSteps', (lang.afterSteps || []).map(step => `<li>${step}</li>`).join(''));

    setText('#optinTitle', lang.optinTitle);
    setText('#optinBody', lang.optinBody);
    setText('#optinEmailLabel', lang.optinEmailLabel);
    setText('#optinConsentText', lang.optinConsent);
    const email = document.getElementById('optinEmail');
    if (email) email.setAttribute('placeholder', lang.optinPlaceholder);
    if (optinSubmit && !optinSubmit.disabled) optinSubmit.textContent = lang.optinSubmit;

    setText('#ladderEyebrow', lang.ladderEyebrow);
    setHtml('#ladderList', (lang.ladderItems || []).map(item =>
        `<li>${item.text} <a href="${item.href}" data-track-event="ladder_click" data-track-location="openscan_after" data-ladder="${item.link}">${item.link}</a></li>`
    ).join(''));
    setText('#ladderBook', lang.ladderBook);
}

function revealAfterPanel() {
    if (!afterPanel) return;
    renderAfterPanel();
    afterPanel.hidden = false;

    // Rola uma vez so, e de forma suave. Nao rouba a rolagem em cada download.
    if (!afterPanelShown) {
        afterPanelShown = true;
        window.setTimeout(() => {
            afterPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
    }
}

function setFormState(state, message) {
    if (!optinForm) return;
    optinForm.dataset.state = state;
    if (optinNote) optinNote.textContent = message || '';
    if (optinSubmit) {
        optinSubmit.disabled = state === 'sending' || state === 'success';
        if (state === 'sending') optinSubmit.textContent = t().optinSending;
        else if (state === 'success') optinSubmit.textContent = t().optinOk;
        else optinSubmit.textContent = t().optinSubmit;
    }
}

/**
 * Mailchimp nao devolve CORS utilizavel. Tanto o fetch no-cors quanto o POST
 * via iframe sao opacos: da para saber que a requisicao saiu, nao da para saber
 * o que o Mailchimp respondeu. "Sucesso" aqui significa ENVIADO, nao CONFIRMADO.
 * Isso esta dito assim de proposito, para o codigo nao fingir uma garantia.
 */
function postToMailchimp(action, formData) {
    return fetch(action, { method: 'POST', mode: 'no-cors', body: formData })
        .catch(() => {
            // Fallback: POST nativo num iframe escondido, sem navegar a pagina.
            return new Promise((resolve, reject) => {
                try {
                    let frame = document.getElementById('mcSink');
                    if (!frame) {
                        frame = document.createElement('iframe');
                        frame.id = 'mcSink';
                        frame.name = 'mcSink';
                        frame.style.display = 'none';
                        document.body.appendChild(frame);
                    }
                    optinForm.setAttribute('action', action);
                    optinForm.setAttribute('target', 'mcSink');
                    HTMLFormElement.prototype.submit.call(optinForm);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        });
}

optinForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const lang = t();
    const email = document.getElementById('optinEmail');
    const consent = document.getElementById('optinConsent');

    if (!email || !email.value || !email.checkValidity()) {
        setFormState('error', lang.optinErrEmail);
        email?.focus();
        return;
    }
    if (consent && !consent.checked) {
        setFormState('error', lang.optinErrConsent);
        consent.focus();
        return;
    }

    setFormState('sending');

    const action = optinForm.dataset.mcAction || '';
    if (!action || action.startsWith('COLE_AQUI')) {
        // Mailchimp ainda nao configurado. Nao finge que deu certo.
        setFormState('error', lang.optinErrGeneric);
        return;
    }

    try {
        await postToMailchimp(action, new FormData(optinForm));
        setFormState('success', lang.optinOk);
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'lead_capture', {
                event_category: 'conversion',
                source: 'openscan'
            });
        }
    } catch (err) {
        setFormState('error', lang.optinErrGeneric);
    }
});

// Inicializa por ultimo: o painel pos-download precisa dos consts acima.
applyOpenScanLanguage();
