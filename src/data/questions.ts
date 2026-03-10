import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'Fiscalidade',
    text: 'Impostos progressivos mais altos sobre grandes fortunas podem ser justificados para reforçar a redistribuição.',
    help: 'Pergunta se pessoas muito ricas devem pagar proporcionalmente mais para financiar políticas públicas e reduzir desigualdades.',
    example: 'Exemplo: taxas mais elevadas sobre patrimónios ou heranças muito elevadas.',
    effects: [
      { axis: 'economia', weight: 1.6 },
      { axis: 'estado', weight: 0.8 }
    ]
  },
  {
    id: 'q2',
    category: 'Propriedade pública',
    text: 'O Estado deve poder ter participação acionista em setores estratégicos como energia, transportes ou comunicações.',
    help: 'Pergunta se o Estado pode ser dono de uma parte de empresas importantes para garantir controlo público em áreas essenciais.',
    example: 'Exemplo: participação pública relevante numa empresa energética.',
    effects: [
      { axis: 'estado', weight: 1.5 },
      { axis: 'economia', weight: 1.0 }
    ]
  },
  {
    id: 'q3',
    category: 'Mercado',
    text: 'Mesmo em setores essenciais, o mercado deve funcionar com o mínimo possível de intervenção pública.',
    help: 'Pergunta se, mesmo em áreas como energia, saúde ou habitação, o Estado deve interferir pouco.',
    example: 'Exemplo: deixar preços e oferta ajustarem-se quase inteiramente pelo mercado.',
    effects: [
      { axis: 'economia', weight: -1.5 },
      { axis: 'estado', weight: -1.2 }
    ]
  },
  {
    id: 'q4',
    category: 'Trabalho',
    text: 'Os trabalhadores deviam ter representação obrigatória nos órgãos de decisão das grandes empresas.',
    help: 'Pergunta se os trabalhadores devem ter voz formal na gestão das empresas.',
    example: 'Exemplo: lugares para representantes dos trabalhadores no conselho de administração.',
    effects: [
      { axis: 'economia', weight: 1.4 },
      { axis: 'democracia', weight: 0.8 }
    ]
  },
  {
    id: 'q5',
    category: 'Habitação',
    text: 'O Estado deve intervir no mercado da habitação quando os preços expulsam a população local.',
    help: 'Pergunta se o poder público deve limitar ou corrigir dinâmicas de mercado no acesso à casa.',
    example: 'Exemplo: controlo de rendas, construção pública ou limitação de usos especulativos.',
    effects: [
      { axis: 'estado', weight: 1.3 },
      { axis: 'economia', weight: 1.0 }
    ]
  },
  {
    id: 'q6',
    category: 'Serviços públicos',
    text: 'Saúde, educação e transportes devem ser garantidos prioritariamente por serviços públicos universais.',
    help: 'Pergunta se bens essenciais devem ser assegurados sobretudo pelo setor público e para todos.',
    example: 'Exemplo: SNS forte, escola pública forte e transporte público acessível.',
    effects: [
      { axis: 'estado', weight: 1.6 },
      { axis: 'economia', weight: 1.1 }
    ]
  },
  {
    id: 'q7',
    category: 'Empresas',
    text: 'A concorrência e a iniciativa privada tendem a produzir melhores resultados do que empresas públicas.',
    help: 'Pergunta se, em geral, preferes soluções privadas e competitivas a soluções públicas.',
    example: 'Exemplo: privatizar empresas públicas para aumentar eficiência.',
    effects: [
      { axis: 'economia', weight: -1.4 },
      { axis: 'estado', weight: -1.0 }
    ]
  },
  {
    id: 'q8',
    category: 'Orçamento',
    text: 'Um défice público moderado pode ser aceitável se financiar investimento produtivo e proteção social.',
    help: 'Pergunta se admites mais despesa pública quando ela serve objetivos económicos ou sociais importantes.',
    example: 'Exemplo: investir em infraestruturas, ciência ou habitação pública.',
    effects: [
      { axis: 'estado', weight: 1.0 },
      { axis: 'economia', weight: 0.8 }
    ]
  },
  {
    id: 'q9',
    category: 'Privacidade',
    text: 'A proteção da privacidade deve prevalecer mesmo que isso limite certos mecanismos de vigilância estatal.',
    help: 'Pergunta se o Estado deve ter limites fortes quando recolhe dados ou vigia cidadãos.',
    example: 'Exemplo: restrições a vigilância digital massiva.',
    effects: [
      { axis: 'liberdades', weight: 1.7 }
    ]
  },
  {
    id: 'q10',
    category: 'Segurança',
    text: 'Em nome da segurança, o Estado deve poder expandir significativamente instrumentos de vigilância.',
    help: 'Pergunta se aceitas mais vigilância estatal quando a justificação é combater crime ou terrorismo.',
    example: 'Exemplo: câmaras, monitorização digital ou retenção massiva de dados.',
    effects: [
      { axis: 'liberdades', weight: -1.6 }
    ]
  },
  {
    id: 'q11',
    category: 'Liberdade de expressão',
    text: 'A liberdade de expressão deve ser protegida mesmo quando inclui ideias socialmente ofensivas ou impopulares.',
    help: 'Pergunta se a liberdade de expressão deve ter proteção muito ampla.',
    example: 'Exemplo: defender legalidade de opiniões duras que não configurem crime.',
    effects: [
      { axis: 'liberdades', weight: 1.3 }
    ]
  },
  {
    id: 'q12',
    category: 'Ordem pública',
    text: 'Leis mais severas e punições mais pesadas são, em geral, a melhor resposta ao aumento da criminalidade.',
    help: 'Pergunta se preferes respostas penais mais duras em vez de respostas mais preventivas ou sociais.',
    example: 'Exemplo: endurecimento das penas como principal solução.',
    effects: [
      { axis: 'liberdades', weight: -1.1 },
      { axis: 'estado', weight: 0.5 }
    ]
  },
  {
    id: 'q13',
    category: 'Direitos civis',
    text: 'O Estado deve reconhecer e proteger novas formas de família e identidade sem impor uma moral tradicional única.',
    help: 'Pergunta se o poder político deve adaptar-se à diversidade social e familiar.',
    example: 'Exemplo: proteção contra discriminação e reconhecimento de pluralidade familiar.',
    effects: [
      { axis: 'cultura', weight: 1.5 },
      { axis: 'liberdades', weight: 0.8 }
    ]
  },
  {
    id: 'q14',
    category: 'Participação',
    text: 'Referendos e mecanismos de participação cidadã deviam ser usados com mais frequência.',
    help: 'Pergunta se as pessoas devem intervir mais diretamente nas decisões políticas.',
    example: 'Exemplo: referendos locais, consultas vinculativas ou orçamentos participativos.',
    effects: [
      { axis: 'democracia', weight: 1.5 }
    ]
  },
  {
    id: 'q15',
    category: 'Executivo',
    text: 'Em momentos de crise, um executivo com poderes mais concentrados pode ser preferível a processos políticos mais lentos.',
    help: 'Pergunta se a rapidez e eficácia justificam concentrar mais poder no governo.',
    example: 'Exemplo: reduzir deliberação parlamentar para decidir mais depressa.',
    effects: [
      { axis: 'democracia', weight: -1.5 },
      { axis: 'descentralizacao', weight: -0.4 }
    ]
  },
  {
    id: 'q16',
    category: 'Instituições',
    text: 'O financiamento dos partidos e campanhas deve ser mais rigidamente regulado pelo Estado.',
    help: 'Pergunta se deves limitar mais a influência de dinheiro na política.',
    example: 'Exemplo: regras mais apertadas para donativos e campanhas.',
    effects: [
      { axis: 'democracia', weight: 1.0 },
      { axis: 'estado', weight: 0.5 }
    ]
  },
  {
    id: 'q17',
    category: 'Tecnocracia',
    text: 'Questões complexas deviam ser decididas mais por especialistas do que por debate político alargado.',
    help: 'Pergunta se preferes decisões mais técnicas e menos dependentes de conflito político.',
    example: 'Exemplo: entregar reformas económicas a comissões técnicas com forte autonomia.',
    effects: [
      { axis: 'democracia', weight: -1.2 }
    ]
  },
  {
    id: 'q18',
    category: 'Pluralismo',
    text: 'Uma democracia saudável exige forte proteção das minorias, mesmo contra maiorias conjunturais.',
    help: 'Pergunta se os direitos das minorias devem estar protegidos contra decisões maioritárias momentâneas.',
    example: 'Exemplo: tribunais ou constituição a travarem decisões populares injustas.',
    effects: [
      { axis: 'democracia', weight: 1.1 },
      { axis: 'liberdades', weight: 0.7 }
    ]
  },
  {
    id: 'q19',
    category: 'Transparência',
    text: 'A administração pública deve ser muito mais transparente, mesmo que isso torne processos mais lentos.',
    help: 'Pergunta se preferes controlo, escrutínio e prestação de contas mesmo com algum custo administrativo.',
    example: 'Exemplo: mais publicação de contratos e decisões.',
    effects: [
      { axis: 'democracia', weight: 0.9 }
    ]
  },
  {
    id: 'q20',
    category: 'Educação',
    text: 'A escola pública deve promover uma visão plural da sociedade em vez de reforçar uma identidade nacional rígida.',
    help: 'Pergunta se a educação deve priorizar diversidade e pensamento crítico.',
    example: 'Exemplo: currículos abertos à pluralidade cultural e social.',
    effects: [
      { axis: 'cultura', weight: 1.3 }
    ]
  },
  {
    id: 'q21',
    category: 'Tradição',
    text: 'As instituições devem proteger tradições sociais mesmo quando isso abranda mudanças culturais rápidas.',
    help: 'Pergunta se a preservação de normas e costumes deve pesar mais do que a mudança social acelerada.',
    example: 'Exemplo: prudência legislativa perante mudanças morais e culturais.',
    effects: [
      { axis: 'cultura', weight: -1.4 }
    ]
  },
  {
    id: 'q22',
    category: 'Religião',
    text: 'A religião pode ter um papel público importante na orientação moral da sociedade.',
    help: 'Pergunta se referências religiosas podem influenciar legitimamente o espaço público.',
    example: 'Exemplo: líderes políticos invocarem princípios religiosos em leis e políticas.',
    effects: [
      { axis: 'cultura', weight: -1.0 }
    ]
  },
  {
    id: 'q23',
    category: 'Diversidade',
    text: 'Uma sociedade mais diversa culturalmente tende a ser mais rica e dinâmica.',
    help: 'Pergunta se vês a diversidade cultural como valor positivo para a sociedade.',
    example: 'Exemplo: mistura de origens, costumes e experiências sociais.',
    effects: [
      { axis: 'cultura', weight: 1.2 },
      { axis: 'internacional', weight: 0.4 }
    ]
  },
  {
    id: 'q24',
    category: 'Costumes',
    text: 'Mudanças rápidas nos costumes e normas sociais costumam fazer mais mal do que bem.',
    help: 'Pergunta se preferes mudança cultural lenta e prudente.',
    example: 'Exemplo: receio de mudanças sociais aceleradas em família, educação ou costumes.',
    effects: [
      { axis: 'cultura', weight: -1.3 }
    ]
  },
  {
    id: 'q25',
    category: 'Identidade nacional',
    text: 'O Estado deve valorizar explicitamente símbolos e narrativas nacionais como forma de coesão social.',
    help: 'Pergunta se o poder público deve promover mais identidade nacional comum.',
    example: 'Exemplo: maior centralidade de símbolos nacionais na escola e nas instituições.',
    effects: [
      { axis: 'cultura', weight: -0.9 },
      { axis: 'internacional', weight: -0.5 }
    ]
  },
  {
    id: 'q26',
    category: 'Igualdade social',
    text: 'O combate a discriminações estruturais justifica políticas públicas específicas de inclusão.',
    help: 'Pergunta se o Estado deve agir ativamente contra desigualdades persistentes entre grupos sociais.',
    example: 'Exemplo: medidas de inclusão para minorias discriminadas.',
    effects: [
      { axis: 'cultura', weight: 1.2 },
      { axis: 'estado', weight: 0.5 }
    ]
  },
  {
    id: 'q27',
    category: 'Integração internacional',
    text: 'O país beneficia quando participa mais em instituições internacionais e aceita partilhar parte da sua soberania.',
    help: 'Pergunta se a cooperação internacional compensa mesmo quando implica aceitar regras comuns.',
    example: 'Exemplo: integração europeia ou compromissos multilaterais.',
    effects: [
      { axis: 'internacional', weight: 1.7 }
    ]
  },
  {
    id: 'q28',
    category: 'Soberania',
    text: 'A soberania nacional deve ter prioridade sobre compromissos externos, mesmo quando isso reduz cooperação internacional.',
    help: 'Pergunta se preferes autonomia nacional forte face a instituições internacionais.',
    example: 'Exemplo: recusar imposições externas para manter decisão soberana.',
    effects: [
      { axis: 'internacional', weight: -1.7 }
    ]
  },
  {
    id: 'q29',
    category: 'Migrações',
    text: 'Uma política migratória humana e relativamente aberta fortalece a sociedade a médio prazo.',
    help: 'Pergunta se a imigração, quando bem integrada, deve ser vista como oportunidade.',
    example: 'Exemplo: facilitar integração laboral e reconhecimento de qualificações.',
    effects: [
      { axis: 'internacional', weight: 1.1 },
      { axis: 'cultura', weight: 0.7 }
    ]
  },
  {
    id: 'q30',
    category: 'Fronteiras',
    text: 'O controlo de fronteiras deve ser muito mais restritivo, mesmo que isso limite entradas legítimas.',
    help: 'Pergunta se preferes fronteiras mais fechadas e regras mais duras de entrada.',
    example: 'Exemplo: políticas muito restritivas de acolhimento e regularização.',
    effects: [
      { axis: 'internacional', weight: -1.2 },
      { axis: 'cultura', weight: -0.5 }
    ]
  },
  {
    id: 'q31',
    category: 'Defesa',
    text: 'O país deve cooperar em estruturas de defesa internacional em vez de apostar numa postura isolada.',
    help: 'Pergunta se valorizas alianças e estruturas de segurança partilhadas.',
    example: 'Exemplo: cooperação militar e estratégica com aliados.',
    effects: [
      { axis: 'internacional', weight: 0.9 }
    ]
  },
  {
    id: 'q32',
    category: 'Comércio',
    text: 'O comércio internacional aberto costuma beneficiar mais o país do que políticas económicas protecionistas.',
    help: 'Pergunta se vês abertura comercial como vantagem geral.',
    example: 'Exemplo: tarifas baixas e integração em mercados externos.',
    effects: [
      { axis: 'internacional', weight: 0.8 },
      { axis: 'economia', weight: -0.6 }
    ]
  },
  {
    id: 'q33',
    category: 'Clima',
    text: 'A transição ecológica deve avançar depressa, mesmo que implique custos económicos de curto prazo.',
    help: 'Pergunta se o combate às alterações climáticas justifica mudanças rápidas com custos imediatos.',
    example: 'Exemplo: metas exigentes para energia e emissões.',
    effects: [
      { axis: 'ecologia', weight: 1.8 }
    ]
  },
  {
    id: 'q34',
    category: 'Energia',
    text: 'O abandono de fontes energéticas poluentes deve ser acelerado por decisão política firme.',
    help: 'Pergunta se o Estado deve forçar mais rapidamente a saída de modelos energéticos poluentes.',
    example: 'Exemplo: encerrar centrais poluentes e acelerar renováveis.',
    effects: [
      { axis: 'ecologia', weight: 1.4 },
      { axis: 'estado', weight: 0.4 }
    ]
  },
  {
    id: 'q35',
    category: 'Produtivismo',
    text: 'As metas ambientais não devem travar projetos económicos relevantes para o crescimento e o emprego.',
    help: 'Pergunta se o crescimento económico deve prevalecer sobre restrições ecológicas exigentes.',
    example: 'Exemplo: flexibilizar metas ambientais para facilitar investimento.',
    effects: [
      { axis: 'ecologia', weight: -1.5 }
    ]
  },
  {
    id: 'q36',
    category: 'Transportes',
    text: 'O investimento público deve privilegiar transporte coletivo e mobilidade sustentável em vez de mobilidade individual.',
    help: 'Pergunta se o Estado deve orientar mobilidade para soluções mais sustentáveis.',
    example: 'Exemplo: mais comboios e metro, menos prioridade ao automóvel.',
    effects: [
      { axis: 'ecologia', weight: 1.1 },
      { axis: 'estado', weight: 0.4 }
    ]
  },
  {
    id: 'q37',
    category: 'Consumo',
    text: 'O consumo individual deve mudar significativamente, e não apenas a tecnologia, para responder à crise climática.',
    help: 'Pergunta se os estilos de vida também têm de mudar, e não só as tecnologias.',
    example: 'Exemplo: reduzir consumo energético, desperdício e padrões intensivos em carbono.',
    effects: [
      { axis: 'ecologia', weight: 1.0 },
      { axis: 'cultura', weight: 0.3 }
    ]
  },
  {
    id: 'q38',
    category: 'Agricultura e território',
    text: 'A proteção da biodiversidade pode justificar fortes restrições à exploração económica de certos territórios.',
    help: 'Pergunta se a conservação ambiental deve limitar usos económicos em áreas sensíveis.',
    example: 'Exemplo: restrições fortes em zonas protegidas.',
    effects: [
      { axis: 'ecologia', weight: 1.1 }
    ]
  },
  {
    id: 'q39',
    category: 'Autarquias e regiões',
    text: 'Mais competências e recursos deviam passar do centro para autarquias e regiões.',
    help: 'Pergunta se o poder deve estar mais perto das populações e menos concentrado no centro.',
    example: 'Exemplo: mais autonomia financeira e política ao nível local e regional.',
    effects: [
      { axis: 'descentralizacao', weight: 1.7 }
    ]
  },
  {
    id: 'q40',
    category: 'Centralização',
    text: 'Um Estado mais centralizado garante maior igualdade territorial e melhor coordenação nacional.',
    help: 'Pergunta se preferes mais poder concentrado no centro para assegurar coerência e unidade.',
    example: 'Exemplo: decisões principais tomadas por ministérios e administração central.',
    effects: [
      { axis: 'descentralizacao', weight: -1.5 }
    ]
  },
  {
    id: 'q41',
    category: 'Comunidade',
    text: 'Decisões políticas devem, sempre que possível, ser tomadas pela escala mais próxima dos cidadãos.',
    help: 'Pergunta se preferes subsidiariedade e decisão ao nível local antes do nacional.',
    example: 'Exemplo: problemas locais resolvidos por municípios ou regiões.',
    effects: [
      { axis: 'descentralizacao', weight: 1.3 },
      { axis: 'democracia', weight: 0.5 }
    ]
  },
  {
    id: 'q42',
    category: 'Administração',
    text: 'A administração central deve manter forte controlo sobre áreas estratégicas em todo o território.',
    help: 'Pergunta se o centro deve conservar poder forte sobre políticas importantes.',
    example: 'Exemplo: educação ou saúde com direção nacional muito concentrada.',
    effects: [
      { axis: 'descentralizacao', weight: -1.2 },
      { axis: 'estado', weight: 0.5 }
    ]
  },
  {
    id: 'q43',
    category: 'Federalismo e regiões',
    text: 'Modelos regionais fortes podem melhorar democracia e desenvolvimento, mesmo em países historicamente centralizados.',
    help: 'Pergunta se vês valor em regiões com poder político forte.',
    example: 'Exemplo: assembleias regionais com mais competências reais.',
    effects: [
      { axis: 'descentralizacao', weight: 1.2 },
      { axis: 'democracia', weight: 0.4 }
    ]
  },
  {
    id: 'q44',
    category: 'Planeamento',
    text: 'O Estado deve ter uma estratégia económica de longo prazo e não limitar-se a corrigir falhas pontuais do mercado.',
    help: 'Pergunta se o Estado deve planear e orientar desenvolvimento económico de forma ativa.',
    example: 'Exemplo: política industrial com objetivos definidos.',
    effects: [
      { axis: 'estado', weight: 1.3 },
      { axis: 'economia', weight: 0.8 }
    ]
  },
  {
    id: 'q45',
    category: 'Liberdade económica',
    text: 'Baixar impostos e reduzir regulação costuma ser a melhor forma de dinamizar a economia.',
    help: 'Pergunta se acreditas que menos Estado económico gera mais crescimento.',
    example: 'Exemplo: simplificação regulatória e descida de impostos sobre empresas.',
    effects: [
      { axis: 'economia', weight: -1.4 },
      { axis: 'estado', weight: -1.1 }
    ]
  },
  {
    id: 'q46',
    category: 'Saúde e bem-estar',
    text: 'O Estado deve assumir responsabilidade ativa no combate à pobreza, mesmo com maior despesa pública.',
    help: 'Pergunta se a proteção social forte justifica mais intervenção e despesa pública.',
    example: 'Exemplo: reforço de prestações, serviços públicos e apoios sociais.',
    effects: [
      { axis: 'estado', weight: 1.5 },
      { axis: 'economia', weight: 1.0 }
    ]
  },
  {
    id: 'q47',
    category: 'Mérito e igualdade',
    text: 'A desigualdade económica é aceitável desde que exista igualdade formal de oportunidades.',
    help: 'Pergunta se consideras a desigualdade menos problemática quando as regras de partida são formalmente iguais.',
    example: 'Exemplo: aceitar grandes diferenças de rendimento desde que todos possam competir.',
    effects: [
      { axis: 'economia', weight: -1.1 }
    ]
  },
  {
    id: 'q48',
    category: 'Cidadania',
    text: 'Uma boa sociedade depende não só de direitos individuais, mas também de deveres cívicos e compromisso com o bem comum.',
    help: 'Pergunta se a vida política exige mais do que soma de escolhas individuais.',
    example: 'Exemplo: valorizar deveres cívicos, participação e responsabilidade coletiva.',
    effects: [
      { axis: 'democracia', weight: 0.8 },
      { axis: 'cultura', weight: -0.3 }
    ]
  },
  {
    id: 'q49',
    category: 'Tecnologia e plataformas',
    text: 'Grandes plataformas digitais devem ser tratadas como infraestruturas de interesse público e mais reguladas.',
    help: 'Pergunta se empresas tecnológicas muito poderosas devem ser fortemente enquadradas pelo poder público.',
    example: 'Exemplo: regras antimonopólio e deveres públicos para plataformas digitais.',
    effects: [
      { axis: 'estado', weight: 1.0 },
      { axis: 'economia', weight: 0.7 },
      { axis: 'liberdades', weight: 0.3 }
    ]
  },
  {
    id: 'q50',
    category: 'Mudança social',
    text: 'Transformações estruturais na economia e na sociedade exigem reformas graduais, não ruturas bruscas.',
    help: 'Pergunta se preferes mudança progressiva e reformista em vez de transformação rápida ou radical.',
    example: 'Exemplo: corrigir o sistema passo a passo em vez de reordená-lo abruptamente.',
    effects: [
      { axis: 'cultura', weight: -0.5 },
      { axis: 'democracia', weight: -0.2 },
      { axis: 'estado', weight: 0.1 }
    ]
  }
];