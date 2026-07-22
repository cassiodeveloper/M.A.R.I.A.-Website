# M.A.R.I.A. — Revisão de posicionamento, arquitetura e copy

> Documento de estratégia + copy pronta para implementação.
> Base: estado do repositório em 2026-07-20 (`index.html`, `why/`, `openscan/`, `i18n/translations.js`).
>
> **Convenção:** blocos marcados com ⚠️ contêm afirmações que eu **não posso verificar no repositório** (comportamento real do produto, integrações, garantias de privacidade). Confirme antes de publicar — claim errada em página de segurança é dano reputacional, não erro de copy.

---

## 1. Diagnóstico do posicionamento atual

### 1.1 O que está forte — não mexa

| Elemento | Por que funciona |
|---|---|
| Seção "pain" (`1000 vulnerabilidades / não sabe qual importa / ferramentas não concordam / time ignora`) | É a melhor coisa do site. Específica, ritmada, sem buzzword. Qualquer AppSec engineer se reconhece em 4 segundos. |
| "Not another scanner / Not another dashboard / Not another enterprise tool" | Posicionamento por negação é o caminho certo numa categoria saturada. Elimina o "ah, mais um scanner" antes que o visitante desista. |
| Pricing por repositório | É o diferencial comercial mais forte que você tem e está subexplorado. Todo ASPM cobra por dev. Isso merece mais destaque que a filosofia. |
| Open Scan Pack | Melhor ativo de topo de funil do site — entrega valor real sem login, sem conectar repositório. E é o funil perfeito: quem roda os scanners passa a ter SARIF, e quem tem SARIF tem o problema que M.A.R.I.A. resolve. |
| Página Why | Sóbria, sem melodrama, com a dose certa. Está ótima como texto. |

### 1.2 O que está fraco

**a) O site vende uma filosofia, não um produto.**
Este é o problema número um, e ele é maior que todos os outros somados. Não existe uma única evidência de que o produto exista e funcione: zero screenshot, zero exemplo de saída, zero descrição de setup, zero linha de JSON, zero comentário de PR de exemplo. O único "produto" visível é um mock de círculo com "72 Risk".

Dev e AppSec engineer avaliam ferramenta por um teste só: **"me mostra o output"**. Enquanto o site não mostrar (i) como o score é calculado, (ii) como aparece um comentário de PR, (iii) o que exatamente eu preciso fazer para ligar, o visitante técnico lê tudo, concorda com tudo e não converte — porque concordar com o diagnóstico não é acreditar na solução.

**b) Conflito de posicionamento: independente/acessível vs. tabela enterprise de $15k/mês.**
A landing diz "não é enterprise genérico", "iniciativa independente", "Gartner? Screw it" — e três seções abaixo mostra quatro cards de enterprise pricing até $15.000/mês com SSO e audit logs. Os dois públicos leem isso e desconfiam:
- O time pequeno pensa: "então eu sou o plano de entrada de uma ferramenta enterprise, vou ser abandonado".
- O comprador enterprise pensa: "$15k/mês de um fundador solo que xinga o Gartner na home?"

Você não pode atacar o enterprise e vender enterprise na mesma página. **Recomendação: enterprise sai da landing e vira `/enterprise/`.** Quem tem 3.000 repositórios chega por conversa, não por scroll.

**c) "Gartner? Screw it." precisa sair.**
Soa a atitude sem substância, e o público que decide compra (CTO, head de AppSec) frequentemente *usa* relatório de analista para justificar decisão internamente. Você ganha zero e perde credibilidade com quem assina. A mesma ideia — "não estamos otimizando para vitrine, estamos otimizando para risco real" — funciona sem antagonizar. Ver copy na seção 3.8.

**d) Frase "improve society" e afins.**
"Build safer systems that improve society" é vanity claim. Não é falso, é irrelevante para a decisão de compra e enfraquece o texto ao redor, que é bom.

**e) Quatro CTAs no hero = nenhum CTA.**
Hoje: *Join the waitlist*, *Free Open Scan Pack*, *See pricing*, *Try demo*. Quatro botões, dois deles com peso visual quase igual. O visitante não escolhe — ele rola. Máximo dois: uma ação primária e uma secundária.

**f) A demo é o seu melhor ativo e está tratada como link de rodapé.**
Se existe `demo.mariaappsec.com` funcionando, **a demo é o CTA primário do hero, não a waitlist.** Waitlist é o que se usa quando não há nada para mostrar. Você tem algo para mostrar. Sequência correta: *ver a demo → entender → entrar na waitlist*. Pedir e-mail antes de provar valor é a maior fonte de fricção do site atual.

**g) "No noise. No dashboards. Just risk clarity." — e o hero mostra um dashboard.**
A mensagem já está hedgeada na landing ("No dashboards (**if you want**)"), o que revela o desconforto. Dizer "sem dashboards" enquanto o produto claramente tem interface visual é uma contradição que o visitante nota. O inimigo não é dashboard: é **dashboard que mostra volume e não diz o que fazer**. Reescreva para atacar isso, não a existência de UI.

**h) "Stop fixing vulnerabilities."**
Como tagline de marca é memorável e eu manteria. Como H1, tem um problema: lido literalmente por um AppSec engineer, ele diz "pare de corrigir vulnerabilidades" — que é exatamente o oposto do trabalho dele, e o tipo de frase que faz o profissional sênior levantar a sobrancelha. Recomendo rebaixá-la para linha de marca / OG title e usar um H1 mais concreto (opções na seção 3.1).

**i) Zero prova social de qualquer tipo.**
Sem logos de clientes (esperado, é pré-lançamento), mas também **sem os logos dos scanners suportados** — que estão no repositório, prontos, em `img/integrations/` (Semgrep, Trivy, Grype, Syft, Gitleaks, TruffleHog, ZAP, Nuclei, Checkov, KICS, OSV-Scanner, CycloneDX, Dependency-Check, Opengrep, ClamAV, VirusTotal) e **não aparecem na landing**. Isso é a prova mais barata e mais convincente que você tem disponível hoje: mostra que o produto fala a língua das ferramentas que o visitante já roda, e sustenta o "não substituo suas ferramentas" visualmente, sem uma palavra.

**j) Você não existe no site.**
"Independent founder" sem nome, sem rosto, sem GitHub, sem histórico. Para um produto que pede **$499 de pagamento vitalício**, o comprador precisa saber quem você é. O link "Meet the founder" aponta para `https://cassiodevelo.com.br` — ⚠️ verificar, parece truncado.

### 1.3 O que confunde um visitante novo

1. **"O que eu preciso ter para usar isso?"** Nunca é respondido. Preciso já rodar scanners? Quais? E se eu só uso Dependabot? M.A.R.I.A. roda alguma coisa ou só lê? A seção "SARIF → M.A.R.I.A. → Act" assume que o visitante sabe o que é SARIF e que já produz SARIF — grande parte do público-alvo (dev, tech lead) não sabe e não produz.
2. **"Isso é um produto ou uma lista de espera?"** Header tem "Demo" apontando para fora, "Join", e a landing tem waitlist. O estado do produto (beta? disponível? vaporware?) nunca é declarado. Ambiguidade em estágio mata conversão de comprador sério.
3. **Open Scan Pack não tem relação explicada com o produto pago.** Está no menu como item solto. O visitante não entende se é o produto, uma amostra, ou outra coisa.
4. **Preço por repositório: $0.99 do quê?** Por mês? Por repositório por mês? A tabela mostra "1-10 repos → $0.99" sem unidade. Um comprador tem que fazer conta mental para descobrir. E o mínimo de $9.99 significa que a faixa de 1–10 repositórios é sempre $9.99 — ou seja, o "$0.99" só é verdadeiro a partir de 10 repositórios. Isso parece pegadinha, que é exatamente o oposto do que você quer transmitir. **Corrija: mostre "a partir de $9.99/mês" e um cálculo de exemplo.**
5. **Lifetime vs. Founder support.** $299 (50 repos) e $249 founder (50 repos, com mais coisas). O plano founder é mais barato e entrega mais, então o lifetime de $299 fica sem razão de existir enquanto houver vagas de founder. Um comprador atento nota e conclui que o preço é arbitrário.

### 1.4 Objeções não respondidas — as que estão custando conversão

Ordenadas por quanto bloqueiam a decisão:

