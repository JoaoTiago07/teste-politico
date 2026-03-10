import type { IdeologyProfile } from '../types';

export const ideologies: IdeologyProfile[] = [
  {
    id: 'social-democracia',
    name: 'Social-democracia',
    shortDescription: 'Combina economia de mercado com Estado social forte, regulação e compromisso democrático.',
    vector: {
      economia: 6,
      estado: 7,
      liberdades: 5,
      democracia: 6,
      cultura: 3,
      internacional: 6,
      ecologia: 5,
      descentralizacao: 2
    }
  },
  {
    id: 'socialismo-democratico',
    name: 'Socialismo democrático',
    shortDescription: 'Defende democratização económica mais profunda, maior propriedade social e forte igualitarismo.',
    vector: {
      economia: 8,
      estado: 8,
      liberdades: 5,
      democracia: 7,
      cultura: 4,
      internacional: 5,
      ecologia: 6,
      descentralizacao: 3
    }
  },
  {
    id: 'liberalismo-classico',
    name: 'Liberalismo clássico',
    shortDescription: 'Valoriza mercado, limitação do Estado, Estado de direito e liberdades individuais.',
    vector: {
      economia: -6,
      estado: -7,
      liberdades: 7,
      democracia: 3,
      cultura: 1,
      internacional: 5,
      ecologia: -2,
      descentralizacao: 3
    }
  },
  {
    id: 'liberalismo-social',
    name: 'Liberalismo social',
    shortDescription: 'Combina liberdades civis e mercado com algum papel social do Estado.',
    vector: {
      economia: -1,
      estado: 1,
      liberdades: 8,
      democracia: 5,
      cultura: 5,
      internacional: 6,
      ecologia: 2,
      descentralizacao: 2
    }
  },
  {
    id: 'conservadorismo',
    name: 'Conservadorismo',
    shortDescription: 'Valoriza ordem, tradição, prudência institucional e mudança gradual.',
    vector: {
      economia: -2,
      estado: 1,
      liberdades: -3,
      democracia: -1,
      cultura: -8,
      internacional: -2,
      ecologia: -1,
      descentralizacao: -1
    }
  },
  {
    id: 'democracia-crista',
    name: 'Democracia-cristã',
    shortDescription: 'Procura equilíbrio entre mercado, solidariedade social, comunidade e valores morais.',
    vector: {
      economia: 2,
      estado: 3,
      liberdades: -1,
      democracia: 4,
      cultura: -4,
      internacional: 3,
      ecologia: 2,
      descentralizacao: 4
    }
  },
  {
    id: 'libertarianismo',
    name: 'Libertarianismo',
    shortDescription: 'Defende Estado mínimo, máxima autonomia individual e forte desconfiança do poder público.',
    vector: {
      economia: -9,
      estado: -10,
      liberdades: 9,
      democracia: 1,
      cultura: 3,
      internacional: 2,
      ecologia: -4,
      descentralizacao: 5
    }
  },
  {
    id: 'ecologismo',
    name: 'Ecologismo',
    shortDescription: 'Põe sustentabilidade, justiça intergeracional e limites ecológicos no centro da política.',
    vector: {
      economia: 4,
      estado: 4,
      liberdades: 5,
      democracia: 6,
      cultura: 4,
      internacional: 7,
      ecologia: 10,
      descentralizacao: 5
    }
  },
  {
    id: 'republicanismo-civico',
    name: 'Republicanismo cívico',
    shortDescription: 'Valoriza cidadania ativa, virtude pública, participação e liberdade como não-dominação.',
    vector: {
      economia: 2,
      estado: 3,
      liberdades: 4,
      democracia: 8,
      cultura: 1,
      internacional: 3,
      ecologia: 2,
      descentralizacao: 4
    }
  },
  {
    id: 'ordoliberalismo',
    name: 'Ordoliberalismo',
    shortDescription: 'Defende mercado competitivo enquadrado por regras fortes e Estado garante da ordem económica.',
    vector: {
      economia: -3,
      estado: 0,
      liberdades: 4,
      democracia: 3,
      cultura: -1,
      internacional: 4,
      ecologia: 0,
      descentralizacao: 1
    }
  },
  {
    id: 'nacional-conservadorismo',
    name: 'Nacional-conservadorismo',
    shortDescription: 'Combina ênfase na soberania nacional, ordem, fronteiras e valores tradicionais.',
    vector: {
      economia: -1,
      estado: 2,
      liberdades: -5,
      democracia: -3,
      cultura: -9,
      internacional: -8,
      ecologia: -3,
      descentralizacao: -2
    }
  },
  {
    id: 'anarquismo-social',
    name: 'Anarquismo social',
    shortDescription: 'Defende autogestão, crítica radical da hierarquia e estruturas descentralizadas.',
    vector: {
      economia: 7,
      estado: -10,
      liberdades: 8,
      democracia: 9,
      cultura: 6,
      internacional: 6,
      ecologia: 6,
      descentralizacao: 10
    }
  }
];