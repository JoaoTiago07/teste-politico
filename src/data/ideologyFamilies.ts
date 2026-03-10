export interface IdeologyFamilyDefinition {
  id: string;
  name: string;
  description: string;
  members: string[];
}

export const ideologyFamilies: IdeologyFamilyDefinition[] = [
  {
    id: 'socialistas',
    name: 'Socialistas e pós-capitalistas',
    description: 'Correntes que procuram transformar profundamente as relações económicas e o poder do capital.',
    members: [
      'socialismo-democratico',
      'socialismo-mercado',
      'marxismo',
      'marxismo-reformista',
      'eurocomunismo',
      'marxismo-leninismo',
      'trotskismo',
      'sindicalismo-revolucionario'
    ]
  },
  {
    id: 'social-democratas',
    name: 'Social-democratas e reformistas',
    description: 'Correntes que procuram combinar mercado, democracia e forte correção social.',
    members: [
      'social-democracia',
      'social-capitalismo-renano',
      'terceira-via'
    ]
  },
  {
    id: 'liberais',
    name: 'Liberais',
    description: 'Correntes que valorizam fortemente mercado, direitos individuais e limitação do poder público.',
    members: [
      'liberalismo-classico',
      'liberalismo-social',
      'progressismo-liberal',
      'neoliberalismo',
      'ordoliberalismo',
      'conservadorismo-liberal',
      'nacional-liberalismo'
    ]
  },
  {
    id: 'libertarios',
    name: 'Libertários e anti-estatistas',
    description: 'Correntes que desconfiam profundamente do Estado e privilegiam autonomia individual ou autogestão.',
    members: [
      'libertarianismo',
      'minarquismo',
      'social-libertarianismo',
      'anarquismo-social',
      'mutualismo'
    ]
  },
  {
    id: 'conservadores',
    name: 'Conservadores e cristãos-sociais',
    description: 'Correntes orientadas por tradição, prudência institucional, comunidade e ordem social.',
    members: [
      'conservadorismo',
      'democracia-crista',
      'humanismo-cristao',
      'gaullismo'
    ]
  },
  {
    id: 'soberanistas',
    name: 'Soberanistas, nacionais e populistas',
    description: 'Correntes que valorizam fortemente soberania, identidade nacional e reserva perante integração externa.',
    members: [
      'nacional-conservadorismo',
      'soberanismo-democratico',
      'populismo-esquerda',
      'populismo-direita'
    ]
  },
  {
    id: 'ecologistas',
    name: 'Ecologistas',
    description: 'Correntes que colocam a transição ecológica e os limites ambientais no centro da política.',
    members: [
      'ecologismo',
      'ecosocialismo'
    ]
  },
  {
    id: 'republicanos',
    name: 'Republicanos, comunitaristas e do bem comum',
    description: 'Correntes que sublinham cidadania ativa, virtude pública, laços sociais e bem comum.',
    members: [
      'republicanismo-civico',
      'social-republicanismo',
      'comunitarismo',
      'distributismo'
    ]
  },
  {
    id: 'territoriais',
    name: 'Municipalistas e federalistas',
    description: 'Correntes que valorizam distribuição territorial do poder e maior autonomia local ou regional.',
    members: [
      'municipalismo',
      'federalismo'
    ]
  },
  {
    id: 'tecnocraticas',
    name: 'Tecnocráticas e centristas',
    description: 'Correntes mais centradas em gestão, compromisso institucional e confiança em especialistas.',
    members: [
      'tecnocracia-centrista'
    ]
  }
];