1. **"Vocês leem meu código-fonte?"** — A objeção número um de qualquer ferramenta de segurança. Se M.A.R.I.A. consome apenas findings/SARIF/SBOM e não código, isso precisa estar **no hero**, em uma linha. É uma vantagem enorme sobre scanners e você não a está usando. ⚠️ confirmar o comportamento real.
2. **"Como o score é calculado?"** — Dev não confia em número de caixa-preta. Um score que ninguém entende é ignorado exatamente como os alertas que você promete substituir. Precisa haver uma página explicando os fatores e dizendo que é configurável (o site já afirma "configurável" — mostre como).
3. **"Quanto tempo até eu ver valor?"** — Sem resposta. Precisa ser explícito: X minutos para conectar, primeiro score em Y.
4. **"E se eu não gero SARIF?"** — Grande parte do público. Resposta pronta: o Open Scan Pack. Essa ponte não está construída no site.
5. **"Funciona com GitLab / Azure DevOps / Bitbucket?"** — O site só sugere GitHub. Silêncio aqui elimina metade do mercado sem que você saiba.
6. **"Você é um fundador solo. E se você parar?"** — Agravada, não aliviada, pelo lifetime: estou pagando $499 por "para sempre" de uma pessoa. Precisa de resposta honesta (política de dados exportáveis, o que acontece se o projeto parar). Isso *aumenta* a confiança quando dito abertamente.
7. **"Onde ficam meus dados? LGPD/GDPR? SOC 2?"** — Sem SOC 2 tudo bem em early stage; sem *dizer nada* não tem.
8. **"Vou ter que trocar minhas ferramentas?"** — Você responde ("não substituo"), mas apenas por negação. Falta o positivo: *estas* são as ferramentas que já funcionam.
9. **"Isso é mais um dashboard que meu time vai ignorar?"** — Responder com o fluxo no PR: a segurança chega onde o dev já está.

### 1.5 Problemas técnicos do repositório que afetam conversão e SEO

| # | Problema | Onde | Impacto |
|---|---|---|---|
| 1 | Script do Google Analytics carregado **duas vezes** (`gtag.js` + bloco de config duplicados) | `index.html:25-31` e `index.html:57-65` | Pageviews e eventos potencialmente duplicados → todo dado de conversão fica não confiável |
| 2 | i18n baseado em seletores CSS posicionais (`.site-nav a:nth-child(3)`, `.pain p:nth-child(2)`) | `i18n/translations.js` | **Bloqueante para a expansão do site.** Qualquer seção nova, reordenação ou parágrafo a mais quebra a tradução silenciosamente — sem erro, apenas texto em inglês para um visitante brasileiro. Migrar para `data-i18n="chave"` **antes** de criar as 5 páginas novas, não depois |
| 3 | Link GitHub placeholder `https://github.com/` | `why/index.html:98` | Link quebrado numa página de confiança |
| 4 | `<meta name="keywords">` | `index.html:8`, `why/index.html:8` | Ignorado por buscadores desde ~2009; sinaliza SEO amador para quem inspeciona (e seu público inspeciona) |
| 5 | Formulário posta direto no Formspree, sem página de retorno | `index.html:371` | **Impossível medir conversão.** Sem evento de sucesso ou `/thanks/`, você não sabe quantos se inscreveram por canal — está otimizando às cegas |
| 6 | Fonte HTML em inglês, `defaultLang: "pt-BR"` aplicado por JS | `js/script.js`, `i18n/` | Flash de conteúdo trocando de idioma no carregamento; e o Google indexa a versão em inglês apenas — o conteúdo PT-BR é invisível para busca (sem URLs próprias, sem `hreflang`) |
| 7 | Página `why/` tem `lang="pt-BR"` e conteúdo PT no HTML fonte; `index` tem EN | `why/index.html:2` | Inconsistência de fonte entre páginas; complica o i18n |
| 8 | Acentuação removida do texto PT-BR ("historia", "seguranca", "nao") | `why/index.html`, `i18n/translations.js` | Lê como site traduzido por máquina ou descuidado. Para o público brasileiro, mata credibilidade instantaneamente. Corrigir com UTF-8 correto |
| 9 | Sitemap sem as páginas novas e sem `lastmod` | `sitemap.xml` | Atualizar ao publicar |
| 10 | GA sem consentimento | todas as páginas | LGPD/GDPR. Alternativa que evita banner de cookie: analytics sem cookies (Plausible/Umami). Recomendo — banner de cookie num site que prega "sem ruído" é ironia cara |
| 11 | `<ul>` dentro de `<p>` no card Founder support | `index.html:228-236` | HTML inválido |
| 12 | Discrepância de preço: briefing diz "400+ → $5", site diz "Enterprise" | `index.html:204` | Definir a versão verdadeira |

---

## 2. Arquitetura recomendada do site

### 2.1 Princípio

Uma landing que **prova** em vez de afirmar, e páginas de profundidade para quem quer verificar. Nenhuma página existe para preencher menu.

### 2.2 Menu

```
M.A.R.I.A.     Product ▾   Open Scan   Pricing   Why   [ See the demo ]
```

- **Product** → `/product/` (índice das 5 páginas). Sem dropdown se quiser manter simples — uma página índice com 5 cards funciona melhor em mobile e melhor para SEO.
- **Open Scan** → `/openscan/` (existente)
- **Pricing** → `/pricing/` — **tirar de âncora e transformar em página própria.** Preço é a segunda página mais visitada de qualquer SaaS e é onde as objeções comerciais são resolvidas. Como âncora, ela não pode ser linkada, compartilhada, indexada nem medida.
- **Why** → `/why/` (existente)
- **CTA no header:** um botão, sempre visível, `See the demo` (ou `Join the waitlist` se a demo não estiver pública).

Fora do menu, no rodapé: `/enterprise/`, `/security/` (⚠️ tratamento de dados), `/changelog/` ou `/roadmap/`, contato.

### 2.3 Mapa de páginas

```
/                          Landing
/product/                  Índice das funcionalidades
  /product/risk-score/           Application Risk Score
  /product/pull-request-risk/    Pull Request Risk Analysis
  /product/risk-timeline/        Risk Timeline
  /product/normalization/        Findings Normalization
  /product/for-developers/       Developer-Focused AppSec
/pricing/                  Preço + FAQ comercial + founder support
/openscan/                 Lead magnet (já existe)
/why/                      História / Maria Jeane Pereira
/enterprise/               Escala grande (retirado da landing)
/security/                 ⚠️ Como os dados são tratados
/thanks/                   Pós-inscrição — obrigatória para medir conversão
```

**Por que `/product/for-developers/` sendo página de produto:** ela é menos "feature" e mais posicionamento. Mantenha no conjunto, mas escreva como a página que um Security Champion manda para o time — é uma página de *evangelização interna*, e esse é o mecanismo de aquisição mais barato que você tem.

### 2.4 Ordem das seções da landing

Cada seção tem uma função. Se não tiver, corta.

| # | Seção | Função | Estado |
|---|---|---|---|
| 1 | Hero | Posicionar + primeira ação | Reescrever, reduzir para 2 CTAs |
| 2 | Faixa de integrações (logos) | Prova imediata: "eu falo a língua das suas ferramentas" | **Novo** (assets já existem) |
| 3 | Dor | Reconhecimento | Manter, ajustar |
| 4 | A virada | Reenquadrar o problema | Manter |
| 5 | Como funciona (3 passos concretos + tempo) | Tirar a névoa do "como" | **Reescrever inteiro** |
| 6 | **O produto (evidência visual)** | Prova de existência | **Novo — a seção mais importante a criar** |
| 7 | Funcionalidades (5 cards → páginas) | Profundidade sob demanda | Reescrever, com links |
| 8 | Diferenciação / o que M.A.R.I.A. não é | Eliminar categoria errada | Manter, sem o Gartner |
| 9 | Preço (resumo + link para `/pricing/`) | Qualificação | Simplificar |
| 10 | Founder support | Escassez + comunidade | Manter, endurecer |
| 11 | Fundador + história (curto) | Confiança humana | Fundir os dois blocos atuais em um |
| 12 | **FAQ / objeções** | Matar as 9 objeções da seção 1.4 | **Novo — maior ganho por esforço** |
| 13 | CTA final | Converter | Manter, melhorar microcopy |

Remover da landing: enterprise pricing (→ `/enterprise/`), "Gartner? Screw it" (→ deletar), bloco de fundador separado (→ fundir com história).

---

## 3. Copy da landing principal

**Sobre idioma:** o HTML fonte está em inglês e o `defaultLang` é `pt-BR`. Entrego a copy **em inglês** (fonte, e é o idioma do mercado comprador de SaaS) com a **versão PT-BR completa** logo abaixo de cada bloco, já que o visitante padrão vê PT.

