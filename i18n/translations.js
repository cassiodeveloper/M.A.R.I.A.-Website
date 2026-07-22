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

      "cta.demo": "Ver funcionando com dados reais",
      "cta.demoShort": "Ver demo",
      "cta.demoTry": "Testar numa organização de exemplo",
      "cta.waitlist": "Entrar na waitlist",
      "cta.reserve": "Reservar minha vaga",
      "cta.founder": "Quero ser founding team",
      "cta.openscan": "Baixar o Open Scan Pack grátis",
      "cta.talk": "Falar comigo",
      "cta.talkEnterprise": "Falar sobre Enterprise",

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

      "pricing.eyebrow": "PREÇOS",
      "pricing.repos": "repos",
      "pricing.talk": "Vamos conversar",
      "pricing.allIncluded": "Todas as funcionalidades inclusas. Sem plano escondido.",
      "pricing.monthly.title": "Mensal",
      "pricing.monthly.headline": "a partir de $9,99<span>/mês</span>",
      "pricing.monthly.unit": "Por repositório, por mês:",
      "pricing.monthly.example": "Exemplo: 30 repositórios = <strong>$60/mês</strong>. Só isso.",
      "pricing.lifetime.title": "Vitalício",
      "pricing.lifetime.headline": "pagamento único",
      "pricing.lifetime.unit": "Pague uma vez, use para sempre:",
      "pricing.lifetime.example": "Pagamento único. Sem renovação, sem fatura surpresa.",
      "pricing.upto25": "Até 25 repos",
      "pricing.upto50": "Até 50 repos",
      "pricing.upto100": "Até 100 repos",
      "pricing.over100": "Mais de 100 repos",

      "founder.kicker": "FOUNDING TEAMS",
      "founder.title": "50 times. Depois, nunca mais.",
      "founder.unit": "Acesso vitalício, até 50 repositórios",
      "founder.item1": "Acesso vitalício, até 50 repositórios",
      "founder.item2": "Badge de founding user",
      "founder.item3": "Acesso antecipado a tudo que for novo",
      "founder.item4": "Um canal direto comigo, não uma fila de suporte",
      "founder.item5": "Onboarding prioritário, feito junto com você",
      "founder.why": "Isto não é desconto. É mais barato que o plano vitalício de $299 porque founding teams pagam com outra coisa: me dizer o que está errado no produto enquanto ainda é barato mudar.",
      "founder.choose": "Se você só quer a ferramenta, pegue o plano vitalício. Se você quer moldá-la, pegue este."
    }
  },

  "pages": {

    /* ------------------------------------------------------------- landing */
    "index": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "M.A.R.I.A. | Inteligência de risco para aplicações",
        "meta": {
          "description": "M.A.R.I.A. lê a saída dos scanners que você já roda e transforma isso em um score de risco por aplicação, por pull request, ao longo do tempo. Preço por repositório.",
          "ogTitle": "M.A.R.I.A. | Pare de apagar vulnerabilidade. Comece a reduzir risco.",
          "ogDescription": "Inteligência de risco em cima das ferramentas de segurança que você já tem. Feito para desenvolvedores e times de AppSec.",
          "twitterTitle": "M.A.R.I.A. | Inteligência de risco para aplicações",
          "twitterDescription": "Um score de risco por aplicação. Impacto de risco em cada pull request. Sobre as ferramentas que você já roda."
        },
        "sendingText": "Enviando...",
        "strings": {
          "hero.eyebrow": "Inteligência de risco para aplicações",
          "hero.h1": "Você não tem <span class=\"text-highlight\">1.000</span> vulnerabilidades.<br />Você tem <span class=\"text-highlight\">seis</span> que importam.",
          "hero.sub": "M.A.R.I.A. lê a saída dos scanners que você já roda &mdash; SARIF, SBOM, secrets, dependências &mdash; e transforma isso em um score de risco por aplicação, por pull request, ao longo do tempo.",
          "hero.trust": "Lê a saída dos scanners &mdash; SARIF, CycloneDX, JSON. Fica acima das ferramentas que você já tem. Preço por repositório, nunca por desenvolvedor.",
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
          "how.h2": "Três passos. Nenhum scanner novo.",
          "how.step1.title": "Conectar",
          "how.step1.body": "Aponte M.A.R.I.A. para os repositórios que você quer cobrir. Ela trabalha a partir de findings e metadados do repositório.",
          "how.step2.title": "Ingerir",
          "how.step2.body": "Seus scanners atuais enviam a saída deles &mdash; SARIF, CycloneDX, JSON. M.A.R.I.A. deduplica, normaliza e correlaciona tudo em um modelo só.",
          "how.step2.link": "Ainda não roda scanner? Comece pelo Open Scan Pack gratuito &rarr;",
          "how.step3.title": "Agir",
          "how.step3.body": "Cada aplicação ganha um score de risco com os motivos por trás dele. Cada pull request ganha um delta de risco antes do merge. Toda semana você vê o que mudou, e por quê.",

          "evidence.eyebrow": "NO PULL REQUEST",
          "evidence.h2": "Segurança que chega onde o trabalho acontece.",
          "evidence.sub": "Este é o formato do que um desenvolvedor recebe &mdash; no review que ele já tem aberto, sobre código que ele escreveu minutos atrás.",
          "evidence.link": "Como funciona a análise de PR",

          "features.eyebrow": "O QUE TEM DENTRO",
          "features.h2": "Cinco coisas, bem feitas.",
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
          "pricing.sub": "Todas as funcionalidades em todos os planos. Sem cobrança por assento. Sem \"fale conosco\" para ver um número.",
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

          "join.eyebrow": "ACESSO ANTECIPADO",
          "join.h2": "Descubra como é o seu risco de verdade.",
          "join.sub": "Entre na waitlist e eu falo com você pessoalmente quando sua vaga abrir. Founding teams primeiro.",
          "join.label": "E-mail",
          "join.placeholder": "voce@empresa.com",
          "join.note": "Um campo. Sem senha. Sem sequência de vendas. Eu leio todas as respostas."
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

    /* ------------------------------------------------------------- pricing */
    "pricing": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Preços — por repositório, nunca por desenvolvedor | M.A.R.I.A.",
        "meta": {
          "description": "Produto completo a partir de $9,99/mês, cobrado por repositório. Planos vitalícios a partir de $199. Todas as funcionalidades em todos os planos, sem cobrança por assento.",
          "ogTitle": "Preços | M.A.R.I.A.",
          "ogDescription": "Produto completo. Pague só pela escala. Por repositório, nunca por desenvolvedor.",
          "twitterTitle": "Preços | M.A.R.I.A.",
          "twitterDescription": "Por repositório, nunca por desenvolvedor."
        },
        "strings": {
          "pricingPage.h1": "Produto completo. Pague só pela <span class=\"text-highlight\">escala</span>.",
          "pricingPage.sub": "Todas as funcionalidades em todos os planos. Sem cobrança por assento. Sem \"fale conosco\" para ver um número.",
          "pricingPage.mathH2": "Quanto custa, com a conta feita",
          "pricingPage.mathIntro": "Preço por repositório é simples, mas ninguém deveria precisar fazer aritmética para descobrir quanto custa um produto:",
          "pricingPage.mathNote": "O mínimo de $9,99 é o motivo de times bem pequenos pagarem $9,99 em vez de $0,99 &times; a quantidade de repositórios. É o piso, não uma pegadinha.",
          "pricingPage.faqEyebrow": "DÚVIDAS COMERCIAIS",
          "pricingPage.faqH2": "Antes de você perguntar",
          "pricingPage.q1": "Por que cobrar por repositório em vez de por desenvolvedor?",
          "pricingPage.a1": "Porque cobrar por desenvolvedor te pune por crescer o time, e seu risco não escala com headcount &mdash; escala com o código que você mantém. Dez engenheiros em doze repositórios carregam mais ou menos o mesmo risco de aplicação que três engenheiros nos mesmos doze.",
          "pricingPage.q2": "Alguma funcionalidade fica de fora nos planos mais baratos?",
          "pricingPage.a2": "Nenhuma. Score de risco, análise de pull request, timeline e normalização estão em todos os planos. O preço muda com quantos repositórios você conecta, e nada mais.",
          "pricingPage.q3": "E se a minha quantidade de repositórios mudar?",
          "pricingPage.a3": "A faixa acompanha os repositórios que você tem conectados. Conectou mais, sobe de faixa; desconectou, volta. Nos planos vitalícios, o teto de repositórios é o limite que você comprou.",
          "pricingPage.q4": "Por que o plano founding é mais barato que o vitalício?",
          "pricingPage.a4": "Porque founding teams pagam com outra coisa além de dinheiro: retorno direto e desconfortável enquanto o produto ainda é barato de mudar. Isso vale mais para mim agora do que $50. Quando as 50 vagas acabarem, o vitalício será a única opção de pagamento único.",
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

    /* -------------------------------------------------------------- thanks */
    "thanks": {
      "pt-BR": {
        "htmlLang": "pt-BR",
        "title": "Você está dentro | M.A.R.I.A.",
        "meta": {
          "description": "Você entrou na waitlist do M.A.R.I.A."
        },
        "strings": {
          "thanks.eyebrow": "WAITLIST",
          "thanks.h1": "Você está <span class=\"text-highlight\">dentro</span>.",
          "thanks.sub": "Você vai receber notícia minha &mdash; de um endereço real, não de um no-reply.",
          "thanks.meanwhileH2": "Duas coisas enquanto espera",
          "thanks.card1Kicker": "VER",
          "thanks.card1Title": "Teste a demo numa organização de exemplo.",
          "thanks.card1Body": "Uma dúzia de aplicações com saída real de scanner por trás. Comece por <code>payments-api</code> &mdash; é a que carrega mais risco.",
          "thanks.card1Link": "Abrir a demo &rarr;",
          "thanks.card2Kicker": "RODAR",
          "thanks.card2Title": "Rode o Open Scan Pack gratuito nos seus repositórios.",
          "thanks.card2Body": "Escolha uma stack, baixe os templates de CI, rode no seu pipeline. Sem login, sem acesso ao repositório. Quando M.A.R.I.A. abrir, você já vai ter a entrada de que ela precisa.",
          "thanks.card2Link": "Baixar o pacote &rarr;",
          "thanks.skipH2": "Quer furar a fila?",
          "thanks.skipBody": "Responda o e-mail de confirmação com duas coisas: quantos repositórios você tem e o que está deixando seu time louco hoje. Eu leio todas pessoalmente, e founding teams entram primeiro.",
          "thanks.skipCta": "Falar comigo direto"
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
