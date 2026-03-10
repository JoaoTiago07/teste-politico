export interface MethodologySection {
  title: string;
  items: string[];
}

export const methodologySections: MethodologySection[] = [
  {
    title: 'O que este teste mede',
    items: [
      'O teste trabalha com vários eixos independentes em vez de reduzir tudo a esquerda vs direita.',
      'Cada pergunta afeta um ou mais eixos políticos, com pesos diferentes.',
      'O resultado final é um vetor político próprio, não apenas um rótulo único.'
    ]
  },
  {
    title: 'Como são calculados os resultados',
    items: [
      'Cada resposta é convertida numa escala entre discordância forte e concordância forte.',
      'As respostas são agregadas por eixo e normalizadas para uma escala comum.',
      'Depois, o teu vetor é comparado com perfis ideológicos e figuras históricas.'
    ]
  },
  {
    title: 'Como funciona a correspondência',
    items: [
      'A semelhança não depende apenas da distância numérica.',
      'O sistema avalia também se a direção geral das tuas posições coincide com a dos perfis comparados.',
      'As famílias ideológicas são calculadas a partir das ideologias mais próximas dentro de cada tradição.'
    ]
  },
  {
    title: 'Coerência interna',
    items: [
      'A coerência interna mede tensões entre respostas que costumam apontar em direções políticas opostas.',
      'Uma coerência mais baixa não significa erro; pode significar perfil misto ou visão política híbrida.',
      'O objetivo desta métrica é acrescentar nuance interpretativa, não punir respostas complexas.'
    ]
  },
  {
    title: 'Modo rápido e modo completo',
    items: [
      'O modo rápido usa um conjunto mais curto de perguntas essenciais e dá um retrato inicial.',
      'O modo completo usa todo o questionário disponível e produz um perfil mais robusto.',
      'Os dois modos usam a mesma lógica de cálculo, mudando apenas a profundidade da amostra.'
    ]
  },
  {
    title: 'Limites do teste',
    items: [
      'Nenhum teste político substitui estudo, contexto histórico e reflexão filosófica.',
      'As ideologias e figuras históricas aqui usadas são aproximações analíticas.',
      'Os perfis servem para comparação interpretativa, não como classificação absoluta.'
    ]
  }
];