---

### 3.1 Hero

**Recomendação de H1.** Três opções, em ordem de preferência:

> **A (recomendada — concreta, conta uma história em uma linha):**
> `You don't have 1,000 vulnerabilities. You have 6 that matter.`
>
> **B (mantém a marca atual):**
> `Stop fixing vulnerabilities. Start reducing risk.`
>
> **C (foco na função):**
> `Your scanners already found everything. M.A.R.I.A. tells you what to do about it.`

Vá com **A** no H1 e mantenha **B** como tagline de marca (OG title, header, assinatura de e-mail). A é melhor porque um número específico cria uma imagem mental e implica um mecanismo; B afirma uma filosofia que o visitante ainda não tem motivo para aceitar.

```
EYEBROW
Application Risk Intelligence

H1
You don't have 1,000 vulnerabilities.
You have 6 that matter.

SUBHEADLINE
M.A.R.I.A. reads the output of the scanners you already run — SARIF, SBOMs,
secrets, dependencies — and turns it into one risk score per application,
per pull request, over time.

CTA PRIMÁRIO
See it on real data →        (demo.mariaappsec.com)

CTA SECUNDÁRIO
Join the waitlist            (âncora #join)

LINHA DE CONFIANÇA (abaixo dos botões)
⚠️ Reads findings, not your source code. Works with the tools you already have.
Repository-based pricing — never per developer.
```

> **PT-BR**
> **Eyebrow:** Inteligência de risco para aplicações
> **H1:** Você não tem 1.000 vulnerabilidades. Você tem 6 que importam.
> **Sub:** M.A.R.I.A. lê a saída dos scanners que você já roda — SARIF, SBOM, secrets, dependências — e transforma isso em um score de risco por aplicação, por pull request, ao longo do tempo.
> **CTA 1:** Ver funcionando com dados reais →
> **CTA 2:** Entrar na waitlist
> **Confiança:** ⚠️ Lê findings, não o seu código-fonte. Funciona com as ferramentas que você já tem. Preço por repositório — nunca por desenvolvedor.

**Sobre "6 que importam":** use um número pequeno e ímpar. ⚠️ Se você tiver qualquer dado real (da demo, de um piloto), use o número real e diga de onde veio — vale dez vezes mais.

**Painel do hero:** substitua o mock genérico "72 Risk" por algo que mostre *raciocínio*, não volume. O painel atual repete exatamente o pecado que você acusa: mostra contagem (148 repos, 37 critical, 112 high). Melhor: um card único mostrando uma decisão.

```
payments-api                            RISK 84 ▲
──────────────────────────────────────────────────
Internet-facing · handles PII · deployed 4x/week

Top driver   CVE-2025-31324 in spring-core
             → reachable from an exposed endpoint
Fix first    Bump spring-core 6.1.4 → 6.1.6
             Risk 84 → 41

3 of 212 findings account for 61% of this app's risk.
```

Esse bloco sozinho comunica score, priorização, contexto e ação — e prova que o produto pensa. ⚠️ Ajuste para refletir o que M.A.R.I.A. realmente produz hoje.

---

### 3.2 Faixa de integrações (nova, logo abaixo do hero)

```
M.A.R.I.A. doesn't replace your tools. It reads them.

[Semgrep] [Trivy] [Grype] [Syft] [Gitleaks] [TruffleHog] [OWASP ZAP]
[Nuclei] [Checkov] [KICS] [OSV-Scanner] [Dependency-Check] [Opengrep]

Anything that speaks SARIF, CycloneDX or JSON findings.
```

> **PT-BR:** M.A.R.I.A. não substitui suas ferramentas. Ela lê o que elas produzem. / Qualquer coisa que fale SARIF, CycloneDX ou findings em JSON.

Assets já estão em `img/integrations/`. ⚠️ Liste apenas o que realmente está suportado hoje.

---

### 3.3 Dor (ajuste da seção existente)

```
You have 1,000 vulnerabilities.
You don't know which one matters.
Your tools don't agree with each other.
Your team stopped reading the alerts six months ago.

That's not security. That's noise.
```

> **PT-BR**
> Você tem 1.000 vulnerabilidades.
> Você não sabe qual delas importa.
> Suas ferramentas não concordam entre si.
> Seu time parou de ler os alertas há seis meses.
> **Isso não é segurança. Isso é ruído.**

Mudança: a quarta linha ganhou tempo e concretude ("há seis meses" > "a maior parte"). O `<s>half</s> most` atual é um chiste que rouba força do ritmo — tire.

---

### 3.4 A virada

```
EYEBROW  THE SHIFT
H2       A vulnerability is not a risk.

A CVE with 9.8 severity in a library you never call, in an internal tool
with no data, is not your problem. A medium-severity flaw in the service
that handles payments and ships four times a week is.

Severity is a property of the vulnerability.
Risk is a property of your application.

M.A.R.I.A. calculates the second one.
```

> **PT-BR**
> **A virada — Uma vulnerabilidade não é um risco.**
> Um CVE 9.8 numa biblioteca que você nunca chama, num sistema interno sem dado nenhum, não é o seu problema. Uma falha média no serviço que processa pagamentos e sobe quatro vezes por semana é.
> Severidade é uma propriedade da vulnerabilidade. **Risco é uma propriedade da sua aplicação.**
> M.A.R.I.A. calcula a segunda.

Esta é a seção que faz o clique intelectual acontecer. É o argumento central do produto e hoje ele não está escrito em lugar nenhum do site — apenas implícito. Escreva-o.

---

### 3.5 Como funciona

Substituir "SARIF → M.A.R.I.A. → Act", que é abstrato demais.

```
EYEBROW  HOW IT WORKS
H2       Three steps. Roughly fifteen minutes. ⚠️

1 · Connect
Point M.A.R.I.A. at your repositories. ⚠️ GitHub, GitLab, and Azure DevOps.
Read-only access to findings and metadata — not your source code.

2 · Ingest
Your existing scanners upload their output — SARIF, CycloneDX, JSON.
M.A.R.I.A. deduplicates, normalizes and correlates it into one model.
No scanner yet? Start with the free Open Scan Pack →

3 · Act
Every application gets a risk score with the reasons behind it.
Every pull request gets a risk delta before merge.
Every week you can see what went up, what came down, and why.
```

> **PT-BR**
> **Três passos. Cerca de quinze minutos.** ⚠️
> **1 · Conectar** — Aponte M.A.R.I.A. para seus repositórios. Acesso somente leitura a findings e metadados — não ao seu código.
> **2 · Ingerir** — Seus scanners enviam a saída deles: SARIF, CycloneDX, JSON. M.A.R.I.A. deduplica, normaliza e correlaciona tudo em um modelo só. Ainda não roda scanner? Comece pelo Open Scan Pack gratuito →
> **3 · Agir** — Cada aplicação ganha um score com os motivos por trás dele. Cada pull request ganha um delta de risco antes do merge. Toda semana você vê o que subiu, o que caiu e por quê.

O passo 2 é onde o Open Scan Pack finalmente ganha função no funil, em vez de ser um item solto no menu.

---

### 3.6 O produto (seção nova — prioridade máxima)

Não é copy, é **evidência**. Três blocos visuais com legenda curta:

1. **A visão de risco da aplicação** — screenshot real do score com os fatores que o compõem.
2. **O comentário no pull request** — screenshot ou bloco de código do comentário que M.A.R.I.A. deixa no PR. Este é o item mais convincente do site inteiro para um público de desenvolvedores. Ver exemplo em 4.2.
3. **A timeline** — gráfico de risco com dois ou três eventos anotados.

```
EYEBROW  THE PRODUCT
H2       This is what you actually get.
SUB      No mockups. This is the product running on a demo organization.
         Try it yourself → demo.mariaappsec.com
```

> **PT-BR:** **É isso que você recebe.** Sem mockup. Este é o produto rodando numa organização de demonstração. Teste você mesmo →

Se as telas ainda não estiverem prontas para exibição, use o comentário de PR em texto — ele não exige design e converte igual.

---

### 3.7 Funcionalidades (5 cards → 5 páginas)

```
Application Risk Score
One number per application, and the full reasoning behind it.
How the score works →

Pull Request Risk Analysis
See whether a change raises or lowers risk — before it merges.
See it in the PR →

Risk Timeline
Risk over time, with the events that moved it.
See the timeline →

Findings Normalization
Sixteen tools, four formats, one model. Duplicates collapsed.
How normalization works →

Developer-Focused AppSec
Security where engineers already work, not in a dashboard they don't open.
Why this matters →
```

