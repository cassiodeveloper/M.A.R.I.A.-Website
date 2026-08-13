/**
 * Traduções do site M.A.R.I.A.
 *
 * O HTML fonte está em inglês (en-US) e é capturado pelo runtime no boot, então
 * este arquivo só precisa conter os idiomas ADICIONAIS. Uma chave ausente cai
 * de volta no texto original em inglês em vez de sumir da página.
 *
 * Chaves são estáveis e semânticas (`hero.h1`), nunca posicionais. Adicionar,
 * remover ou reordenar seções no HTML não quebra tradução nenhuma.
 *
 * Como adicionar texto novo:
 *   1. no HTML:  <p data-i18n="secao.item">English source</p>
 *   2. aqui:     "secao.item": "Texto em português"
 *
 * Atributos:  data-i18n-placeholder  e  data-i18n-aria  usam as mesmas chaves.
 */
window.MARIA_TRANSLATIONS = {
  "defaultLang": "en-US",
  "labels": {
    "pt-BR": "PT-BR",
    "en-US": "EN-US"
  },

  /* Chrome compartilhado por todas as páginas. */
  "common": {
    "pt-BR": {
      "a11y.skip": "Pular para o conteúdo",
      "brand.copy": "Inteligência de risco para aplicações",
      "nav.homeAria": "M.A.R.I.A. página inicial",
      "nav.product": "Produto",
      "nav.openscan": "Open Scan",
      "nav.pricing": "Preços",
      "nav.why": "História",
      "nav.enterprise": "Enterprise",
      "nav.contact": "Contato",

      "cta.demo": "Ver antes na demo",
      "cta.demoShort": "Ver demo",
      "cta.demoTry": "Testar numa organização de exemplo",
      "cta.demoNow": "Veja a demo agora",
      "cta.connect": "Conectar meu repositório",
      "cta.connectShort": "Conectar repo",
      "cta.bigEstate": "Mais de 150 repositórios? Fala comigo direto &rarr;",
      "cta.bigEstateShort": "150+ repos? Fala comigo",
      "cta.openscan": "Baixar o Open Scan Pack grátis",
      "cta.talk": "Falar comigo",
      "cta.talkEnterprise": "Falar sobre Enterprise",
      "cta.seeEnterprise": "Ver preços Enterprise",

      "common.illustrative": "Exemplo ilustrativo",
      "footer.copy": "Feito para desenvolvedores e times de AppSec que querem menos ruído e decisões melhores.",

      "features.score.title": "Um número por aplicação, e todo o raciocínio por trás dele.",
      "features.score.link": "Como o score funciona &rarr;",
      "features.pr.title": "Veja se uma mudança aumenta ou reduz risco, antes do merge.",
      "features.pr.link": "Ver no pull request &rarr;",
      "features.timeline.title": "Risco ao longo do tempo, com os eventos que o moveram.",
      "features.timeline.link": "Ver a timeline &rarr;",
      "features.norm.title": "Várias ferramentas, vários formatos, um modelo só.",
      "features.norm.link": "Como a normalização funciona &rarr;",
      "features.dev.title": "Segurança onde o time de engenharia já trabalha.",
      "features.dev.link": "Por que isso importa &rarr;",
      "features.champ.title": "O loop de correção que ninguém mais fecha.",
      "features.champ.body": "Cutucar, corrigir, confirmar, reconhecer &mdash; construído sobre ciência comportamental, com a ética escrita no código.",
      "features.champ.link": "Ver a ciência &rarr;",
      "features.fd.title": "O que sabemos, inferimos e não conseguimos ver.",
      "features.fd.body": "Todo finding separado em fato, inferência e desconhecido &mdash; cada linha com sua fonte, data e confiança.",
      "features.fd.link": "Como a honestidade funciona &rarr;",

      "pricing.eyebrow": "PREÇOS",
      "pricing.repos": "repos",
      "pricing.talk": "Vamos conversar",
      "pricing.allIncluded": "Core completo incluso. Módulos opcionais com preço à parte, abaixo.",

      "pricing.addons.eyebrow": "MÓDULOS OPCIONAIS",
      "pricing.addons.h2": "Dois módulos você pode adicionar. Todo o resto é core.",
      "pricing.addons.sub": "Sem teatro de \"nada escondido\": estes dois são de verdade opcionais e de verdade pagos, e aqui está quanto custam. Risk score, PR analysis, timeline, normalization, policy engine e advanced insights são todos core &mdash; em todos os planos, sem custo extra.",
      "pricing.addons.champions.name": "Champions Module",
      "pricing.addons.champions.desc": "O loop comportamental &mdash; cutucar, corrigir, confirmar, reconhecer &mdash; mais o programa de champions e o enablement por squad.",
      "pricing.addons.champions.link": "Como funciona &rarr;",
      "pricing.addons.vai.name": "V.AI &mdash; Vulnerability AI",
      "pricing.addons.vai.desc": "Priorização assistida e explicável em cima do dado de risco determinístico. Ela explica; nunca decide, e nunca vê seu código-fonte.",
      "pricing.addons.vai.link": "Ver o modelo de transparência &rarr;",
      "pricing.addons.perMonth": "/mês",
      "pricing.addons.landingLine": "Módulos opcionais: <strong>Champions Module</strong> $29/mês &middot; <strong>V.AI</strong> $39/mês. Todo o resto é core.",
      "pricing.monthly.title": "Assinatura",
      "pricing.monthly.headline": "a partir de $10<span>/mês</span>",
      "pricing.monthly.min": "Mínimo de $10/mês. As taxas por repo abaixo só passam a somar acima disso.",
      "pricing.monthly.unit": "Por repositório, por mês:",
      "pricing.guarantee": "7 dias. Não serviu? Devolvo. Sem pergunta, sem formulário, sem call de retenção.",
      "pricing.monthly.example": "Exemplo: 30 repositórios = <strong>$60/mês</strong>. Só isso.",

      "pricing.ent.kicker": "ENTERPRISE",
      "pricing.ent.title": "Centenas ou milhares de repos",
      "pricing.ent.headline": "sob medida",
      "pricing.ent.unit": "Para escala de verdade:",
      "pricing.ent.item1": "Preço por repositórios ativos e relevantes, não por cemitério digital",
      "pricing.ent.item2": "Integração com SCM e normalização SARIF/CycloneDX",
      "pricing.ent.item3": "Motor de priorização por risco e relatórios executivos",
      "pricing.ent.item4": "Suporte e onboarding dedicados",
      "pricing.ent.body": "Nesse tamanho, o número depende do seu parque. A gente conversa e vê se encaixa &mdash; com franqueza."
    }
  },

  "pages": {

    /* ------------------------------------------------------------- landing */
    "index": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "M.A.R.I.A. | Inteligência de risco para aplicações",
        "meta": {
          "description": "Cerca de 60 segundos entre criar a conta e o primeiro risk score. M.A.R.I.A. lê os scanners que você já roda e transforma isso em um score de risco por aplicação, por pull request, ao longo do tempo. A partir de $10/mês, por repositório.",
          "ogTitle": "M.A.R.I.A. | Do cadastro ao primeiro risk score em 60 segundos",
          "ogDescription": "Não é estimativa de vendedor &mdash; é o tempo real. Inteligência de risco em cima das ferramentas de segurança que você já roda. A partir de $10/mês, por repositório, nunca por desenvolvedor.",
          "twitterTitle": "M.A.R.I.A. | Primeiro risk score em 60 segundos",
          "twitterDescription": "Conecte um repositório e receba um score de risco honesto por aplicação. Sobre os scanners que você já roda. A partir de $10/mês."
        },
        "sendingText": "Enviando...",
        "strings": {
          "hero.eyebrow": "Inteligência de risco para aplicações",
          "hero.h1": "Você não tem <span class=\"text-highlight\">1.000</span> vulnerabilidades.<br />Você tem <span class=\"text-highlight\">seis</span> que importam.",
          "hero.sub": "M.A.R.I.A. lê a saída dos scanners que você já roda &mdash; SARIF, SBOM, secrets, dependências &mdash; e transforma isso em um score de risco por aplicação, por pull request, ao longo do tempo.",
          "hero.timer": "<strong>Cerca de 60 segundos</strong> entre criar a conta e o seu primeiro risk score. Não é estimativa de vendedor &mdash; é o tempo real.",
          "hero.trust": "Lê a saída dos scanners &mdash; SARIF, CycloneDX, JSON. Fica acima das ferramentas que você já tem. Preço por repositório, nunca por desenvolvedor.",

          "sixty.eyebrow": "TEMPO ATÉ O PRIMEIRO VALOR",
          "sixty.h2": "Sessenta segundos.",
          "sixty.p1": "Não é a estimativa otimista do vendedor. É o tempo entre criar a conta e ver o primeiro risco calculado nos seus repositórios.",
          "sixty.p2": "Sem call de descoberta. Sem implantação. Sem trimestre de projeto.",
          "sixty.item1": "<strong>0:00</strong> &mdash; criar a conta",
          "sixty.item2": "<strong>0:20</strong> &mdash; conectar um repositório",
          "sixty.item3": "<strong>~1:00</strong> &mdash; primeiro risk score, com os motivos por trás dele",
          "sixty.videoNote": "Vídeo do cronômetro &mdash; gravação pendente",
          "hero.card.context": "Exposta na internet &middot; trata PII &middot; deploy 4&times;/semana",
          "hero.card.driverLabel": "Maior fator",
          "hero.card.driverValue": "CVE-2025-31324 em <code>spring-core</code>, alcançável por um endpoint exposto",
          "hero.card.fixLabel": "Corrija primeiro",
          "hero.card.fixValue": "Suba <code>spring-core</code> 6.1.4 &rarr; 6.1.6 &mdash; risco 84 &rarr; 41",
          "hero.card.footnote": "3 de 212 findings respondem por 61% do risco desta aplicação.",

          "integrations.title": "M.A.R.I.A. não substitui suas ferramentas. Ela lê o que elas produzem.",
          "integrations.note": "Qualquer coisa que fale SARIF, CycloneDX ou findings em JSON.",

          "pain.line1": "Você tem <span class=\"text-highlight\">1.000</span> vulnerabilidades.",
          "pain.line2": "Você não sabe qual delas <span class=\"text-highlight\">importa</span>.",
          "pain.line3": "Suas ferramentas não <span class=\"text-highlight\">concordam</span> entre si.",
          "pain.line4": "Seu time parou de <span class=\"text-highlight\">ler</span> os alertas meses atrás.",
          "pain.h2": "Isso não é <span class=\"text-highlight\">segurança.</span><br />Isso é <span class=\"text-highlight\">ruído.</span>",

          "shift.eyebrow": "A VIRADA",
          "shift.h2": "Vulnerabilidade não é risco.",
          "shift.p1": "Um CVE 9.8 numa biblioteca que você nunca chama, dentro de um sistema interno que não guarda dado nenhum, não é o seu problema. Uma falha de severidade média no serviço que processa pagamentos e sobe quatro vezes por semana é.",
          "shift.p2": "<strong>Severidade é uma propriedade da vulnerabilidade. Risco é uma propriedade da sua aplicação.</strong> M.A.R.I.A. calcula a segunda.",

          "how.eyebrow": "COMO FUNCIONA",
          "how.h2": "Três passos. Nenhum scanner novo. Cerca de um minuto.",
          "how.step1.title": "Conectar",
          "how.step1.time": "~20 segundos",
          "how.step1.body": "Aponte M.A.R.I.A. para os repositórios que você quer cobrir. Ela trabalha a partir de findings e metadados do repositório.",
          "how.step2.time": "Roda no seu CI",
          "how.step3.time": "Primeiro score em ~60 segundos",
          "how.step2.title": "Ingerir",
          "how.step2.body": "Seus scanners atuais enviam a saída deles &mdash; SARIF, CycloneDX, JSON. M.A.R.I.A. deduplica, normaliza e correlaciona tudo em um modelo só.",
          "how.step2.link": "Ainda não roda scanner? Comece pelo Open Scan Pack gratuito &rarr;",
          "how.step3.title": "Agir",
          "how.step3.body": "Cada aplicação ganha um score de risco com os motivos por trás dele. Cada pull request ganha um delta de risco antes do merge. Toda semana você vê o que mudou, e por quê.",

          "osp.eyebrow": "GRÁTIS, SEM PRECISAR DE CONTA",
          "osp.h2": "Ainda sem scanner? Comece por aí, de graça.",
          "osp.body": "O Open Scan Pack monta um setup de CI pronto para rodar com scanners open-source &mdash; SAST, secrets, SCA, container, IaC, DAST e SBOM. Escolha sua stack, baixe os templates, rode no seu próprio pipeline. Sem login, sem acesso ao repositório, nada sai do seu CI.",
          "osp.bridge": "Depois que eles rodam, você tem exatamente a entrada de que a M.A.R.I.A. precisa &mdash; e o pacote gratuito continua gratuito de qualquer jeito.",
          "osp.item1": "<strong>SAST</strong> &middot; Semgrep, Opengrep",
          "osp.item2": "<strong>Secrets</strong> &middot; Gitleaks, TruffleHog",
          "osp.item3": "<strong>SCA / SBOM</strong> &middot; Trivy, Grype, Syft, OSV",
          "osp.item4": "<strong>IaC</strong> &middot; Checkov, KICS",
          "osp.item5": "<strong>DAST</strong> &middot; OWASP ZAP, Nuclei",

          "evidence.eyebrow": "NO PULL REQUEST",
          "evidence.h2": "Segurança que chega onde o trabalho acontece.",
          "evidence.sub": "Este é o formato do que um desenvolvedor recebe &mdash; no review que ele já tem aberto, sobre código que ele escreveu minutos atrás.",
          "evidence.link": "Como funciona a análise de PR",

          "features.eyebrow": "O QUE TEM DENTRO",
          "features.h2": "Sete coisas, bem feitas.",
          "features.score.body": "Exposição, sensibilidade dos dados, explorabilidade e velocidade de mudança &mdash; com os pesos do seu jeito, nunca uma caixa-preta.",
          "features.pr.body": "Um comentário no PR com o delta, a causa e a correção que inverteria o resultado.",
          "features.timeline.body": "Responda \"estamos melhores que no trimestre passado?\" com evidência em vez de opinião.",
          "features.norm.body": "O mesmo problema reportado por quatro scanners vira um finding com quatro fontes de evidência.",
          "features.dev.body": "Não um painel que ninguém tem motivo para abrir. Uma coisa para fazer, com o motivo junto.",

          "diff.eyebrow": "O QUE M.A.R.I.A. NÃO É",
          "diff.h2": "Prefiro ser claro a ser impressionante.",
          "diff.scanner.title": "Não é scanner.",
          "diff.scanner.body": "M.A.R.I.A. não encontra vulnerabilidades. Suas ferramentas já fazem isso, e fazem bem.",
          "diff.replace.title": "Não é substituição.",
          "diff.replace.body": "Continue com Semgrep. Continue com Trivy. Continue com o que funciona. M.A.R.I.A. fica acima delas e torna a saída delas utilizável.",
          "diff.seat.title": "Não é cobrada por desenvolvedor.",
          "diff.seat.body": "Contrate dez engenheiros e a conta continua igual. Você paga por repositório, porque é ele que carrega o risco.",
          "diff.quadrant.title": "Não é construída para quadrante.",
          "diff.quadrant.body": "Isto é construído em volta dos problemas que os times têm neste trimestre, não em volta de um checklist para relatório de analista. É uma escolha consciente: você vai encontrar aqui capacidades que plataformas maiores não têm, e lá checkboxes de enterprise que aqui ainda não existem.",

          "pricing.h2": "Produto completo. Pague só pela escala.",
          "pricing.sub": "O core completo em todos os planos &mdash; sem feature travada atrás de tier, sem \"fale conosco\" pra ver preço. Dois módulos opcionais são cobrados à parte, e o preço está aqui mesmo.",
          "pricing.fullLink": "Preço completo, exemplos de cálculo e dúvidas comerciais &rarr;",
          "pricing.enterpriseLink": "Centenas ou milhares de repositórios? &rarr;",

          "story.eyebrow": "POR QUE ISTO EXISTE",
          "story.h2": "M.A.R.I.A. é o nome da minha mãe.",
          "story.p1": "Maria Jeane Pereira (1956&ndash;2020) passou a vida cuidando de pessoas, principalmente das que ninguém mais estava cuidando.",
          "story.p2": "A sigla é real &mdash; Management Application Risk Integrated Analysis. E o motivo por trás dela também: software deveria ter alguém prestando atenção nele.",
          "story.p3": "Eu sou Cássio Pereira. Construo isso sozinho, por escolha, e prefiro resolver o que dói nos times hoje a lançar features que ficam bonitas em demo.",
          "story.link": "Ler a história completa",

          "faq.eyebrow": "RESPOSTAS DIRETAS",
          "faq.h2": "As perguntas que você já está fazendo.",
          "faq.q1": "Isso é mais um scanner?",
          "faq.a1": "Não. M.A.R.I.A. não escaneia nada. Ela consome o que os seus scanners produzem &mdash; SARIF, CycloneDX, findings em JSON &mdash; e transforma isso em risco no qual você pode agir. Se seus scanners funcionam, M.A.R.I.A. os torna úteis. Se você ainda não tem nenhum, comece pelo Open Scan Pack gratuito.",
          "faq.q2": "E se eu não tiver scanner nenhum configurado?",
          "faq.a2": "Use o <a href=\"/openscan/\">Open Scan Pack gratuito</a>: escolha uma stack de scanners open-source, baixe templates de CI prontos e rode no seu próprio pipeline. Sem login, sem acesso ao repositório, nada sai do seu CI. Depois que eles rodam, você tem a entrada de que M.A.R.I.A. precisa.",
          "faq.q3": "Vou ter que trocar minhas ferramentas atuais?",
          "faq.a3": "Não, e nem deveria. M.A.R.I.A. só é útil porque seus scanners já funcionam. Ela fica acima deles, remove as duplicatas e coloca o que sobra na ordem do que realmente importa.",
          "faq.q4": "Como o score de risco é calculado?",
          "faq.a4": "A partir das propriedades da aplicação, não só da severidade do finding: exposição, sensibilidade dos dados, explorabilidade, alcançabilidade, com que frequência o código muda, e os findings em si. Todo score abre e mostra os fatores que o produziram, e os pesos são seus para ajustar &mdash; uma fintech e um time de ferramentas internas não compartilham modelo de risco. <a href=\"/product/risk-score/\">Ver como o score funciona &rarr;</a>",
          "faq.q5": "Por que cobrar por repositório em vez de por desenvolvedor?",
          "faq.a5": "Porque cobrar por desenvolvedor te pune por crescer o time, e seu risco não escala com headcount &mdash; escala com o código que você mantém. Dez engenheiros em doze repositórios carregam mais ou menos o mesmo risco de aplicação que três engenheiros em doze repositórios.",

          "join.eyebrow": "VEJA AO VIVO",
          "join.h2": "Descubra como é o seu risco de verdade.",
          "join.sub": "Crie uma conta grátis na demo e explore uma organização de exemplo &mdash; sem configurar scanner, sem call de vendas.",
          "join.note": "Grátis para testar. Sem cartão de crédito. Eu leio todas as mensagens."
        }
      }
    },

    /* -------------------------------------------------------- índice produto */
    "product": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Produto | M.A.R.I.A. Inteligência de risco para aplicações",
        "meta": {
          "description": "Score de risco por aplicação, análise de risco em pull request, timeline de risco, normalização de findings e AppSec com foco em desenvolvedor.",
          "ogTitle": "Produto | M.A.R.I.A.",
          "ogDescription": "Cinco capacidades: score de risco, risco no pull request, timeline, normalização e foco em desenvolvedor.",
          "twitterTitle": "Produto | M.A.R.I.A.",
          "twitterDescription": "O que M.A.R.I.A. faz, capacidade por capacidade."
        },
        "strings": {
          "product.eyebrow": "O PRODUTO",
          "product.h1": "Cinco capacidades. Um objetivo: dizer o que realmente importa.",
          "product.sub": "M.A.R.I.A. fica acima das ferramentas de segurança que você já roda. Cada página abaixo explica uma parte de como isso funciona, com um exemplo concreto da saída.",
          "product.score.body": "Vulnerabilidade tem severidade. Aplicação tem risco. Exposição, sensibilidade dos dados, explorabilidade, alcançabilidade e velocidade de mudança, com os pesos do seu jeito.",
          "product.pr.body": "Todo pull request move o seu risco. M.A.R.I.A. comenta o delta no PR enquanto o autor ainda tem o contexto na cabeça.",
          "product.timeline.body": "Quando subiu, quando caiu, o que causou cada movimento e quais decisões realmente funcionaram.",
          "product.norm.body": "SARIF, CycloneDX e saída bruta de scanner, deduplicados e correlacionados em uma única visão do que está errado.",
          "product.dev.body": "Desenvolvedor não ignora segurança. Ele ignora lista na qual não dá para agir. É essa a diferença.",
          "product.champ.body": "Cutucar, corrigir, confirmar, reconhecer &mdash; construído sobre ciência comportamental, com a ética escrita no código.",
          "product.fd.body": "Todo finding separado em fato, inferência e desconhecido &mdash; cada linha com sua fonte, data e confiança.",
          "product.ctaH2": "Mais fácil de ver do que de descrever.",
          "product.ctaSub": "A demo roda numa organização de exemplo. Nada para instalar, nada para conectar."
        }
      }
    },

    /* ----------------------------------------------------------- risk score */
    "riskScore": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Application Risk Score — como M.A.R.I.A. mede risco de aplicação",
        "meta": {
          "description": "Um score CVSS descreve uma vulnerabilidade. Um risk score descreve a sua aplicação. Veja os fatores por trás do score do M.A.R.I.A. e como ajustá-los.",
          "ogTitle": "Application Risk Score | M.A.R.I.A.",
          "ogDescription": "Vulnerabilidade tem severidade. Aplicação tem risco. Veja como esse número é construído.",
          "twitterTitle": "Application Risk Score | M.A.R.I.A.",
          "twitterDescription": "Vulnerabilidade tem severidade. Aplicação tem risco."
        },
        "strings": {
          "score.crumb": "Application Risk Score",
          "score.h1": "Vulnerabilidade tem severidade. Aplicação tem <span class=\"text-highlight\">risco</span>.",
          "score.sub": "Um score por aplicação, construído a partir de exposição, sensibilidade dos dados, explorabilidade e velocidade de mudança &mdash; com cada fator visível e cada peso ajustável por você.",
          "score.problemH2": "O problema de ordenar por severidade",
          "score.problem1": "Severidade é atribuída por alguém que nunca viu a sua arquitetura. CVSS 9.8 significa \"isto é ruim em geral\". Não diz nada sobre a função vulnerável ser chamada algum dia, sobre o serviço ser alcançável pela internet, ou sobre ele tocar em um único dado de cliente.",
          "score.problem2": "Então os times fazem a única coisa que uma lista plana permite: ordenar por severidade e trabalhar de cima para baixo. É assim que você corrige um crítico num job interno enquanto a API de pagamentos mantém um \"médio\" aberto por oito meses.",
          "score.problem3": "O volume piora tudo. Passando de algumas centenas de itens, ordenar por severidade deixa de ser triagem e vira loteria.",
          "score.solutionH2": "Como M.A.R.I.A. pontua uma aplicação",
          "score.solution1": "M.A.R.I.A. pontua a <strong>aplicação</strong>, não o finding. O score combina:",
          "score.factor1": "<strong>Exposição</strong> &mdash; exposta na internet, interna ou isolada",
          "score.factor2": "<strong>Sensibilidade dos dados</strong> &mdash; PII, dados de pagamento, credenciais, ou nada que importe",
          "score.factor3": "<strong>Explorabilidade</strong> &mdash; exploração conhecida, exploit público disponível, probabilidade de exploração",
          "score.factor4": "<strong>Alcançabilidade</strong> &mdash; se o caminho de código vulnerável é de fato usado",
          "score.factor5": "<strong>Velocidade de mudança</strong> &mdash; código que muda todo dia carrega risco diferente de código congelado há dois anos",
          "score.factor6": "<strong>Severidade e densidade dos findings</strong> &mdash; o sinal bruto dos seus scanners, como uma entrada entre várias e não como a resposta inteira",
          "score.solution2": "Todo score abre. Você vê os fatores, os pesos e quais findings puxam o número. Nada é caixa-preta &mdash; um score que ninguém consegue explicar é ignorado exatamente como os alertas que ele substituiu.",
          "score.solution3": "E os pesos são seus. Uma fintech e um time de ferramentas internas não têm o mesmo modelo de risco, e M.A.R.I.A. não finge que têm.",
          "score.honestH2": "O motor de honestidade por baixo do número",
          "score.honest1": "Um score de risco só é útil se puder <em>cair</em>. Parece óbvio, e é onde a maioria das ferramentas falha em silêncio: elas contam todo finding que o repositório já teve, então corrigir nunca move o número. O score do M.A.R.I.A. conta <strong>risco aberto</strong> &mdash; e a política de contagem é pura, versionada e deliberadamente difícil de burlar:",
          "score.honest2": "<strong>Corrigir reduz o score; aceitar risco não.</strong> Risco aceito continua contando &mdash; porque se silenciar um finding melhorasse sua postura, o caminho mais barato para \"ficar seguro\" seria desviar o olhar em vez de corrigir.",
          "score.honest3": "<strong>Um crítico nunca é silenciado sem responsabilidade.</strong> Findings high e critical continuam visíveis independente de gate, contexto ou config; um scanner que declara um crítico \"suprimido\" é recusado &mdash; a alegação vira evidência atribuída e o finding aparece mesmo assim.",
          "score.honest4": "<strong>Desconhecido nunca vira \"não\".</strong> Todo sinal tri-estado mantém o valor do meio; dado faltando é dito, não assumido como seguro.",
          "score.honest5": "<strong>A régua é versionada.</strong> Mudar a metodologia nunca produz um falso \"risco melhorou\" &mdash; um score só pode ser comparado com outro construído do mesmo jeito.",
          "score.honest6": "Provado em produção: um repositório caiu de 92 para 84 no momento em que seis críticos foram marcados como corrigidos. Antes deste motor existir, aquele número não se movia.",
          "score.whyH2": "Por que isso importa",
          "score.why1": "Porque um número em que todo mundo confia muda a conversa.",
          "score.why2": "O desenvolvedor para de perguntar \"qual destes 212 findings eu faço primeiro?\"",
          "score.why3": "O tech lead consegue justificar gastar uma sprint em um serviço, em vez de espalhar correções por dez.",
          "score.why4": "O CTO ganha uma visão de portfólio que responde \"onde a gente está realmente exposto?\", em vez de um gráfico de barras de findings abertos que sobe toda vez que você compra mais um scanner.",
          "score.why5": "Um número honesto vale mais que mil alertas corretos.",
          "score.exampleH2": "Um exemplo prático",
          "score.exampleIntro": "Duas aplicações da mesma organização. Uma delas tem menos findings e muito mais risco.",
          "score.exampleOutro": "<code>internal-reports</code> tem <strong>mais</strong> findings e <strong>mais</strong> críticos &mdash; e um quarto do risco. Ordenar por severidade teria mandado seu time para o repositório errado. É esse o argumento inteiro, em uma tabela.",
          "score.ctaH2": "Veja isso pontuado num portfólio real.",
          "score.ctaSub": "A organização de demonstração tem uma dúzia de aplicações com saída real de scanner por trás.",
          "score.next": "A seguir: como o risco muda a cada pull request &rarr;"
        }
      }
    },

    /* ------------------------------------------------------------- PR risk */
    "prRisk": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Pull Request Risk Analysis — impacto de segurança antes do merge",
        "meta": {
          "description": "Todo pull request muda seu risco. M.A.R.I.A. comenta o delta direto no PR: o que a mudança adiciona, o que remove e o que precisa de decisão — antes do merge.",
          "ogTitle": "Pull Request Risk Analysis | M.A.R.I.A.",
          "ogDescription": "Veja o impacto de segurança de uma mudança enquanto o autor ainda tem o contexto na cabeça.",
          "twitterTitle": "Pull Request Risk Analysis | M.A.R.I.A.",
          "twitterDescription": "Todo pull request muda seu risco. A maioria dos times descobre meses depois."
        },
        "strings": {
          "pr.crumb": "Pull Request Risk Analysis",
          "pr.h1": "Todo pull request muda o seu risco. A maioria dos times descobre <span class=\"text-highlight\">meses depois</span>.",
          "pr.sub": "M.A.R.I.A. comenta no PR com o delta de risco: o que a mudança introduz, o que ela remove e o que precisa de decisão &mdash; enquanto o autor ainda tem o contexto na cabeça.",
          "pr.problemH2": "O finding chega muito depois da decisão",
          "pr.problem1": "Findings de segurança chegam num calendário que não tem nada a ver com engenharia. Uma dependência adicionada na segunda aparece num relatório três semanas depois, atribuída a quem estiver de plantão, sobre um código que essa pessoa não escreveu, num serviço que ela talvez nem conheça.",
          "pr.problem2": "A essa altura, corrigir virou arqueologia. O autor já seguiu em frente, o contexto sumiu e a mudança está enterrada sob quarenta commits. O momento mais barato para corrigir um problema de segurança &mdash; os cinco minutos antes do merge, com alguém já pensando naquele código exato &mdash; é justamente o momento que ninguém usa.",
          "pr.problem3": "O contrário também é invisível. Quando um time <em>reduz</em> risco, nada registra isso. Trabalho de segurança parece só custo, porque só as falhas são reportadas.",
          "pr.solutionH2": "Impacto de risco, no pull request",
          "pr.solution1": "M.A.R.I.A. avalia cada pull request contra a baseline de risco atual da aplicação e comenta direto nele:",
          "pr.solution2": "<strong>O que este PR adiciona</strong> &mdash; novas dependências com vulnerabilidades conhecidas, novos secrets, novos endpoints expostos, código novo em caminhos que já eram arriscados",
          "pr.solution3": "<strong>O que este PR remove</strong> &mdash; upgrades, remoções, correções, findings que fecham",
          "pr.solution4": "<strong>O delta líquido</strong> &mdash; um número: esta mudança move o risco de X para Y",
          "pr.solution5": "<strong>O que precisa de gente</strong> &mdash; os dois ou três itens que merecem a atenção de quem revisa, não a lista inteira",
          "pr.solution6": "É um comentário, não um portão. Uma ferramenta de segurança que começa bloqueando merge no primeiro dia é uma ferramenta de segurança desativada na segunda semana.",
          "pr.whyH2": "Por que isso importa",
          "pr.why1": "É aqui que AppSec entra na cultura de engenharia, ou não entra.",
          "pr.why2": "O desenvolvedor recebe o retorno na ferramenta em que já está, sobre código que escreveu dez minutos atrás, no review que já está lendo.",
          "pr.why3": "Quem revisa ganha uma opinião de segurança sem precisar ser especialista em segurança.",
          "pr.why4": "O engenheiro de AppSec deixa de ser a pessoa que aparece depois com má notícia.",
          "pr.why5": "Risco deixa de ser relatório mensal e vira propriedade da mudança.",
          "pr.why6": "O objetivo não é pegar mais coisa. É pegar quando corrigir custa cinco minutos em vez de cinco dias.",
          "pr.exampleH2": "Um exemplo prático",
          "pr.exampleIntro": "Um pull request que adiciona uma feature, sobe uma dependência e, de quebra, introduz um problema maior do que resolve:",
          "pr.exampleOutro": "Repare no que o desenvolvedor recebe: um número, um motivo, uma ação específica e o resultado de tomar essa ação &mdash; no lugar onde ele já está. Ninguém precisou abrir painel nenhum, e o upgrade que este PR <em>de fato</em> entregou é creditado em vez de ignorado.",
          "pr.ctaH2": "Veja o que seu time receberia de verdade.",
          "pr.ctaSub": "A organização de demonstração tem pull requests com deltas reais por trás.",
          "pr.next": "A seguir: como esses deltas se acumulam ao longo do tempo &rarr;"
        }
      }
    },

    /* ------------------------------------------------------------ timeline */
    "timeline": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Risk Timeline — como seu risco mudou, e por quê",
        "meta": {
          "description": "Veja risco ao longo do tempo com os eventos que o moveram: o release que subiu, o upgrade que derrubou, o finding aberto há 90 dias. Evidência em vez de foto do momento.",
          "ogTitle": "Risk Timeline | M.A.R.I.A.",
          "ogDescription": "Estamos melhores que no trimestre passado? Você deveria conseguir responder isso.",
          "twitterTitle": "Risk Timeline | M.A.R.I.A.",
          "twitterDescription": "Risco ao longo do tempo, com os eventos que o moveram."
        },
        "strings": {
          "timeline.crumb": "Risk Timeline",
          "timeline.h1": "\"A gente está melhor que no trimestre passado?\" Você deveria conseguir <span class=\"text-highlight\">responder isso</span>.",
          "timeline.sub": "M.A.R.I.A. registra risco ao longo do tempo e anota o que o moveu &mdash; para você ver quais decisões funcionaram, em vez de adivinhar.",
          "timeline.problemH2": "Quase toda ferramenta de segurança só mostra o <em>agora</em>",
          "timeline.problem1": "Findings abertos hoje. Críticos hoje. Um número que não significa nada sem algo com que comparar.",
          "timeline.problem2": "Aí as perguntas que realmente aparecem numa reunião de planejamento ficam sem resposta:",
          "timeline.problem3": "O trabalho do trimestre passado reduziu alguma coisa?",
          "timeline.problem4": "Quando este serviço virou nossa maior exposição?",
          "timeline.problem5": "Gastamos três sprints em remediação &mdash; o que mudou?",
          "timeline.problem6": "Quais das nossas práticas realmente movem o ponteiro?",
          "timeline.problem7": "Os times acabam discutindo por anedota. E AppSec, uma das poucas áreas que consegue genuinamente provar valor com número, acaba defendendo orçamento com sensação.",
          "timeline.solutionH2": "Um registro contínuo, com as causas anexadas",
          "timeline.solution1": "M.A.R.I.A. mantém um histórico de risco por aplicação e do portfólio inteiro, anotado com os eventos que o mudaram:",
          "timeline.solution2": "<strong>Risco ao longo do tempo</strong> &mdash; por aplicação, por time, ou em tudo",
          "timeline.solution3": "<strong>Eventos anotados</strong> &mdash; releases, upgrades de dependência, findings novos, findings resolvidos, mudanças de ownership",
          "timeline.solution4": "<strong>Atribuição de causa</strong> &mdash; toda subida e toda queda aponta para o que a produziu",
          "timeline.solution5": "<strong>Tempo até a correção</strong> &mdash; por severidade e por time, medido em vez de estimado",
          "timeline.solution6": "<strong>Envelhecimento</strong> &mdash; o que está aberto há mais tempo, ponderado pelo quanto realmente importa",
          "timeline.solution7": "A timeline não é um gráfico para admirar. É o artefato que você leva para a reunião de planejamento quando precisa defender tempo.",
          "timeline.whyH2": "Por que isso importa",
          "timeline.why1": "Uma foto do momento diz onde você está. Uma tendência diz se o que você está fazendo funciona.",
          "timeline.why2": "Um tech lead consegue mostrar que a sprint de upgrade derrubou o risco do portfólio, e pedir a próxima com evidência em vez de convicção.",
          "timeline.why3": "Um engenheiro de AppSec consegue provar que o retorno em tempo de pull request reduziu o tempo médio de correção.",
          "timeline.why4": "Um CTO consegue ver se o investimento em segurança produziu uma curva que desce.",
          "timeline.why5": "E quando o risco sobe &mdash; e ele vai subir, porque você entrega &mdash; você sabe qual mudança fez isso, em vez de descobrir durante um incidente.",
          "timeline.exampleH2": "Um exemplo prático",
          "timeline.exampleIntro": "Seis meses de uma aplicação, com os eventos que moveram a linha:",
          "timeline.exampleOutro": "\"Reduzimos o risco de aplicação em um terço em um trimestre, e foi exatamente isto que causou\" é uma frase que você pode dizer para um conselho. Essa frase é o produto.",
          "timeline.ctaH2": "Explore uma timeline com seis meses de histórico.",
          "timeline.ctaSub": "A organização de demonstração tem história, não só uma foto do momento.",
          "timeline.next": "A seguir: a camada da qual todo o resto depende &rarr;"
        }
      }
    },

    /* ------------------------------------------------------- normalization */
    "normalization": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Findings Normalization — SARIF, CycloneDX e scanners unificados",
        "meta": {
          "description": "Várias ferramentas, vários formatos, três nomes para o mesmo bug. M.A.R.I.A. normaliza SARIF, CycloneDX e findings em um modelo só e elimina as duplicatas.",
          "ogTitle": "Findings Normalization | M.A.R.I.A.",
          "ogDescription": "Várias ferramentas, vários formatos, um modelo. Duplicatas eliminadas, findings correlacionados.",
          "twitterTitle": "Findings Normalization | M.A.R.I.A.",
          "twitterDescription": "Várias ferramentas, vários formatos, três nomes para o mesmo bug."
        },
        "strings": {
          "norm.crumb": "Findings Normalization",
          "norm.h1": "Várias ferramentas. Vários formatos. <span class=\"text-highlight\">Três nomes</span> para o mesmo bug.",
          "norm.sub": "M.A.R.I.A. ingere SARIF, CycloneDX e saída bruta de scanner, deduplica entre ferramentas e entrega um modelo único do que realmente está errado.",
          "norm.problemH2": "Cada scanner novo piora a visão",
          "norm.problem1": "Um pipeline normal hoje: SAST, SCA, secrets, container, IaC, DAST. Seis categorias, muitas vezes mais de uma ferramenta por categoria, cada uma com seu formato, sua escala de severidade, seu esquema de identificador e sua própria ideia do que é um \"finding\".",
          "norm.problem2": "O resultado:",
          "norm.problem3": "A mesma dependência vulnerável reportada por três ferramentas, como três findings, com três severidades diferentes",
          "norm.problem4": "Escalas de severidade que não se comparam &mdash; o \"high\" de uma é o \"medium\" da outra",
          "norm.problem5": "Nenhuma correlação entre ferramentas: o endpoint exposto e a biblioteca vulnerável dentro dele são linhas sem relação em relatórios sem relação",
          "norm.problem6": "Contagens que inflam toda vez que você adota um scanner, fazendo seu programa de segurança parecer pior quanto mais você investe nele",
          "norm.problem7": "Os times resolvem isso com uma planilha, um script que alguém escreveu e deixou para trás, ou desistindo e olhando uma ferramenta só.",
          "norm.solutionH2": "Um modelo só, a partir do que quer que suas ferramentas produzam",
          "norm.solution1": "<strong>Ingerir</strong> &mdash; SARIF, CycloneDX e saída JSON dos scanners que você já roda",
          "norm.solution2": "<strong>Normalizar</strong> &mdash; uma escala de severidade, um modelo de identidade, mapeado para CVE, CWE e coordenadas de pacote",
          "norm.solution3": "<strong>Deduplicar</strong> &mdash; o mesmo problema vindo de quatro ferramentas vira um finding com quatro fontes de evidência, o que o torna <em>mais</em> confiável em vez de quatro vezes mais barulhento",
          "norm.solution4": "<strong>Correlacionar</strong> &mdash; findings se ligam à aplicação, ao serviço, ao endpoint e ao dono",
          "norm.solution5": "<strong>Rastrear identidade</strong> &mdash; findings mantêm identidade entre execuções, então \"continua aberto\", \"voltou\" e \"corrigido\" são fatos, não suposições",
          "norm.solution6": "Adicionar um scanner deveria melhorar a sua visão. Hoje, na maioria das vezes, só aumenta a sua contagem.",
          "norm.whyH2": "Por que isso importa",
          "norm.why1": "Todo o resto do M.A.R.I.A. depende disto. Não dá para pontuar uma aplicação, avaliar um pull request ou desenhar uma timeline em cima de quatro relatórios contraditórios.",
          "norm.why2": "É também a camada que os times mais constroem sozinhos &mdash; mal, uma vez, e depois mantêm para sempre. Se você tem um script que junta saída de scanner, você já construiu uma versão pior disto, e sabe exatamente quanto custa mantê-la viva.",
          "norm.why3": "Tem um efeito de segunda ordem também: quando as duplicatas colapsam, o número <em>cai</em>. Um time que confia na contagem volta a ler a contagem.",
          "norm.exampleH2": "Um exemplo prático",
          "norm.exampleIntro": "Uma dependência vulnerável, como três ferramentas a enxergam &mdash; e como M.A.R.I.A. resolve:",
          "norm.exampleOutro": "Três linhas viraram uma, e a que sobrou carrega mais informação do que as três: quem é o dono, onde ela vive, se é alcançável e quanto vale corrigir.",
          "norm.ctaH2": "Ainda sem scanner? Comece por aí, de graça.",
          "norm.ctaSub": "O Open Scan Pack gera templates de CI para uma stack de scanners open-source. Sem login, sem acesso ao repositório &mdash; tudo roda no seu próprio pipeline.",
          "norm.next": "A seguir: por que isso só funciona se o desenvolvedor usar &rarr;"
        }
      }
    },

    /* -------------------------------------------------------- for developers */
    "forDevelopers": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Developer-Focused AppSec — segurança que cabe na engenharia",
        "meta": {
          "description": "Desenvolvedor não ignora segurança, ignora lista na qual não dá para agir. M.A.R.I.A. entrega risco onde o time já trabalha, com motivo e próximo passo.",
          "ogTitle": "Developer-Focused AppSec | M.A.R.I.A.",
          "ogDescription": "Desenvolvedor não ignora segurança. Ignora lista na qual não dá para agir.",
          "twitterTitle": "Developer-Focused AppSec | M.A.R.I.A.",
          "twitterDescription": "Segurança onde o time já trabalha, com o motivo junto."
        },
        "strings": {
          "dev.crumb": "Developer-Focused AppSec",
          "dev.h1": "Desenvolvedor não ignora segurança. Ele ignora <span class=\"text-highlight\">lista na qual não dá para agir</span>.",
          "dev.sub": "Segurança que chega no pull request, aponta uma coisa para fazer e explica por que importa &mdash; em vez de um painel que ninguém tem motivo para abrir.",
          "dev.problemH2": "A história do \"desenvolvedor não se importa\" está errada",
          "dev.problem1": "E é uma desculpa conveniente para ferramentas que nunca foram desenhadas para ele. Olhe o que um desenvolvedor de fato recebe:",
          "dev.problem2": "Uma lista de 400 itens sem ordem, sem dono e sem contexto",
          "dev.problem3": "Um ticket sobre um serviço que ele nunca tocou",
          "dev.problem4": "Um \"crítico\" que acaba sendo inalcançável, duas vezes seguidas &mdash; e depois disso todo crítico vira ruído",
          "dev.problem5": "Um painel em outra plataforma, atrás de outro login, que ele teria que lembrar de visitar",
          "dev.problem6": "Um portão que bloqueia um release na sexta-feira sem explicação",
          "dev.problem7": "Qualquer engenheiro otimiza da mesma forma nessas condições: ignorar o canal com a pior relação sinal-ruído. Isso não é desinteresse. Dadas essas entradas, é comportamento correto.",
          "dev.problem8": "Enquanto isso o engenheiro de AppSec &mdash; muitas vezes uma pessoa para oitenta desenvolvedores &mdash; vira gargalo e portador de má notícia ao mesmo tempo, o que é uma forma eficiente de queimar um papel que já é difícil de contratar.",
          "dev.solutionH2": "Mude o que o desenvolvedor recebe",
          "dev.solution1": "<strong>No pull request, não num portal.</strong> O retorno de risco chega como comentário, no review que ele já está lendo.",
          "dev.solution2": "<strong>Uma coisa, não quatrocentas.</strong> Ordenadas pela contribuição real ao risco, então o topo da lista é genuinamente o topo.",
          "dev.solution3": "<strong>Com um motivo.</strong> \"Alcançável pelo seu endpoint público de checkout\" dá para agir. \"CVSS 9.8\" é curiosidade.",
          "dev.solution4": "<strong>Com a correção e o efeito dela.</strong> O upgrade a aplicar, e o que ele faz com o score.",
          "dev.solution5": "<strong>Sem virar portão no primeiro dia.</strong> Informar primeiro, impor depois, e só onde já mereceu esse direito.",
          "dev.solution6": "<strong>Com o dono certo.</strong> Findings se mapeiam a serviços e donos, então ninguém tria o código de outra pessoa.",
          "dev.solution7": "Para Security Champions e engenheiros de AppSec a virada é maior: em vez de perseguir findings individuais, você define o modelo de risco e deixa ele distribuir o trabalho. Você sai de fazer triagem para desenhar como a triagem acontece.",
          "dev.sciH2": "Existe uma ciência nisso, e é o ponto inteiro",
          "dev.sci1": "Fazer um desenvolvedor agir não é questão de força de vontade. A ciência comportamental modela isso como <strong>motivação + capacidade + um gatilho na hora certa</strong>, e hábitos se formam num loop: cue, resposta e &mdash; a parte que toda ferramenta de segurança esquece &mdash; uma <strong>recompensa</strong>. Um scanner te dá um cue e espera uma resposta que ele nunca reconhece. Isso produz atividade, não hábito.",
          "dev.sci2": "M.A.R.I.A. fecha o loop: cutuca uma vez, o desenvolvedor corrige, o mesmo scanner confirma, o score de risco cai, e a pessoa é creditada &mdash; enquanto ainda lembra de ter feito. E porque desenhar comportamento pode escorregar para manipulação, a ética está escrita no código: sem escassez falsa, sem ranking individual, discordar nunca tem penalidade, e só se afirma queda de risco quando a queda é real.",
          "dev.sciLink": "Ler a ciência comportamental por trás do M.A.R.I.A. &rarr;",
          "dev.whyH2": "Por que isso importa",
          "dev.why1": "AppSec não escala adicionando scanner. Escala quando quem escreve o código toma decisões um pouco melhores, continuamente &mdash; e isso só acontece se a informação chegar no momento da decisão, num formato no qual dê para agir.",
          "dev.why2": "Toda ferramenta ignorada também custa algo que nunca aparece na fatura: ela ensina ao seu time que alerta de segurança pode ser pulado com segurança. Esse hábito é caro, e é difícil de desfazer.",
          "dev.why3": "O teste honesto de uma ferramenta de segurança não é cobertura. É se o desenvolvedor abre ela uma segunda vez sem ninguém pedir.",
          "dev.exampleH2": "Um exemplo prático",
          "dev.exampleIntro": "A mesma informação, entregue de duas formas:",
          "dev.exampleOutro": "É essa a tese inteira. Não mais findings &mdash; findings num momento em que agir é barato, com contexto suficiente para valer oito segundos.",
          "dev.ctaH2": "Veja o que seu time veria de verdade.",
          "dev.ctaSub": "Se este é o argumento que você vem fazendo internamente, esta página foi escrita para ser encaminhada.",
          "dev.next": "Ver quanto custa &rarr;"
        }
      }
    },

    /* ---------------------------------------------------- security champions */
    "champions": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Behavioral AppSec — o loop de correção que ninguém mais fecha | M.A.R.I.A.",
        "meta": {
          "description": "Ferramentas de segurança geram atividade. Comportamento gera segurança. M.A.R.I.A. fecha o loop de hábito — cutucar, corrigir, confirmar, reconhecer — com ciência comportamental, de forma ética e determinística.",
          "ogTitle": "Behavioral AppSec | M.A.R.I.A.",
          "ogDescription": "O loop que toda outra ferramenta deixa aberto: cutucar, corrigir, confirmar — e de fato reconhecer quem corrigiu.",
          "twitterTitle": "Behavioral AppSec | M.A.R.I.A.",
          "twitterDescription": "Ferramentas de segurança geram atividade. Comportamento gera segurança."
        },
        "strings": {
          "champ.crumb": "Behavioral AppSec",
          "champ.h1": "Ferramentas de segurança geram atividade. <span class=\"text-highlight\">Comportamento</span> gera segurança.",
          "champ.sub": "Um scanner alerta, alguém eventualmente corrige, e o sistema nunca diz uma palavra. Isso é atividade, não hábito. M.A.R.I.A. é construído sobre a ciência comportamental de fechar esse loop &mdash; de forma ética, determinística e em voz alta.",
          "champ.problemH2": "O loop que toda ferramenta de segurança deixa aberto",
          "champ.problem1": "A ciência comportamental tem um modelo simples de por que as pessoas agem: <strong>B = Motivação + Capacidade + Prompt</strong> (BJ Fogg). Uma ação acontece quando há motivação suficiente, capacidade real e um gatilho na hora certa. Hábitos se formam num ciclo: <strong>cue &rarr; desejo &rarr; resposta &rarr; recompensa</strong>.",
          "champ.problem2": "Quase toda ferramenta de segurança tem o cue e a resposta, e nunca fecha a recompensa. O scanner dispara um alerta. Alguém, eventualmente, corrige algo. E o sistema não diz nada &mdash; nunca confirma que a correção funcionou, nunca mostra o risco cair, nunca reconhece quem fez o trabalho.",
          "champ.problem3": "Um cue e uma resposta sem recompensa produzem atividade. Nunca produzem um hábito.",
          "champ.problem4": "M.A.R.I.A. fazia exatamente isso, um dia. Corrigir isso &mdash; e provar a correção em produção &mdash; é o que este módulo é.",
          "champ.solutionH2": "O loop, fechado e em voz alta",
          "champ.solution1": "M.A.R.I.A. completa o ciclo do jeito que o comportamento de fato se forma: <strong>cutucar &rarr; corrigir &rarr; confirmar &rarr; reconhecer.</strong>",
          "champ.solution2": "<strong>Cutucar</strong> &mdash; uma única ação recomendada na hora certa, sob um teto duro de atenção. Não a lista inteira; a única coisa que vale a pena fazer agora.",
          "champ.solution3": "<strong>Corrigir</strong> &mdash; o desenvolvedor faz o trabalho, no fluxo dele.",
          "champ.solution4": "<strong>Confirmar</strong> &mdash; o mesmo scanner roda de novo e o finding sumiu. Sumir é evidência, então uma guarda anti-cliff descarta um scan que simplesmente não rodou.",
          "champ.solution5": "<strong>Reconhecer</strong> &mdash; a recompensa chega em dois tempos: no merge, enquanto a pessoa ainda lembra do que fez, e de novo quando o re-scan confirma de verdade.",
          "champ.solution6": "Este é o demo de sessenta segundos que nenhuma outra ferramenta consegue dar: um desenvolvedor corrige um problema, o scanner confirma, o score de risco da aplicação cai, e a pessoa é creditada &mdash; ao vivo, com dado real.",
          "champ.ethicsH2": "Desenho comportamental tem uma versão sombria. Estas são as linhas vermelhas.",
          "champ.ethics1": "No momento em que você desenha comportamento, você pode manipulá-lo. M.A.R.I.A. é uma homenagem a uma mãe que cuidava de pessoas &mdash; e uma mãe que <em>manipula</em> é pior que uma ferramenta neutra. Então a ética não é uma página de política; está escrita no código, cada linha com um teste que quebra se for violada:",
          "champ.ethics2": "<strong>Invisível por fluidez, jamais por ocultação.</strong> A camada fica fora do seu caminho, mas nunca esconde um risco real para te cutucar.",
          "champ.ethics3": "<strong>Sem escassez, sem imprevisibilidade, sem ranking individual.</strong> Os dark patterns manipulativos do design de engajamento são <em>inexpressáveis no schema</em>, não meramente desencorajados.",
          "champ.ethics4": "<strong>Discordar é de graça.</strong> Contestar um finding leva um clique, nunca carrega penalidade e nunca é lido pelo sistema de reconhecimento nem usado para avaliar uma pessoa.",
          "champ.ethics5": "<strong>Reconhecer o fato, nunca inventar o impacto.</strong> A recompensa afirma uma queda de risco só quando ela é real. Num repo saturado, reconhece a correção e diz claramente que o número não moveu.",
          "champ.ethics6": "<strong>O silêncio é ganho com evidência, não com ignorância.</strong> M.A.R.I.A. só se cala sobre um risco quando tem evidência positiva de que o risco é baixo &mdash; nunca porque um sinal está faltando.",
          "champ.raciH2": "Um champion é uma ponte, não um gargalo",
          "champ.raci1": "Programas de champion falham do mesmo jeito: o champion vira aos poucos um time de AppSec de meio período, um ponto único de falha com um trabalho paralelo. M.A.R.I.A. codifica os papéis para que isso não aconteça em silêncio.",
          "champ.raci2": "<strong>O champion facilita</strong> &mdash; interpreta contexto, traduz, conecta. Aceita risco baixo/médio e escala. É esse o mandato inteiro.",
          "champ.raci3": "<strong>O champion nunca é o responsável pela correção</strong> &mdash; isso é do desenvolvedor &mdash; e nunca aceita risco high/critical &mdash; isso exige autoridade dedicada. O papel fica fora da cadeia de responsabilidade por garantia de um teste, não de uma diretriz.",
          "champ.raci4": "<strong>Ser champion é opt-in.</strong> Sem auto-inscrição. E contribuição é medida como ajuda dada, nunca como bugs possuídos &mdash; porque um bug é do código, não da pessoa.",
          "champ.whyH2": "Por que isso importa &mdash; e por que vende",
          "champ.why1": "Todo ASPM termina em \"aqui está sua lista priorizada\" ou \"criamos o ticket\". Nenhum prova que o trabalho reduziu risco, e nenhum fecha o loop de volta para quem fez. Essa camada &mdash; julgamento, responsabilidade e prova de resultado &mdash; não tem dono neste mercado.",
          "champ.why2": "Priorização é table-stakes com dez fornecedores brigando por paridade. O loop fechado não é. É a diferença entre uma ferramenta que seu time tolera e uma que muda silenciosamente como ele se comporta.",
          "champ.why3": "O teste honesto de uma ferramenta de segurança não é cobertura. É se o comportamento sobrevive quando você remove o prompt.",
          "champ.exampleH2": "A recompensa, em dois tempos",
          "champ.exampleIntro": "O reconhecimento chega no momento do hábito, não num relatório mensal:",
          "champ.exampleOutro": "Provado em produção: um repositório foi de score de risco 92 para 84 no momento em que seis críticos foram marcados como corrigidos. Antes da correção de scoring honesto que tornou isso possível, o número não podia se mover &mdash; então a recompensa não tinha nada de verdadeiro para dizer.",
          "champ.ctaH2": "Veja o loop fechar com dado real.",
          "champ.ctaSub": "A demo roda o ciclo inteiro de ponta a ponta &mdash; corrigir, confirmar, cair, reconhecer.",
          "champ.next": "A seguir: o que um único finding realmente te diz &rarr;"
        }
      }
    },

    /* -------------------------------------------------------- finding detail */
    "findingDetail": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "O finding, explicado — o que sabemos, inferimos e não conseguimos ver | M.A.R.I.A.",
        "meta": {
          "description": "Um scanner te diz o que encontrou. M.A.R.I.A. te diz o que sabe, o que está inferindo, o que não consegue ver e onde as fontes divergem — cada linha com sua fonte, data e confiança.",
          "ogTitle": "O finding, explicado | M.A.R.I.A.",
          "ogDescription": "Sabemos, inferimos, não sabemos e divergimos — separado, com fonte e honesto. Comunicação desenhada sobre as máximas de Grice.",
          "twitterTitle": "O finding, explicado | M.A.R.I.A.",
          "twitterDescription": "O que sabemos, o que inferimos, o que não conseguimos ver — cada linha com fonte."
        },
        "strings": {
          "fd.crumb": "O finding, explicado",
          "fd.h1": "Um scanner te diz o que encontrou. M.A.R.I.A. te diz o que <span class=\"text-highlight\">sabe</span>.",
          "fd.sub": "Todo finding, separado no que sabemos, no que inferimos, no que não sabemos e onde as fontes divergem &mdash; cada linha carregando sua fonte, sua data e sua confiança.",
          "fd.problemH2": "Um finding cru é uma alegação sem epistemologia",
          "fd.problem1": "Um scanner te entrega um rule ID, uma severidade, um arquivo e uma linha. O que ele não te diz é o quanto tem certeza, de onde veio cada pedaço disso, se outra ferramenta discorda, ou se o código vulnerável é sequer alcançável. Então o desenvolvedor tem que reconstruir tudo isso na mão &mdash; e geralmente não reconstrói.",
          "fd.problem2": "A falha mais profunda é de honestidade. A maioria das ferramentas apresenta um palpite e um fato na mesma fonte. \"CVSS 9.8\" (um fato) e \"isto é explorável\" (muitas vezes um palpite) parecem idênticos. Quando um \"crítico\" acaba sendo inalcançável duas vezes seguidas, o desenvolvedor para de acreditar no quarto &mdash; e está certo em parar.",
          "fd.solutionH2": "Comunicação desenhada sobre as máximas de Grice",
          "fd.solution1": "Existe um modelo conhecido do que faz a comunicação cooperativa de fato funcionar &mdash; as quatro máximas do filósofo Paul Grice. M.A.R.I.A. constrói o finding em volta delas:",
          "fd.solution2": "<strong>Qualidade</strong> &mdash; não diga o que você não tem evidência para dizer. Um sinal faltando é mostrado como <em>desconhecido</em>, nunca renderizado sorrateiramente como \"não\".",
          "fd.solution3": "<strong>Quantidade</strong> &mdash; o suficiente, e nada mais. Seções vazias simplesmente não aparecem; a evidência técnica fica a um clique de distância, não jogada por cima.",
          "fd.solution4": "<strong>Relevância</strong> &mdash; comece pelo porquê isso importa <em>aqui</em>: a exposição, os dados, a alcançabilidade desta aplicação específica.",
          "fd.solution5": "<strong>Modo</strong> &mdash; um título orientado à ação, não um rule ID. \"Atualizar lodash 4.17.15 &rarr; 4.17.21 em payments-api\", não \"[CVE-2021-23337] Prototype Pollution\".",
          "fd.fourH2": "Quatro caixas, e cada linha mostra sua fonte",
          "fd.four1": "Todo finding é dividido em quatro categorias honestas, e toda alegação contextual carrega sua proveniência &mdash; de onde veio, quando, e o quanto o sistema está confiante:",
          "fd.four2": "<strong>O que sabemos</strong> &mdash; fatos tirados um-a-um de evidência atribuída: a ferramenta, a versão dela, uma versão de correção confirmada pelo fornecedor, uma dependência direta vs. transitiva.",
          "fd.four3": "<strong>O que inferimos</strong> &mdash; as conclusões do próprio M.A.R.I.A. a partir de suas políticas determinísticas, cada uma rotulada como inferência com sua base e confiança, nunca disfarçada de fato.",
          "fd.four4": "<strong>O que não sabemos</strong> &mdash; todo sinal relevante que está faltando, dito em voz alta. Alcançabilidade sem dado é \"desconhecido\", não \"não alcançável\".",
          "fd.four5": "<strong>Onde as fontes divergem</strong> &mdash; quando dois scanners conflitam, os dois sinais são mostrados com fonte e data, e a regra de resolução aplicada é nomeada. Nada é rebaixado em silêncio.",
          "fd.four6": "Fato, inferência e recomendação são visualmente distintos, e a IA &mdash; onde é usada &mdash; apenas <em>explica</em> um objeto que o determinismo já decidiu. Ela nunca vê seu código-fonte, e nunca afirma explorabilidade sem evidência. Essas são linhas vermelhas no código, não preferências.",
          "fd.doneH2": "Uma checkbox não é uma correção",
          "fd.done1": "A maioria das ferramentas trata \"ticket fechado\" como \"risco eliminado\". M.A.R.I.A. separa os dois. Um finding carrega critérios de aceitação escolhidos por template para sua categoria, uma definition of done, e um método explícito de prova &mdash; e fechar o loop significa que a prova aconteceu:",
          "fd.done2": "Marcar uma caixa no Jira significa <strong>declarado</strong>, e nada mais.",
          "fd.done3": "<strong>Verificado</strong> significa que a verificação declarada de fato rodou &mdash; na maioria das vezes, o mesmo scanner re-escaneou e o finding realmente sumiu.",
          "fd.done4": "Um finding só fecha quando seus critérios obrigatórios estão verificados <em>e</em> ele está ausente do scan mais recente &mdash; ou carrega um aceite de risco formal e responsável.",
          "fd.done5": "Se reaparece, ele reabre sozinho, o critério \"sumiu no próximo scan\" vira reprovado, e o histórico é preservado.",
          "fd.done6": "É isso que transforma a trilha de auditoria de um passivo em uma defesa: todo adiamento é registrado, motivado e reversível.",
          "fd.exampleH2": "Um exemplo prático",
          "fd.exampleIntro": "O mesmo CVE que um scanner entregaria como uma linha plana, reconstruído como um finding no qual dá para agir:",
          "fd.exampleOutro": "Repare no que nunca acontece: alcançabilidade não é adivinhada, a versão de correção é atribuída à ferramenta que a confirmou, e o número de prioridade mostra a própria aritmética. Um desenvolvedor age em oito segundos, e um auditor rastreia cada linha até sua fonte.",
          "fd.whyH2": "Por que isso importa &mdash; e por que vende",
          "fd.why1": "Confiança é o recurso mais escasso em AppSec. Um desenvolvedor que já se queimou com falsos críticos desconta a ferramenta inteira. Transparência &mdash; separar o que é sabido do que é palpite, e mostrar a fonte dos dois &mdash; é como se reconquista a confiança. E é, francamente, algo que nenhum scanner e quase nenhum ASPM se dá ao trabalho de fazer.",
          "fd.why2": "E isso se acumula: um finding honesto sobre a própria incerteza é um finding que o desenvolvedor vai abrir uma segunda vez.",
          "fd.ctaH2": "Abra um finding real na demo.",
          "fd.ctaSub": "Veja as quatro caixas, a proveniência e a prova-de-correção com dado ao vivo.",
          "fd.next": "A seguir: como esses findings se somam em um score honesto &rarr;"
        }
      }
    },

    /* ------------------------------------------------------------- pricing */
    "pricing": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Preços — por repositório, nunca por desenvolvedor | M.A.R.I.A.",
        "meta": {
          "description": "Preços da M.A.R.I.A. no aberto: assinatura cobrada por repositório, mais dois módulos opcionais pagos (Champions $29/mês, V.AI $39/mês) e Enterprise para escala grande. Sem cobrança por assento, sem formulário pra ver preço.",
          "ogTitle": "Preços | M.A.R.I.A.",
          "ogDescription": "Produto completo. Pague só pela escala. Por repositório, nunca por desenvolvedor.",
          "twitterTitle": "Preços | M.A.R.I.A.",
          "twitterDescription": "Por repositório, nunca por desenvolvedor."
        },
        "strings": {
          "pricingPage.h1": "Produto completo. Pague só pela <span class=\"text-highlight\">escala</span>.",
          "pricingPage.sub": "O core completo em todos os planos, com preço aberto. Dois módulos opcionais &mdash; Champions e V.AI &mdash; são cobrados à parte, e o preço deles está nesta mesma página.",
          "pricingPage.mathH2": "Quanto custa, com a conta feita",
          "pricingPage.mathIntro": "Preço por repositório é simples, mas ninguém deveria precisar fazer aritmética para descobrir quanto custa um produto:",
          "pricingPage.mathNote": "O mínimo de $10 é o motivo de times bem pequenos pagarem $10 em vez de $0,99 &times; a quantidade de repositórios. É o piso, não uma pegadinha. Add-ons opcionais (Champions $29, V.AI $39) somam por cima.",
          "pricingPage.faqEyebrow": "DÚVIDAS COMERCIAIS",
          "pricingPage.faqH2": "Antes de você perguntar",
          "pricingPage.q1": "Por que cobrar por repositório em vez de por desenvolvedor?",
          "pricingPage.a1": "Porque cobrar por desenvolvedor te pune por crescer o time, e seu risco não escala com headcount &mdash; escala com o código que você mantém. Dez engenheiros em doze repositórios carregam mais ou menos o mesmo risco de aplicação que três engenheiros nos mesmos doze.",
          "pricingPage.q2": "Alguma funcionalidade fica de fora nos planos mais baratos?",
          "pricingPage.a2": "Nenhuma &mdash; todo plano é o core completo: score de risco, análise de pull request, timeline e normalização estão todos lá. O preço da assinatura muda com quantos repositórios você conecta. A única coisa que soma a isso é um módulo opcional (Champions ou V.AI), e só se você escolher um.",
          "pricingPage.q3": "E se a minha quantidade de repositórios mudar?",
          "pricingPage.a3": "A faixa acompanha os repositórios que você tem conectados: conectou mais, sobe de faixa; desconectou, volta. Sem contrato anual, sem multa &mdash; você paga pelo que está de fato analisando.",
          "pricingPage.q4": "Quando faz sentido ir para o Enterprise?",
          "pricingPage.a4": "Quando você tem centenas ou milhares de repositórios e a lista por repositório deixa de ser a conversa certa &mdash; aí o preço passa a ser por repositórios ativos e relevantes, com SSO, suporte e onboarding dedicados. <a href=\"/enterprise/\">Ver como o Enterprise funciona &rarr;</a>",
          "pricingPage.q5": "Eu tenho centenas ou milhares de repositórios.",
          "pricingPage.a5": "Então preço de tabela por repositório deixa de ser a conversa certa. <a href=\"/enterprise/\">Veja como funciona em escala enterprise &rarr;</a>",
          "pricingPage.ctaH2": "Veja antes de gastar qualquer coisa.",
          "pricingPage.ctaSub": "A demo roda numa organização de exemplo, e o Open Scan Pack é gratuito para sempre."
        }
      }
    },

    /* ---------------------------------------------------------- enterprise */
    "enterprise": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Enterprise — inteligência de risco em milhares de repositórios",
        "meta": {
          "description": "Para organizações com centenas ou milhares de repositórios. Preço por repositório ativo e relevante — não por inventário arquivado. Veja o que conta e o que não conta.",
          "ogTitle": "Enterprise | M.A.R.I.A.",
          "ogDescription": "Preço por repositório ativo e relevante, não por cemitério digital.",
          "twitterTitle": "Enterprise | M.A.R.I.A.",
          "twitterDescription": "Inteligência de risco em milhares de repositórios."
        },
        "strings": {
          "enterprise.eyebrow": "ENTERPRISE",
          "enterprise.h1": "Feito para <span class=\"text-highlight\">escala de verdade</span>.",
          "enterprise.sub": "Para organizações com centenas ou milhares de repositórios, M.A.R.I.A. é precificada por repositórios ativos e relevantes &mdash; não por tudo que um dia foi empurrado para o seu SCM.",
          "enterprise.tier1.title": "Até 1.000 repos ativos",
          "enterprise.tier1.body": "Para times saindo de scanners barulhentos para uma operação de AppSec baseada em risco.",
          "enterprise.tier2.title": "Até 3.000 repos ativos",
          "enterprise.tier2.body": "Para organizações de engenharia maduras padronizando inteligência de risco.",
          "enterprise.tier3.title": "Até 7.500 repos ativos",
          "enterprise.tier3.body": "Melhor encaixe para ambientes grandes com milhares de repositórios.",
          "enterprise.tier4.title": "Mais de 7.500 repos ativos",
          "enterprise.tier4.body": "Para ambientes complexos, suporte dedicado e onboarding customizado.",
          "enterprise.custom": "Sob medida",
          "enterprise.countsH3": "O que conta como repositório ativo?",
          "enterprise.countsBody": "Um repositório faturável é um repositório de código ativo e relevante, conectado ao M.A.R.I.A. e usado na análise de risco. Se ele não está produzindo sinal no qual você age, não deveria estar na fatura.",
          "enterprise.notCountsH3": "O que não conta?",
          "enterprise.not1": "Repositórios arquivados",
          "enterprise.not2": "Forks, mirrors, templates e repositórios só de documentação",
          "enterprise.not3": "Provas de conceito sem dono ativo",
          "enterprise.not4": "Repositórios sem sinal de segurança relevante",
          "enterprise.includesH3": "Enterprise inclui",
          "enterprise.inc1": "Integração com SCM",
          "enterprise.inc2": "Normalização SARIF e CycloneDX",
          "enterprise.inc3": "Score de risco por aplicação",
          "enterprise.inc4": "Motor de priorização por risco",
          "enterprise.inc5": "Relatórios executivos",
          "enterprise.inc6": "Suporte e onboarding",
          "enterprise.ctaH2": "Nesse tamanho, o número depende do seu parque.",
          "enterprise.ctaSub": "Me diga quantos repositórios estão de fato ativos, quais scanners você roda e no que seu time está se afogando. Eu digo com franqueza se M.A.R.I.A. encaixa."
        }
      }
    },

    /* ----------------------------------------------------------------- why */
    "why": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Por que M.A.R.I.A. | A história por trás do nome",
        "meta": {
          "description": "A história do nome M.A.R.I.A.: uma homenagem a Maria Jeane Pereira, e o que cuidar de software realmente significa dentro de um produto de AppSec.",
          "ogTitle": "Por que M.A.R.I.A.",
          "ogDescription": "Esta plataforma nasceu como homenagem e compromisso: cuidar melhor do software e das pessoas por trás dele.",
          "twitterTitle": "Por que M.A.R.I.A.",
          "twitterDescription": "A história por trás do nome e o compromisso por trás da plataforma."
        },
        "strings": {
          "why.eyebrow": "POR QUE ISTO EXISTE",
          "why.h1": "O nome <span class=\"text-highlight\">M.A.R.I.A.</span> é uma homenagem à minha mãe.",
          "why.sub": "Antes de ser produto, marca ou estratégia, M.A.R.I.A. é memória, respeito e cuidado.",
          "why.p1": "Maria Jeane Pereira (<time datetime=\"1956\">&ast; 1956</time> &ndash; <time datetime=\"2020\">&#10013; 2020</time>) passou a vida cuidando de pessoas, principalmente das que ninguém mais estava cuidando. Esse exemplo me forma como filho, e foi o que me empurrou a construir esta plataforma.",
          "why.p2": "No mundo de AppSec existe muito barulho, muita ferramenta e pouquíssima clareza. Eu não quis criar mais uma vitrine de features. Eu quis criar cuidado real para software real.",
          "why.p3": "Por isso M.A.R.I.A. significa <strong>Management Application Risk Integrated Analysis</strong>. Mas, acima da sigla, ela carrega uma ideia mais simples: tecnologia também pode cuidar.",
          "why.principlesH2": "O que isso significa na prática",
          "why.principle1": "Resolver problemas sérios do dia a dia antes de adicionar features novas.",
          "why.principle2": "Ajudar times a priorizar o que realmente reduz risco.",
          "why.principle3": "Construir um produto que desenvolvedor genuinamente queira usar.",
          "why.principle4": "Medir sucesso por impacto real, não por buzzword ou quadrante.",
          "why.founderH2": "Quem constrói isso",
          "why.founderBody": "Eu sou Cássio Pereira. M.A.R.I.A. é uma iniciativa independente, de uma pessoa só, e isso é escolha deliberada: significa que eu respondo seu e-mail pessoalmente, que consigo mudar de direção em uma semana quando o produto está errado, e que prefiro resolver o que dói nos times hoje a lançar features que ficam bonitas em demo. Significa também que eu sou honesto sobre o custo dessa escolha &mdash; você vai encontrar aqui capacidades que plataformas maiores não têm, e lá checkboxes de enterprise que aqui ainda não existem.",
          "why.founderLink": "Mais sobre mim",
          "why.ctaH2": "Cuidar melhor do software é cuidar melhor das pessoas.",
          "why.ctaSub": "Se isso faz sentido para você, venha construir comigo desde o começo.",
          "why.productLink": "Ver o que ela faz"
        }
      }
    }
  }
};
