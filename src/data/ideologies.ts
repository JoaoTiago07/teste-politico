import type { IdeologyProfile } from '../types';

export const ideologies: IdeologyProfile[] = [
  {
    id: 'social-democracia',
    name: 'Social-democracia',
    shortDescription: 'Economia de mercado com Estado social forte, regulação e compromisso democrático.',
    vector: { economia: 6, estado: 7, liberdades: 5, democracia: 6, cultura: 3, internacional: 6, ecologia: 5, descentralizacao: 2 }
  },
  {
    id: 'socialismo-democratico',
    name: 'Socialismo democrático',
    shortDescription: 'Democratização económica mais profunda, forte igualitarismo e compromisso democrático.',
    vector: { economia: 8, estado: 8, liberdades: 5, democracia: 7, cultura: 4, internacional: 5, ecologia: 6, descentralizacao: 3 }
  },
  {
    id: 'socialismo-mercado',
    name: 'Socialismo de mercado',
    shortDescription: 'Procura combinar mercado com propriedade social e coordenação pública.',
    vector: { economia: 7, estado: 6, liberdades: 4, democracia: 6, cultura: 3, internacional: 4, ecologia: 4, descentralizacao: 2 }
  },
  {
    id: 'marxismo',
    name: 'Marxismo',
    shortDescription: 'Crítica estrutural do capitalismo, primazia da igualdade material e transformação sistémica.',
    vector: { economia: 10, estado: 5, liberdades: 1, democracia: 4, cultura: 3, internacional: 8, ecologia: 2, descentralizacao: 0 }
  },
  {
    id: 'marxismo-reformista',
    name: 'Marxismo reformista',
    shortDescription: 'Leitura marxista com aposta maior em via institucional e reformas graduais.',
    vector: { economia: 8, estado: 7, liberdades: 4, democracia: 6, cultura: 3, internacional: 6, ecologia: 4, descentralizacao: 1 }
  },
  {
    id: 'eurocomunismo',
    name: 'Eurocomunismo',
    shortDescription: 'Comunismo parlamentar, pluralista e distanciado do modelo autoritário soviético.',
    vector: { economia: 9, estado: 7, liberdades: 4, democracia: 7, cultura: 4, internacional: 4, ecologia: 4, descentralizacao: 2 }
  },
  {
    id: 'marxismo-leninismo',
    name: 'Marxismo-leninismo',
    shortDescription: 'Centralidade do partido, transformação revolucionária e forte direção política.',
    vector: { economia: 10, estado: 9, liberdades: -4, democracia: -4, cultura: 1, internacional: 6, ecologia: 1, descentralizacao: -6 }
  },
  {
    id: 'trotskismo',
    name: 'Trotskismo',
    shortDescription: 'Internacionalismo revolucionário e crítica tanto ao capitalismo como ao estalinismo.',
    vector: { economia: 10, estado: 6, liberdades: 1, democracia: 3, cultura: 3, internacional: 9, ecologia: 2, descentralizacao: -1 }
  },
  {
    id: 'anarquismo-social',
    name: 'Anarquismo social',
    shortDescription: 'Autogestão, crítica radical da hierarquia e estruturas muito descentralizadas.',
    vector: { economia: 7, estado: -10, liberdades: 8, democracia: 9, cultura: 6, internacional: 6, ecologia: 6, descentralizacao: 10 }
  },
  {
    id: 'mutualismo',
    name: 'Mutualismo',
    shortDescription: 'Associações livres, propriedade pequena e cooperação económica descentralizada.',
    vector: { economia: 5, estado: -7, liberdades: 7, democracia: 8, cultura: 4, internacional: 4, ecologia: 4, descentralizacao: 9 }
  },
  {
    id: 'sindicalismo-revolucionario',
    name: 'Sindicalismo revolucionário',
    shortDescription: 'Centralidade dos sindicatos como veículo de transformação social.',
    vector: { economia: 8, estado: -2, liberdades: 5, democracia: 7, cultura: 3, internacional: 6, ecologia: 3, descentralizacao: 6 }
  },
  {
    id: 'distributismo',
    name: 'Distributismo',
    shortDescription: 'Distribuição ampla da propriedade, comunidade local e crítica ao grande capital.',
    vector: { economia: 4, estado: 2, liberdades: 2, democracia: 4, cultura: -2, internacional: -1, ecologia: 3, descentralizacao: 7 }
  },
  {
    id: 'republicanismo-civico',
    name: 'Republicanismo cívico',
    shortDescription: 'Liberdade como não-dominação, cidadania ativa e virtude pública.',
    vector: { economia: 2, estado: 3, liberdades: 4, democracia: 8, cultura: 1, internacional: 3, ecologia: 2, descentralizacao: 4 }
  },
  {
    id: 'social-republicanismo',
    name: 'Social-republicanismo',
    shortDescription: 'Republicanismo com maior ênfase em igualdade material e bens públicos.',
    vector: { economia: 5, estado: 5, liberdades: 4, democracia: 8, cultura: 2, internacional: 4, ecologia: 4, descentralizacao: 4 }
  },
  {
    id: 'liberalismo-classico',
    name: 'Liberalismo clássico',
    shortDescription: 'Mercado, limitação do Estado, propriedade privada e liberdades civis.',
    vector: { economia: -6, estado: -7, liberdades: 7, democracia: 3, cultura: 1, internacional: 5, ecologia: -2, descentralizacao: 3 }
  },
  {
    id: 'liberalismo-social',
    name: 'Liberalismo social',
    shortDescription: 'Liberdades civis amplas com algum papel redistributivo e social do Estado.',
    vector: { economia: -1, estado: 1, liberdades: 8, democracia: 5, cultura: 5, internacional: 6, ecologia: 2, descentralizacao: 2 }
  },
  {
    id: 'progressismo-liberal',
    name: 'Progressismo liberal',
    shortDescription: 'Grande ênfase em direitos civis, diversidade e economia relativamente aberta.',
    vector: { economia: -2, estado: 0, liberdades: 9, democracia: 5, cultura: 8, internacional: 7, ecologia: 3, descentralizacao: 2 }
  },
  {
    id: 'neoliberalismo',
    name: 'Neoliberalismo',
    shortDescription: 'Prioridade a mercado, concorrência, privatização e contenção do Estado.',
    vector: { economia: -8, estado: -7, liberdades: 4, democracia: 1, cultura: 1, internacional: 6, ecologia: -4, descentralizacao: 2 }
  },
  {
    id: 'ordoliberalismo',
    name: 'Ordoliberalismo',
    shortDescription: 'Mercado competitivo enquadrado por regras fortes e ordem económica estável.',
    vector: { economia: -3, estado: 0, liberdades: 4, democracia: 3, cultura: -1, internacional: 4, ecologia: 0, descentralizacao: 1 }
  },
  {
    id: 'libertarianismo',
    name: 'Libertarianismo',
    shortDescription: 'Estado mínimo, autonomia individual máxima e desconfiança do poder público.',
    vector: { economia: -9, estado: -10, liberdades: 9, democracia: 1, cultura: 3, internacional: 2, ecologia: -4, descentralizacao: 5 }
  },
  {
    id: 'minarquismo',
    name: 'Minarquismo',
    shortDescription: 'Estado reduzido ao essencial: segurança, justiça e pouco mais.',
    vector: { economia: -8, estado: -9, liberdades: 8, democracia: 2, cultura: 2, internacional: 1, ecologia: -3, descentralizacao: 4 }
  },
  {
    id: 'social-libertarianismo',
    name: 'Social-libertarianismo',
    shortDescription: 'Liberdades civis máximas com sensibilidade anti-oligárquica e comunitária.',
    vector: { economia: 3, estado: -3, liberdades: 9, democracia: 7, cultura: 7, internacional: 5, ecologia: 5, descentralizacao: 6 }
  },
  {
    id: 'conservadorismo',
    name: 'Conservadorismo',
    shortDescription: 'Ordem, tradição, prudência institucional e mudança gradual.',
    vector: { economia: -2, estado: 1, liberdades: -3, democracia: -1, cultura: -8, internacional: -2, ecologia: -1, descentralizacao: -1 }
  },
  {
    id: 'conservadorismo-liberal',
    name: 'Conservadorismo liberal',
    shortDescription: 'Mercado relativamente livre combinado com prudência moral e institucional.',
    vector: { economia: -5, estado: -2, liberdades: 2, democracia: 1, cultura: -7, internacional: 1, ecologia: -2, descentralizacao: 1 }
  },
  {
    id: 'democracia-crista',
    name: 'Democracia-cristã',
    shortDescription: 'Equilíbrio entre mercado, solidariedade social, comunidade e valores morais.',
    vector: { economia: 2, estado: 3, liberdades: -1, democracia: 4, cultura: -4, internacional: 3, ecologia: 2, descentralizacao: 4 }
  },
  {
    id: 'humanismo-cristao',
    name: 'Humanismo cristão',
    shortDescription: 'Ênfase na dignidade humana, comunidade e bem comum com base cristã.',
    vector: { economia: 3, estado: 3, liberdades: 0, democracia: 4, cultura: -3, internacional: 3, ecologia: 3, descentralizacao: 4 }
  },
  {
    id: 'gaullismo',
    name: 'Gaullismo',
    shortDescription: 'Autoridade republicana, soberania nacional e Estado estratégico.',
    vector: { economia: 1, estado: 6, liberdades: -1, democracia: 0, cultura: -4, internacional: -3, ecologia: 0, descentralizacao: -3 }
  },
  {
    id: 'nacional-conservadorismo',
    name: 'Nacional-conservadorismo',
    shortDescription: 'Soberania, ordem, fronteiras e valores tradicionais.',
    vector: { economia: -1, estado: 2, liberdades: -5, democracia: -3, cultura: -9, internacional: -8, ecologia: -3, descentralizacao: -2 }
  },
  {
    id: 'nacional-liberalismo',
    name: 'Nacional-liberalismo',
    shortDescription: 'Mercado relativamente aberto com forte identidade nacional e soberania.',
    vector: { economia: -5, estado: -2, liberdades: 1, democracia: 1, cultura: -6, internacional: -5, ecologia: -2, descentralizacao: 0 }
  },
  {
    id: 'soberanismo-democratico',
    name: 'Soberanismo democrático',
    shortDescription: 'Defesa da autodeterminação nacional sem rejeição total da democracia liberal.',
    vector: { economia: 1, estado: 3, liberdades: 0, democracia: 4, cultura: -3, internacional: -6, ecologia: 0, descentralizacao: -1 }
  },
  {
    id: 'populismo-esquerda',
    name: 'Populismo de esquerda',
    shortDescription: 'Apelo ao povo contra elites económicas, com forte tónica redistributiva.',
    vector: { economia: 7, estado: 5, liberdades: 3, democracia: 2, cultura: 3, internacional: 1, ecologia: 3, descentralizacao: 2 }
  },
  {
    id: 'populismo-direita',
    name: 'Populismo de direita',
    shortDescription: 'Apelo ao povo contra elites com soberanismo, ordem e conservadorismo cultural.',
    vector: { economia: -1, estado: 2, liberdades: -4, democracia: -1, cultura: -8, internacional: -7, ecologia: -3, descentralizacao: 1 }
  },
  {
    id: 'ecologismo',
    name: 'Ecologismo',
    shortDescription: 'Sustentabilidade, justiça intergeracional e limites ecológicos no centro da política.',
    vector: { economia: 4, estado: 4, liberdades: 5, democracia: 6, cultura: 4, internacional: 7, ecologia: 10, descentralizacao: 5 }
  },
  {
    id: 'ecosocialismo',
    name: 'Eco-socialismo',
    shortDescription: 'Articula transformação ecológica profunda com crítica estrutural ao capitalismo.',
    vector: { economia: 9, estado: 7, liberdades: 5, democracia: 7, cultura: 5, internacional: 7, ecologia: 10, descentralizacao: 4 }
  },
  {
    id: 'municipalismo',
    name: 'Municipalismo',
    shortDescription: 'Aposta forte em comunidade local, democracia próxima e poder territorial.',
    vector: { economia: 2, estado: -1, liberdades: 4, democracia: 7, cultura: 2, internacional: 2, ecologia: 4, descentralizacao: 9 }
  },
  {
    id: 'federalismo',
    name: 'Federalismo',
    shortDescription: 'Distribuição territorial do poder com forte autonomia regional e cooperação institucional.',
    vector: { economia: 1, estado: 1, liberdades: 4, democracia: 6, cultura: 2, internacional: 5, ecologia: 3, descentralizacao: 8 }
  },
  {
    id: 'comunitarismo',
    name: 'Comunitarismo',
    shortDescription: 'Valoriza laços sociais, pertença e bem comum acima do individualismo estrito.',
    vector: { economia: 2, estado: 3, liberdades: -1, democracia: 4, cultura: -1, internacional: 1, ecologia: 2, descentralizacao: 4 }
  },
  {
    id: 'tecnocracia-centrista',
    name: 'Tecnocracia centrista',
    shortDescription: 'Confiança elevada em especialistas, gestão e compromisso institucional.',
    vector: { economia: 0, estado: 3, liberdades: 1, democracia: -3, cultura: 0, internacional: 5, ecologia: 1, descentralizacao: -1 }
  },
  {
    id: 'social-capitalismo-renano',
    name: 'Capitalismo renano',
    shortDescription: 'Economia de mercado regulada, compromisso social e coordenação institucional forte.',
    vector: { economia: 3, estado: 4, liberdades: 3, democracia: 4, cultura: -1, internacional: 5, ecologia: 2, descentralizacao: 2 }
  },
  {
    id: 'terceira-via',
    name: 'Terceira via',
    shortDescription: 'Centro reformista que tenta conciliar mercado, inclusão social e modernização.',
    vector: { economia: 1, estado: 2, liberdades: 4, democracia: 3, cultura: 4, internacional: 7, ecologia: 1, descentralizacao: 1 }
  }
];