> **PT-BR**
> **Application Risk Score** — Um número por aplicação, e todo o raciocínio por trás dele. *Como o score funciona →*
> **Pull Request Risk Analysis** — Veja se uma mudança aumenta ou reduz risco, antes do merge. *Ver no PR →*
> **Risk Timeline** — Risco ao longo do tempo, com os eventos que o moveram. *Ver a timeline →*
> **Findings Normalization** — Dezesseis ferramentas, quatro formatos, um modelo. Duplicatas eliminadas. *Como funciona →*
> **Developer-Focused AppSec** — Segurança onde o time já trabalha, não num painel que ninguém abre. *Por que isso importa →*

---

### 3.8 Diferenciação

```
EYEBROW  WHAT M.A.R.I.A. IS NOT
H2       We'd rather be clear than impressive.

Not a scanner.
We don't find vulnerabilities. Your tools already do that, and they're good at it.

Not a replacement.
Keep Semgrep. Keep Trivy. Keep whatever works. M.A.R.I.A. sits above them.

Not priced per developer.
Hire ten engineers and your bill stays the same. You pay for repositories.

Not built for a quadrant.
This product is built around the problems teams have this quarter, not around
a feature checklist for an analyst report. That's a trade-off, and it's deliberate:
you'll find capabilities here that bigger platforms don't have, and enterprise
checkboxes here that they do and we don't.
```

> **PT-BR**
> **O que M.A.R.I.A. não é — Prefiro ser claro a ser impressionante.**
> **Não é scanner.** Não encontramos vulnerabilidades. Suas ferramentas já fazem isso, e fazem bem.
> **Não é substituição.** Continue com Semgrep. Continue com Trivy. Continue com o que funciona. M.A.R.I.A. fica acima delas.
> **Não é cobrado por desenvolvedor.** Contrate dez engenheiros e sua conta continua igual. Você paga por repositório.
> **Não é construído para quadrante.** Este produto é construído em volta dos problemas que os times têm neste trimestre, não em volta de um checklist para relatório de analista. Isso é uma escolha consciente: você vai encontrar aqui capacidades que plataformas maiores não têm — e vai encontrar nelas checkboxes de enterprise que aqui não existem.

O último bloco entrega a mesma atitude de "Gartner? Screw it" com dez vezes mais credibilidade, porque admite o custo da escolha. **Admitir uma desvantagem é a técnica de copy mais subutilizada em SaaS técnico** — e a única que funciona com engenheiro cético.

---

### 3.9 Preço (resumo na landing, detalhe em `/pricing/`)

```
EYEBROW  PRICING
H2       Full product. Pay only for scale.
SUB      Every feature in every plan. No per-seat pricing. No "contact us" to see a number.

Monthly — from $9.99/month
Priced per repository, per month:
  1–10 repos     $0.99
  11–50 repos    $2
  51–150 repos   $3
  151–400 repos  $4
  400+           Let's talk →

Example: 30 repositories = $60/month. That's it.

Lifetime — one payment
  Up to 25 repos    $199
  Up to 50 repos    $299
  Up to 100 repos   $499

See full pricing and FAQ →
```

> **PT-BR**
> **Produto completo. Pague só pela escala.** Todas as funcionalidades em todos os planos. Sem cobrança por assento. Sem "fale conosco" para ver um número.
> **Mensal — a partir de $9,99/mês.** Preço por repositório, por mês. *Exemplo: 30 repositórios = $60/mês. É isso.*
> **Vitalício — pagamento único.**
> *Ver preço completo e dúvidas →*

Três correções relevantes:
1. **A unidade ("per repository, per month") precisa aparecer.** Hoje não aparece e o número fica ambíguo.
2. **O exemplo de cálculo elimina a fricção mental** — é o item que mais aumenta conversão numa página de preço por consumo.
3. **"from $9.99/month" precisa vir antes do "$0.99"**, senão o mínimo parece letra miúda. Transparência de preço é seu posicionamento; a apresentação precisa acompanhar.

---

### 3.10 Founder support

```
EYEBROW  FOUNDING TEAMS
H2       50 teams. Then never again.

$249 — lifetime access for up to 50 repositories

  Lifetime access, up to 50 repos
  Founding user badge
  Early access to everything new
  A direct channel to me — not a support queue
  Priority onboarding, done with you

This isn't a discount. It's cheaper than the $299 lifetime plan because
founding teams pay with something else: telling me what's wrong with the
product while it's still cheap to change.

If you just want the tool, take the lifetime plan. If you want to shape it,
take this one.

⚠️ 50 of 50 remaining · Reserve your spot →
```

> **PT-BR**
> **50 times. Depois nunca mais.**
> **$249 — acesso vitalício para até 50 repositórios.**
> Acesso vitalício até 50 repositórios / Badge de founding user / Acesso antecipado a tudo que for novo / Um canal direto comigo — não uma fila de suporte / Onboarding prioritário, feito junto com você.
> Isto não é desconto. É mais barato que o plano vitalício de $299 porque founding teams pagam com outra coisa: me dizer o que está errado no produto enquanto ainda é barato mudar.
> Se você só quer a ferramenta, pegue o plano vitalício. Se você quer moldá-la, pegue este.
> ⚠️ Restam 50 de 50 · Reservar minha vaga →

Isso resolve a incoerência apontada em 1.3.5: explica **por que** o founder é mais barato que o lifetime, transformando o que parecia erro de precificação em argumento. E o contador de vagas restantes precisa ser real e atualizado — escassez falsa é detectada e destrói o resto.

---

### 3.11 Fundador + história (blocos fundidos)

```
EYEBROW  WHY THIS EXISTS
H2       M.A.R.I.A. is named after my mother.

Maria Jeane Pereira (1956–2020) spent her life taking care of people,
mostly people no one else was taking care of.

The acronym is real — Management Application Risk Integrated Analysis.
So is the reason behind it: software should be looked after by someone
who actually pays attention.

I'm Cássio Pereira. I build this alone, on purpose, and I'd rather fix
what hurts teams today than ship features that demo well.

Read the full story →     ⚠️ About me →
```

> **PT-BR**
> **Por que isto existe — M.A.R.I.A. é o nome da minha mãe.**
> Maria Jeane Pereira (1956–2020) passou a vida cuidando de pessoas, principalmente das que ninguém mais estava cuidando.
> A sigla é real — Management Application Risk Integrated Analysis. E o motivo por trás também: software deveria ter alguém prestando atenção nele.
> Sou Cássio Pereira. Construo isso sozinho, por escolha, e prefiro resolver o que dói nos times hoje a lançar features que ficam bonitas em demo.
> *Ler a história completa →*

"mostly people no one else was taking care of" carrega o peso emocional sem pedir nada ao leitor. Uma frase, sem adjetivo. Se você quiser o efeito, ele está aí — acrescentar mais reduz.

---

### 3.12 FAQ (nova — maior ganho por esforço do site)

Formato: `<details>` nativo, sem JS.

```
Do you read my source code?
⚠️ No. M.A.R.I.A. ingests findings, SBOMs and repository metadata. Your code
stays where it is. [Read how we handle data →]

How is the risk score calculated?
Exposure, data sensitivity, exploitability, reachability, change frequency and
finding severity — weighted, and the weights are yours to change. Every score
shows the factors that produced it. [See the full model →]

What if I don't have any scanners set up?
Start with the free Open Scan Pack: pick your stack, download the CI templates,
run them in your own pipeline. No login, no repository access. [Get it →]

Which platforms do you support?
⚠️ GitHub, GitLab and Azure DevOps.

How long does setup take?
⚠️ About fifteen minutes to connect. First risk scores within an hour of your
first scanner upload.

Will this replace my current tools?
No, and it shouldn't. M.A.R.I.A. is only useful because your scanners already
work. It makes their output actionable.

You're one person. What happens if you stop?
⚠️ Fair question, and the honest answer matters more than a reassuring one:
[your policy — data export at any time, what happens to lifetime plans, etc.]

Why repository-based pricing?
Because charging per developer punishes you for growing the team, and your
risk doesn't scale with headcount — it scales with the code you own.

Do you offer a free trial?
⚠️ [answer]
```

> **PT-BR:** traduzir integralmente — esta seção é lida por quem está a um passo de decidir, e ler em inglês adiciona atrito exatamente no pior momento.

---

### 3.13 CTA final e microcopy do formulário

