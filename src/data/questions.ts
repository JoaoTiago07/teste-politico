import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'Economia',
    text: 'Impostos progressivos mais altos sobre grandes fortunas podem ser justificados para reforçar a redistribuição.',
    help: 'Isto pergunta se pessoas muito ricas devem pagar proporcionalmente mais para financiar políticas públicas e reduzir desigualdades.',
    example: 'Exemplo: taxas mais elevadas para patrimónios muito elevados ou heranças muito grandes.',
    effects: [
      { axis: 'economia', weight: 1.5 },
      { axis: 'estado', weight: 0.7 }
    ]
  },
  {
    id: 'q2',
    category: 'Economia',
    text: 'O Estado deve poder ter participação acionista em setores estratégicos como energia, transportes ou comunicações.',
    help: 'Ou seja: o Estado pode ser dono de uma parte de empresas importantes para garantir controlo público em áreas essenciais.',
    example: 'Exemplo: o Estado deter uma posição relevante numa empresa energética ou numa infraestrutura crítica.',
    effects: [
      { axis: 'estado', weight: 1.5 },
      { axis: 'economia', weight: 1.0 }
    ]
  },
  {
    id: 'q3',
    category: 'Mercado e regulação',
    text: 'Mesmo em setores essenciais, o mercado deve funcionar com o mínimo possível de intervenção pública.',
    help: 'Pergunta se, mesmo em áreas como energia, habitação ou saúde, o Estado deve interferir pouco.',
    example: 'Exemplo: deixar preços e oferta ajustarem-se quase inteiramente pela lógica de mercado.',
    effects: [
      { axis: 'economia', weight: -1.4 },
      { axis: 'estado', weight: -1.2 }
    ]
  },
  {
    id: 'q4',
    category: 'Liberdades civis',
    text: 'A proteção da privacidade deve prevalecer mesmo que isso limite certos mecanismos de vigilância estatal.',
    help: 'Pergunta se o Estado deve ter limites fortes quando quer recolher dados, monitorizar pessoas ou expandir vigilância.',
    example: 'Exemplo: câmaras, rastreamento digital ou recolha massiva de metadados.',
    effects: [
      { axis: 'liberdades', weight: 1.6 }
    ]
  },
  {
    id: 'q5',
    category: 'Sociedade',
    text: 'O Estado deve reconhecer e proteger novas formas de família e identidade sem impor uma moral tradicional única.',
    help: 'Pergunta se o poder político deve adaptar-se a sociedades mais diversas em vez de defender uma única norma cultural.',
    example: 'Exemplo: direitos de casais do mesmo sexo, reconhecimento de pluralidade familiar e proteção contra discriminação.',
    effects: [
      { axis: 'cultura', weight: 1.5 },
      { axis: 'liberdades', weight: 0.7 }
    ]
  },
  {
    id: 'q6',
    category: 'Instituições',
    text: 'Referendos e mecanismos de participação cidadã deviam ser usados com mais frequência.',
    help: 'Pergunta se as pessoas devem intervir mais diretamente nas decisões políticas, e não só através de eleições periódicas.',
    example: 'Exemplo: referendos locais, orçamentos participativos e consultas públicas mais vinculativas.',
    effects: [
      { axis: 'democracia', weight: 1.5 }
    ]
  },
  {
    id: 'q7',
    category: 'Instituições',
    text: 'Em momentos de crise, um executivo com poderes mais concentrados pode ser preferível a processos políticos mais lentos.',
    help: 'Pergunta se a eficácia e rapidez justificam concentrar mais poder no governo em tempos difíceis.',
    example: 'Exemplo: reduzir o espaço de deliberação parlamentar para decidir mais depressa.',
    effects: [
      { axis: 'democracia', weight: -1.5 },
      { axis: 'descentralizacao', weight: -0.5 }
    ]
  },
  {
    id: 'q8',
    category: 'Cultura',
    text: 'A escola pública deve promover uma visão plural da sociedade em vez de reforçar uma identidade nacional rígida.',
    help: 'Pergunta se a educação deve dar prioridade à diversidade e ao pensamento crítico, e não a uma identidade cultural fechada.',
    example: 'Exemplo: currículos mais abertos à diversidade social, cultural e histórica.',
    effects: [
      { axis: 'cultura', weight: 1.3 }
    ]
  },
  {
    id: 'q9',
    category: 'Internacional',
    text: 'O país beneficia quando participa mais em instituições internacionais e aceita partilhar parte da sua soberania.',
    help: 'Pergunta se a cooperação internacional compensa mesmo quando implica aceitar regras comuns.',
    example: 'Exemplo: integração europeia, tratados multilaterais ou tribunais internacionais.',
    effects: [
      { axis: 'internacional', weight: 1.6 }
    ]
  },
  {
    id: 'q10',
    category: 'Migrações e fronteiras',
    text: 'Uma política migratória humana e relativamente aberta fortalece a sociedade a médio prazo.',
    help: 'Pergunta se a imigração, quando bem regulada e integrada, deve ser vista como oportunidade e não apenas como ameaça.',
    example: 'Exemplo: facilitar integração laboral, reconhecimento de qualificações e acesso gradual a direitos.',
    effects: [
      { axis: 'internacional', weight: 1.0 },
      { axis: 'cultura', weight: 0.8 }
    ]
  },
  {
    id: 'q11',
    category: 'Ecologia',
    text: 'A transição ecológica deve avançar depressa, mesmo que implique custos económicos de curto prazo.',
    help: 'Pergunta se o combate às alterações climáticas justifica mudanças rápidas, mesmo que custem mais no imediato.',
    example: 'Exemplo: fechar fontes poluentes mais cedo, acelerar renováveis e impor metas exigentes.',
    effects: [
      { axis: 'ecologia', weight: 1.8 }
    ]
  },
  {
    id: 'q12',
    category: 'Território',
    text: 'Mais competências e recursos deviam passar do centro para autarquias e regiões.',
    help: 'Pergunta se o poder deve estar mais perto das populações e menos concentrado no centro do país.',
    example: 'Exemplo: dar mais autonomia financeira e política ao nível local e regional.',
    effects: [
      { axis: 'descentralizacao', weight: 1.6 }
    ]
  }
];