```
EYEBROW  EARLY ACCESS
H2       Find out what your real risk looks like.
SUB      Join the waitlist and I'll reach out personally when your spot opens.
         Founding teams first.

[ you@company.com ]  [ Join the waitlist ]

MICROCOPY (abaixo do campo)
One field. No password. No sales sequence. I read every reply.

APÓS ENVIO (na página /thanks/)
You're in.
You'll hear from me — from a real address, not a no-reply.

Two things while you wait:
→ Try the demo on a sample organization
→ Run the free Open Scan Pack on your own repos

And if you want to skip the line: reply to the confirmation email with your
repo count and what's currently driving you crazy. Founding teams get set up first.
```

> **PT-BR**
> **Acesso antecipado — Descubra como é o seu risco de verdade.**
> Entre na waitlist e eu falo com você pessoalmente quando sua vaga abrir. Founding teams primeiro.
> **Microcopy:** Um campo. Sem senha. Sem sequência de vendas. Eu leio todas as respostas.
> **Pós-envio:** Você está dentro. Você vai receber notícia minha — de um endereço real, não de um no-reply.
> Duas coisas enquanto espera: teste a demo numa organização de exemplo · rode o Open Scan Pack gratuito nos seus repositórios.
> E se quiser furar a fila: responda o e-mail de confirmação com quantos repositórios você tem e o que mais te irrita hoje. Founding teams entram primeiro.

O último parágrafo é o mecanismo mais importante do site inteiro para o seu objetivo nº 3 (conversas com potenciais clientes): ele converte um e-mail passivo numa conversa qualificada, sem formulário adicional e sem agendar reunião. Quem responde está qualificado por definição.

**A `/thanks/` é obrigatória.** Sem ela você não consegue disparar evento de conversão nem descobrir qual canal traz inscrição.

---

## 4. Copy das páginas de funcionalidade

---

### 4.1 `/product/risk-score/`

**Meta title:** `Application Risk Score — how M.A.R.I.A. scores your apps | M.A.R.I.A.`
**Meta description:** `A CVSS score describes a vulnerability. A risk score describes your application. See the factors behind M.A.R.I.A.'s application risk score, and how to tune them.`

**H1:** `A vulnerability has a severity. An application has a risk.`
**Subheadline:** `One score per application, built from exposure, data sensitivity, exploitability and change velocity — with every factor visible and every weight yours to change.`

**O problema:**
> Severity is assigned by someone who has never seen your architecture. CVSS 9.8 means "this is bad in general" — it says nothing about whether the vulnerable function is ever called, whether the service is reachable from the internet, or whether it touches a single piece of customer data.
>
> So teams do the only thing they can with a flat list: sort by severity and work top-down. That's how you end up patching a critical in an internal batch job while the payments API keeps a "medium" open for eight months.
>
> Volume makes it worse. Once the list passes a few hundred items, severity sorting stops being triage and becomes a lottery.

**Como M.A.R.I.A. resolve:**
> M.A.R.I.A. scores the **application**, not the finding. ⚠️ The score combines:
> - **Exposure** — internet-facing, internal, or isolated
> - **Data sensitivity** — PII, payment data, credentials, or nothing that matters
> - **Exploitability** — known exploited (KEV), public exploit available, EPSS probability
> - **Reachability** — is the vulnerable code path actually used
> - **Change velocity** — code that changes daily carries different risk from code frozen for two years
> - **Finding severity and density** — the raw signal from your scanners, as one input among several, not the whole answer
>
> Every score opens up. You see the factors, their weights, and which findings drive the number. Nothing is a black box — a score no one can explain gets ignored exactly like the alerts it replaced.
>
> And the weights are yours. A fintech and an internal tools team don't have the same risk model, and M.A.R.I.A. doesn't pretend they do.

**Why it matters:**
> Because a number that everyone trusts changes the conversation.
> - A developer stops asking "which of these 212 findings do I do first?"
> - A tech lead can justify spending a sprint on one service instead of spreading fixes thin.
> - A CTO gets a portfolio view that answers "where are we actually exposed?" — instead of a bar chart of open findings that goes up when you buy more scanners.
>
> One honest number beats a thousand accurate alerts.

**Exemplo prático:**

```
payments-api            RISK 84  (High)      internal-reports      RISK 22  (Low)
─────────────────────────────────            ─────────────────────────────────
Findings        212                          Findings        347
Critical         14                          Critical         31
Internet-facing YES                          Internet-facing NO
Handles PII     YES                          Handles PII     NO
Deploys/week      4                          Deploys/week      0.2

Top 3 drivers of this app's risk:
1  CVE-2025-31324 · spring-core · reachable from /api/v1/checkout   +23
2  Hardcoded AWS key · config/prod.yml · valid, unrotated 94 days   +19
3  No auth on /internal/debug · exposed via ingress                 +12

3 findings drive 61% of the risk. Fix those and the score drops 84 → 41.
```

> `internal-reports` has **more** findings and **more** criticals — and a third of the risk.
> Severity sorting would have sent your team to the wrong repository. This is the entire argument, in one table.

**CTA:**
> `See scores on a live demo organization →` (primário)
> `Join the waitlist →` (secundário)

> **PT-BR**
> **H1:** Vulnerabilidade tem severidade. Aplicação tem risco.
> **Sub:** Um score por aplicação, construído a partir de exposição, sensibilidade dos dados, explorabilidade e velocidade de mudança — com cada fator visível e cada peso configurável por você.
> **Meta title:** Application Risk Score — como M.A.R.I.A. mede risco de aplicação
> **Meta description:** Um score CVSS descreve uma vulnerabilidade. Um risk score descreve a sua aplicação. Veja os fatores por trás do score do M.A.R.I.A. e como ajustá-los.

---

### 4.2 `/product/pull-request-risk/`

**Meta title:** `Pull Request Risk Analysis — see security impact before merge | M.A.R.I.A.`
**Meta description:** `Every pull request changes your risk. M.A.R.I.A. comments the delta on the PR — what this change adds, what it removes, and what needs a decision — before it merges.`

**H1:** `Every pull request changes your risk. Most teams find out months later.`
**Subheadline:** `M.A.R.I.A. comments on the PR with the risk delta: what this change introduces, what it removes, and what needs a decision — while the author still has the context in their head.`

**O problema:**
> Security findings arrive on a schedule that has nothing to do with engineering. A dependency added on Monday shows up in a report three weeks later, assigned to whoever is on rotation, about code they didn't write, in a service they may not know.
>
> By then the fix is archaeology. The author has moved on, the context is gone, and the change is buried under forty commits. The cheapest moment to fix a security problem — the five minutes before merge, while someone is already thinking about that exact code — is the one moment nobody uses.
>
> And the reverse is invisible too: when a team *does* remove risk, nothing records it. Security work looks like pure cost because only the failures are ever reported.

**Como M.A.R.I.A. resolve:**
> ⚠️ M.A.R.I.A. evaluates each pull request against the application's current risk baseline and comments directly on the PR:
> - **What this PR adds** — new dependencies with known vulnerabilities, new secrets, new exposed endpoints, new code in already-risky paths
> - **What this PR removes** — upgrades, deletions, fixes, closed findings
> - **The net delta** — one number: this change moves risk from X to Y
> - **What needs a human** — the two or three items worth a reviewer's attention, not the full list
>
> It's a comment, not a gate. ⚠️ You can configure a threshold that blocks a merge, but the default is to inform — a security tool that blocks merges on day one is a security tool that gets disabled in week two.

**Why it matters:**
> Because this is where AppSec either enters engineering culture or doesn't.
> - The developer gets feedback in the tool they're already in, about code they wrote ten minutes ago, in the review they're already reading.
> - The reviewer gets a security opinion without being a security specialist.
> - The AppSec engineer stops being the person who shows up afterwards with bad news.
> - Risk stops being a monthly report and becomes a property of the change.
>
> The point isn't to catch more. It's to catch it when fixing costs five minutes instead of five days.

**Exemplo prático:**

```markdown
🔎 M.A.R.I.A. — risk impact of this pull request

payments-api      Risk 41 → 58   (+17, High)

▲ Added
  · jsonwebtoken 8.5.1 — CVE-2022-23529, critical, fix in 9.0.0
  · New public route POST /api/v1/refund — no rate limiting detected
▼ Removed
  · spring-core upgraded 6.1.4 → 6.1.6 — closes CVE-2025-31324  (−23)

⚑ Needs a decision
  jsonwebtoken 8.5.1 is 3 major versions behind and is used in the auth path.
  Upgrading to 9.0.0 would bring this PR to a net −6 instead of +17.

Not blocking. Baseline updates on merge.
```

> Note what the developer gets: a number, a reason, a specific action, and the outcome of taking it — in the place they already are. Nobody had to open a dashboard.

**CTA:**
> `See a real PR analysis in the demo →` / `Join the waitlist →`

> **PT-BR**
> **H1:** Todo pull request muda o seu risco. A maioria dos times descobre meses depois.
> **Sub:** M.A.R.I.A. comenta no PR com o delta de risco: o que essa mudança introduz, o que ela remove e o que precisa de decisão — enquanto o autor ainda tem o contexto na cabeça.
> **Meta title:** Pull Request Risk Analysis — impacto de segurança antes do merge
> **Meta description:** Todo pull request muda seu risco. M.A.R.I.A. comenta o delta direto no PR: o que a mudança adiciona, o que remove e o que precisa de decisão — antes do merge.

---

### 4.3 `/product/risk-timeline/`

**Meta title:** `Risk Timeline — how your application risk changed, and why | M.A.R.I.A.`
**Meta description:** `See risk over time with the events that moved it: the release that raised it, the upgrade that dropped it, the finding that sat open for 90 days. Evidence instead of a snapshot.`

**H1:** `"Are we better than last quarter?" You should be able to answer that.`
**Subheadline:** `M.A.R.I.A. records risk over time and annotates what moved it — so you can see which decisions worked instead of guessing.`

**O problema:**
> Almost every security tool shows you *now*. Open findings today, criticals today, a number that means nothing without a comparison.
>
> So the questions that actually get asked in a leadership meeting have no answer:
> - Did the work we did last quarter reduce anything?
> - When did this service become our biggest exposure?
> - We spent three sprints on remediation — what changed?
> - Which of our practices actually moves the needle?
>
> Teams end up arguing from anecdote. And AppSec, which is one of the few functions that can genuinely prove its value with numbers, ends up defending its budget with feelings.

**Como M.A.R.I.A. resolve:**
> ⚠️ M.A.R.I.A. keeps a continuous history of risk per application and per portfolio, annotated with the events that changed it:
> - Risk over time, per application, per team, or across everything
> - Annotated events — releases, dependency upgrades, new findings, resolved findings, ownership changes
> - Cause attribution — every rise and drop points to what produced it
> - Time-to-fix by severity and by team, measured rather than estimated
> - Aging — what has been open longest, weighted by how much it actually matters
>
> The timeline isn't a chart to admire. It's the artifact you take into a planning meeting when you need to argue for time.

**Why it matters:**
> A snapshot tells you where you are. A trend tells you whether what you're doing works.
> - A tech lead can show that the upgrade sprint dropped portfolio risk 18% — and ask for the next one with evidence.
> - An AppSec engineer can prove that PR-time feedback cut mean time-to-fix from 34 days to 6.
> - A CTO can see whether the security investment produced a curve that goes down.
>
> And when risk goes up — which it will, because you ship — you know exactly which change did it, instead of discovering it in an incident.

**Exemplo prático:**

```
payments-api · risk, last 6 months

100 ┤
 84 ┤                    ╭────╮
 70 ┤        ╭───────────╯    ╰──╮
 56 ┤   ╭────╯                   ╰──────╮
 42 ┤───╯                               ╰────────
    └────┬──────┬───────┬────────┬───────┬───────
       Feb    Mar     Apr      May     Jun     Jul

Mar 04  +18  New payment provider SDK — 3 vulnerable transitive deps
Apr 22  +12  /internal/debug exposed through new ingress rule
Jun 09  −31  Dependency upgrade sprint — 47 findings closed
Jul 02  −11  Secret rotation + Gitleaks added to CI

Q2 → Q3: risk down 34%. Mean time-to-fix: 34 days → 6 days.
```

> "We reduced application risk 34% in a quarter, and here is exactly what did it" is a sentence you can say to a board. That sentence is the product.

**CTA:**
> `Explore a live timeline in the demo →` / `Join the waitlist →`

> **PT-BR**
> **H1:** "A gente está melhor que no trimestre passado?" Você deveria conseguir responder isso.
> **Sub:** M.A.R.I.A. registra risco ao longo do tempo e anota o que o moveu — para você ver quais decisões funcionaram, em vez de adivinhar.
> **Meta title:** Risk Timeline — como seu risco mudou, e por quê
> **Meta description:** Veja risco ao longo do tempo com os eventos que o moveram: o release que subiu, o upgrade que derrubou, o finding aberto há 90 dias. Evidência em vez de foto do momento.

---

### 4.4 `/product/normalization/`

**Meta title:** `Findings Normalization — SARIF, CycloneDX and scanner output, unified | M.A.R.I.A.`
**Meta description:** `Sixteen tools, four formats, three names for the same bug. M.A.R.I.A. normalizes SARIF, CycloneDX and scanner findings into one model and collapses the duplicates.`

**H1:** `Sixteen tools. Four formats. Three names for the same bug.`
**Subheadline:** `M.A.R.I.A. ingests SARIF, CycloneDX and raw scanner output, deduplicates across tools, and gives you one model of what is actually wrong.`

**O problema:**
> A normal pipeline today: SAST, SCA, secrets, container scanning, IaC, DAST. Six categories, often more than one tool per category, each with its own format, its own severity scale, its own ID scheme, its own idea of what a "finding" is.
>
> The result:
> - The same vulnerable dependency reported by three tools, as three findings, with three different severities
> - Severity scales that don't compare — one tool's "high" is another's "medium"
> - No cross-tool correlation: the exposed endpoint and the vulnerable library sitting in it are unrelated rows in unrelated reports
> - Counts that inflate every time you adopt a new scanner, making your security program look like it's getting worse the more you invest
>
> Teams solve this with a spreadsheet, a script someone wrote and left, or by giving up and looking at one tool.

**Como M.A.R.I.A. resolve:**
> ⚠️ M.A.R.I.A. takes whatever your tools produce and turns it into one model:
> - **Ingest** — SARIF, CycloneDX, JSON output from ⚠️ Semgrep, Trivy, Grype, Syft, Gitleaks, TruffleHog, OWASP ZAP, Nuclei, Checkov, KICS, OSV-Scanner, Dependency-Check, Opengrep and anything else that speaks those formats
> - **Normalize** — one severity scale, one identity model, mapped to CVE/CWE/package coordinates
> - **Deduplicate** — the same issue from four tools becomes one finding with four sources of evidence, which makes it *more* trustworthy, not four times louder
> - **Correlate** — findings link to the application, the service, the endpoint, the owner
> - **Enrich** — ⚠️ KEV, EPSS, exploit availability, reachability, ownership
> - **Track** — findings keep an identity across scans, so "still open", "reintroduced" and "fixed" are facts instead of guesses
>
> Adding a scanner should improve your picture. Today it mostly increases your count.

**Why it matters:**
> Everything else in M.A.R.I.A. depends on this. You can't score an application, evaluate a pull request, or draw a timeline on top of four contradictory reports.
>
> And it's the layer teams most often build themselves — badly, once, and then maintain forever. If you have a script that merges scanner output, you've already built a worse version of this and you know exactly how much it costs to keep alive.
>
> There's a second-order effect too: when duplicates collapse, the number goes *down*. A team that trusts the count starts reading it again.

**Exemplo prático:**

```
Same dependency, before normalization:

  Trivy       CVE-2025-31324   spring-core 6.1.4   CRITICAL   pkg:maven/…
  Grype       GHSA-4wrc-…      spring-core 6.1.4   High       maven:org.springframework
  Dep-Check   CVE-2025-31324   spring-core-6.1.4   9.8        cpe:/a:vmware:…

  → 3 findings, 3 severities, 3 identifiers, 1 actual problem.

After M.A.R.I.A.:

  CVE-2025-31324 · spring-core 6.1.4 → 6.1.6
  Severity  Critical            Confirmed by  Trivy, Grype, Dependency-Check
  KEV       Yes                 EPSS  0.87
  Reachable Yes — called from /api/v1/checkout
  Present in  payments-api, checkout-worker  ·  Owner: @team-payments
  Risk contribution  +23 to payments-api

  → 1 finding. 3 sources agreeing. One upgrade fixes 2 applications.
```

> ⚠️ Real numbers from your own data are far better than this example. If your demo org shows "4,112 raw findings → 1,247 unique", put that number on this page — deduplication ratio is the single most persuasive metric you have here.

**CTA:**
> `See normalization on real scanner output →` / `No scanners yet? Get the free Open Scan Pack →`

> **PT-BR**
> **H1:** Dezesseis ferramentas. Quatro formatos. Três nomes para o mesmo bug.
> **Sub:** M.A.R.I.A. ingere SARIF, CycloneDX e saída bruta de scanners, deduplica entre ferramentas e entrega um modelo único do que realmente está errado.
> **Meta title:** Findings Normalization — SARIF, CycloneDX e scanners unificados
> **Meta description:** Dezesseis ferramentas, quatro formatos, três nomes para o mesmo bug. M.A.R.I.A. normaliza SARIF, CycloneDX e findings em um modelo só e elimina as duplicatas.

---

### 4.5 `/product/for-developers/`

**Meta title:** `Developer-Focused AppSec — security that fits engineering | M.A.R.I.A.`
**Meta description:** `Developers don't ignore security. They ignore lists they can't act on. M.A.R.I.A. delivers risk where engineers already work, with a reason and a next step attached.`

**H1:** `Developers don't ignore security. They ignore lists they can't act on.`
**Subheadline:** `Security that arrives in the pull request, names one thing to do, and explains why it matters — instead of a dashboard nobody has a reason to open.`

**O problema:**
> The standard story is that developers don't care about security. It's wrong, and it's a convenient excuse for tools that were never designed for them.
>
> What developers actually receive:
> - A list of 400 items with no order, no owner, and no context
> - A ticket about a service they've never touched
> - A "critical" that turns out to be unreachable, twice in a row — after which every critical is noise
> - A dashboard on a different platform, behind a different login, that they'd have to remember to visit
> - A gate that blocks a release on a Friday with no explanation
>
> Any engineer optimizes the same way under those conditions: ignore the channel with the worst signal-to-noise ratio. That's not apathy. That's correct behavior given the inputs.
>
> Meanwhile the AppSec engineer — often one person for eighty developers — becomes a bottleneck and a bearer of bad news, which is a good way to burn out a role that's already hard to hire for.

**Como M.A.R.I.A. resolve:**
> ⚠️ By changing what developers receive:
> - **In the pull request, not in a portal.** Risk feedback arrives as a PR comment, in the review they're already reading.
> - **One thing, not four hundred.** Ranked by actual risk contribution, so the top of the list is genuinely the top.
> - **With a reason.** "Reachable from your public checkout endpoint" is actionable. "CVSS 9.8" is trivia.
> - **With the fix and its effect.** The upgrade to apply, and what it does to the score.
> - **Without becoming a gate on day one.** Inform first, enforce later, only where it earns the right.
> - **Owned by the right team.** Findings map to services and owners, so nobody triages someone else's code.
>
> For Security Champions and AppSec engineers, the shift is bigger: instead of chasing individual findings, you set the risk model and let it distribute the work. You move from doing triage to designing how triage happens.

**Why it matters:**
> AppSec doesn't scale by adding scanners. It scales when the people writing the code make slightly better decisions, continuously — and that only happens if the information reaches them at the moment of the decision, in a form they can act on.
>
> Every tool that gets ignored also costs something you don't see on the invoice: it teaches your team that security alerts are safe to skip. That habit is expensive, and it's hard to undo.
>
> The honest test of a security tool isn't coverage. It's whether developers open it voluntarily a second time.

**Exemplo prático:**

```
What a developer used to get:
  Email — "Weekly security report: 412 open findings (37 critical)"
  Opened: no.

What a developer gets now, in the PR they already have open:

  🔎 M.A.R.I.A. — Risk 41 → 58 (+17)
  jsonwebtoken 8.5.1 adds a critical auth-bypass (CVE-2022-23529),
  and this service handles login.
  Bump to 9.0.0 → this PR becomes −6 instead of +17.

  Time to read: 8 seconds. Time to act: one line in package.json.
```

> That's the whole thesis. Not more findings — findings at a moment when acting is cheap, with enough context to be worth eight seconds.

**CTA:**
> `See what your team would actually see →` (demo, primário)
> `Send this page to your team →` ⚠️ (link de compartilhamento — esta página existe para ser encaminhada)
> `Join the waitlist →`

> **PT-BR**
> **H1:** Desenvolvedor não ignora segurança. Ele ignora lista que não dá para agir.
> **Sub:** Segurança que chega no pull request, aponta uma coisa para fazer e explica por que importa — em vez de um painel que ninguém tem motivo para abrir.
> **Meta title:** Developer-Focused AppSec — segurança que cabe na engenharia
> **Meta description:** Desenvolvedor não ignora segurança, ignora lista que não dá para agir. M.A.R.I.A. entrega risco onde o time já trabalha, com motivo e próximo passo.

---

## 5. Estratégia de conversão

### 5.1 Hierarquia de CTAs

Uma ação primária no site inteiro. Todo o resto é subordinado.

| Nível | CTA | Onde |
|---|---|---|
| **Primário** | **See the demo** (se pública e boa) — senão **Join the waitlist** | Header (fixo), hero, fim de cada página de produto |
| Secundário | **Join the waitlist** | Hero (segundo botão), fim de cada página, seção final |
| Terciário | **Get the free Open Scan Pack** | Passo 2 do "como funciona", FAQ, página de normalização |
| Comercial | **Reserve a founding spot** | Pricing, seção founder |
| Enterprise | **Talk to me** (e-mail) | Apenas `/enterprise/` e rodapé |

**A decisão que mais importa: demo antes de waitlist.** Pedir e-mail antes de provar valor é a razão pela qual sites pré-lançamento convertem 1% em vez de 5%. Se a demo estiver apresentável, ela vai na frente. ⚠️ Se ela ainda estiver fraca, então a waitlist é primária — e a prioridade absoluta do seu roadmap é deixar a demo pública apresentável, porque ela vale mais que qualquer reescrita de copy.

### 5.2 Onde colocar "Join waitlist"

- Header — apenas se a demo *não* for o CTA primário (um botão só no header)
- Hero, como secundário
- Fim de cada página de produto (5 pontos)
- Cards de preço
- Seção final da landing
- Fim da página `/why/` — quem lê a história inteira está emocionalmente pronto; hoje já tem, mantenha

**Não** coloque em popup, exit-intent, ou barra flutuante. O público que você quer é exatamente o que fecha a aba quando isso aparece.

### 5.3 Onde colocar "Try demo"

- Header (botão)
- Hero (primário)
- Fim de cada página de produto — "veja isso funcionando" logo depois de explicar o conceito é o momento de maior intenção da página
- Seção "O produto" da landing

⚠️ **Ajuste importante na demo:** hoje ela abre em `demo.mariaappsec.com` numa aba nova sem contexto. O visitante cai numa aplicação que não conhece, com dados que não são dele. Adicione um estado inicial que diga *"Esta é uma organização de exemplo com 12 repositórios. Comece por payments-api — é o de maior risco."* Demo sem ponto de partida é demo abandonada em 20 segundos. E coloque o CTA de waitlist dentro da demo, no ponto de maior impressão.

### 5.4 Redução de fricção

1. **Um campo, sem senha, sem confirmação dupla** — já está certo, mantenha.
2. **`/thanks/`** — página real, com evento de conversão e dois próximos passos.
3. **Preço visível sem contato** — já está certo e é diferencial. Reforce: "Sem 'fale conosco' para ver um número."
4. **Sem banner de cookie** — troque GA por analytics sem cookies. Um banner num site que prega "sem ruído" é autogol.
5. **Site rápido** — HTML estático, sem framework. Você já está certo aqui; não estrague ao adicionar páginas.
6. **Nenhum "agende uma reunião" como CTA principal.** Dev não agenda reunião. Ofereça reunião só depois da resposta por e-mail.
7. **Responda o e-mail em menos de 24h, você mesmo.** É a sua maior vantagem competitiva sobre qualquer ASPM — e nenhuma otimização de copy chega perto.

### 5.5 Como capturar founding teams

Founding team não vem de botão. Vem de conversa. O funil:

```
Landing / página de produto
   → demo (prova)
   → waitlist (e-mail, sem fricção)
   → e-mail de confirmação com UMA pergunta
   → resposta = lead qualificado
   → conversa
   → oferta de founding ($249)
```

**O e-mail de confirmação é a peça central.** Não seja um autoresponder:

> Oi — obrigado por entrar na lista.
>
> Uma pergunta enquanto isso: **quantos repositórios vocês têm, e qual é a ferramenta de segurança que mais irrita seu time hoje?**
>
> Respondo pessoalmente todas as respostas. Quem responde entra primeiro — e as 50 vagas de founding team saem daí.
>
> — Cássio

Isso te dá contagem de repositórios (qualificação de preço), a dor real (roadmap) e intenção (quem responde quer falar), num único e-mail, sem formulário. ⚠️ Verifique se o Formspree permite auto-resposta; senão, migre para algo que permita — este e-mail vale mais que o site.

### 5.6 Dev vs. AppSec vs. CTO — três leituras do mesmo site

Não crie três landings. Crie três caminhos dentro do mesmo site:

| Público | O que convence | Entrada | Página que fecha |
|---|---|---|---|
| **Desenvolvedor** | Não me atrapalha, chega no PR, tem contexto | Open Scan Pack, `/product/for-developers/` | Exemplo de comentário de PR |
| **AppSec / Champion** | Normalização, modelo de score, dedup, correlação | `/product/normalization/`, `/product/risk-score/` | Fatores do score + configurabilidade |
| **Tech lead / CTO** | Priorização, tendência, preço previsível, "onde estamos expostos" | `/product/risk-timeline/`, `/pricing/` | Timeline com números + preço sem "fale conosco" |

Mecanismo prático: os 5 cards de funcionalidade da landing **são** o roteador. Cada perfil clica no card que fala com ele. Por isso as páginas de produto precisam existir de verdade — elas não são conteúdo de SEO, são a segmentação do funil.

E cuide da direção **dev → chefe**: um dev convencido precisa de algo para encaminhar. `/product/for-developers/` e `/pricing/` são as duas páginas que circulam internamente. Escreva-as sabendo que serão coladas num Slack.

---

## 6. Tom visual e UX

**O princípio:** o site precisa parecer construído por alguém que escreve código, não por uma agência. Isso é uma vantagem, não uma limitação. Seu público desconfia de site bonito demais na mesma medida em que desconfia de site relaxado.

- **Alto contraste, tema escuro como padrão.** Já é o esperado da categoria e da audiência. Um único acento (o que você já usa em `.text-highlight`) — e ele significa "isto é o ponto", nunca decoração.
- **Cor com significado.** Se vermelho/laranja aparecem, aparecem para nível de risco e mais nada. Cor semântica em produto de segurança é informação; usar risk-red como cor de botão de marketing embaralha a leitura.
- **Tipografia forte, escala curta.** 4 tamanhos no máximo. H1 grande de verdade (56–72px desktop). Corpo em 17–19px — a maioria dos sites técnicos erra para baixo e o texto fica cansativo.
- **Medida de linha 65–75 caracteres.** O `.container.narrow` já faz isso; mantenha nas páginas novas.
- **Monoespaçada como material de prova.** Todo exemplo prático (comentário de PR, tabela de score, timeline) em bloco mono com borda. Isso lê como *output de ferramenta*, e output tem credibilidade que prosa não tem. É o recurso visual mais barato e mais eficaz disponível para você.
- **Ilustração: nenhuma.** Sem imagem de estoque, sem cadeado, sem hacker de capuz, sem blob abstrato. Se um espaço precisa de imagem, ele provavelmente precisa de um exemplo real.
- **Animação: praticamente nenhuma.** Transição de hover e nada mais. Sem contador animado, sem parallax, sem fade-on-scroll (que atrapalha quem varre a página rápido — que é o seu público). Respeite `prefers-reduced-motion`.
- **Densidade.** Páginas curtas com substância — 700–1.100 palavras por página de produto. Cada seção precisa entregar um fato novo. Se um bloco só reformula o anterior, apague.
- **Orçamento de peso:** < 150KB por página, sem fonte externa (use a font stack do sistema ou uma fonte local), sem JS além do i18n e do tracking. Um site de segurança que carrega 12 scripts de terceiros é uma piada que seu público entende.
- **Acessibilidade:** contraste AA de verdade (o acento sobre fundo escuro geralmente falha — teste), foco visível, `<details>` nativo para FAQ, headings em ordem. Além do óbvio, é sinal de cuidado — que é literalmente a tese da sua marca.
- **Mobile:** o CTA do header sempre visível, tabelas de preço e blocos mono com scroll horizontal próprio (a página nunca rola lateralmente).

---

## 7. O que evitar

**Palavras e frases para banir do site:**

> comprehensive · seamless · robust · cutting-edge · next-generation · game-changing · revolutionary · empower · unlock · leverage · holistic · end-to-end · single pane of glass · AI-powered (a menos que específico e verdadeiro) · military-grade · enterprise-grade · best-in-class · 10x · supercharge · frictionless · synergy · solução completa · plataforma unificada · transformação digital

**Claims que não valem o risco:**
- Percentuais sem origem ("reduce risk by 80%"). Se tiver dado, cite a fonte e a amostra. Se não tiver, use um exemplo concreto — ele convence mais que estatística inventada.
- "Zero falsos positivos." Ninguém acredita, e um único contraexemplo destrói o resto da página.
- "Compliance-ready", SOC 2, ISO, PCI — nada disso sem certificação real. É a categoria de claim com consequência jurídica.
- "Enterprise-grade security" sem ter passado por auditoria.
- Contadores de escassez falsos ("apenas 3 vagas restantes" quando não é verdade). Seu público é composto de pessoas que ganham a vida detectando fraude.
- Logos de empresas que não são clientes, mesmo com "usado por times em…".

**Comparações a evitar:**
- Não cite Snyk, Semgrep, Wiz, Apiiro etc. por nome numa comparação. Assimétrico (eles têm advogados), envelhece mal, e coloca você na moldura deles. Compare com **a situação** ("planilha e três relatórios contraditórios"), não com produtos.
- Não ataque scanners — seu produto depende deles funcionarem. "Não substituo" é a posição correta; mantenha.
- Não implique que times de segurança são o problema. Metade dos seus compradores é time de segurança.

**Seções que não devem existir:**
- Carrossel de depoimentos vazio ou com placeholder
- "Trusted by" sem clientes
- "Nossos valores" / "Nossa missão" como seção separada — a `/why/` já faz isso melhor
- Blog vazio no menu
- Newsletter separada da waitlist (dois formulários competindo)
- Comparativo em tabela vs. concorrentes nomeados
- Widget de chat — para este público, e-mail direto converte mais
- Contador regressivo em preço

**Erros estruturais a evitar:**
- Criar as 5 páginas antes de arrumar o i18n (seção 1.5, item 2). Você vai duplicar o trabalho.
- Publicar páginas de produto sem exemplo prático. A explicação sem o exemplo é exatamente o "dashboard que mostra volume e não diz o que fazer" — em forma de texto.
- Deixar o enterprise pricing na landing.

---

## 8. Ordem de execução sugerida

Por impacto sobre conversão dividido por esforço:

**Semana 1 — consertar o que sangra**
1. Remover o GA duplicado; criar `/thanks/` com evento de conversão
2. Reduzir o hero para 2 CTAs; trocar H1 e subheadline
3. Adicionar a faixa de logos de integrações (assets já estão no repo)
4. Escrever o e-mail de auto-resposta com a pergunta (seção 5.5)
5. Corrigir link do GitHub, URL do fundador, `<ul>` dentro de `<p>`, meta keywords
6. Corrigir acentuação em todo o conteúdo PT-BR

**Semana 2 — provar que o produto existe**
7. Seção "O produto" com o comentário de PR (mesmo em texto, sem screenshot)
8. Seção FAQ com as 9 objeções
9. Estado inicial da demo com ponto de partida sugerido
10. Reescrever "Como funciona" com os 3 passos e tempos

**Semana 3 — estrutura**
11. **Migrar i18n para `data-i18n` — antes de criar páginas novas**
12. `/pricing/` como página, com exemplo de cálculo e FAQ comercial
13. Mover enterprise para `/enterprise/`; remover "Gartner? Screw it"

**Semana 4 — profundidade**
14. As 5 páginas de produto + `/product/` índice
15. `/security/` ⚠️ com tratamento de dados
16. Atualizar sitemap; adicionar `hreflang` se/quando houver URLs por idioma

---

## 9. Os três itens que mais importam

Se nada mais for feito:

1. **Mostre o comentário de pull request.** É a prova mais concreta que você tem de que o produto pensa, e ela cabe num bloco de texto. Hoje o site inteiro descreve um produto que ninguém consegue ver.
2. **Coloque a demo na frente da waitlist.** Você tem algo para mostrar e está pedindo e-mail antes de mostrar.
3. **Responda "vocês leem meu código?" no hero.** ⚠️ Se a resposta for não, é sua maior vantagem sobre a categoria inteira e ela não está escrita em lugar nenhum.
