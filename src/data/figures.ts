import type { FigureProfile } from '../types';

export const figures: FigureProfile[] = [
  {
    id: 'rawls',
    name: 'John Rawls',
    role: 'Filósofo político',
    era: 'Século XX',
    vector: { economia: 4, estado: 4, liberdades: 7, democracia: 6, cultura: 3, internacional: 4, ecologia: 1, descentralizacao: 1 }
  },
  {
    id: 'hayek',
    name: 'Friedrich Hayek',
    role: 'Economista e filósofo político',
    era: 'Século XX',
    vector: { economia: -8, estado: -8, liberdades: 6, democracia: 2, cultura: -1, internacional: 3, ecologia: -4, descentralizacao: 2 }
  },
  {
    id: 'marx',
    name: 'Karl Marx',
    role: 'Filósofo e economista',
    era: 'Século XIX',
    vector: { economia: 10, estado: 4, liberdades: 1, democracia: 4, cultura: 2, internacional: 8, ecologia: 0, descentralizacao: 1 }
  },
  {
    id: 'burke',
    name: 'Edmund Burke',
    role: 'Pensador e parlamentar',
    era: 'Século XVIII',
    vector: { economia: -1, estado: 1, liberdades: -1, democracia: -2, cultura: -9, internacional: -1, ecologia: 0, descentralizacao: 1 }
  },
  {
    id: 'keynes',
    name: 'John Maynard Keynes',
    role: 'Economista',
    era: 'Século XX',
    vector: { economia: 5, estado: 6, liberdades: 3, democracia: 3, cultura: 0, internacional: 5, ecologia: 0, descentralizacao: 0 }
  },
  {
    id: 'palme',
    name: 'Olof Palme',
    role: 'Líder social-democrata',
    era: 'Século XX',
    vector: { economia: 7, estado: 7, liberdades: 6, democracia: 6, cultura: 5, internacional: 8, ecologia: 4, descentralizacao: 2 }
  },
  {
    id: 'roosevelt',
    name: 'Franklin D. Roosevelt',
    role: 'Presidente dos EUA',
    era: 'Século XX',
    vector: { economia: 6, estado: 7, liberdades: 2, democracia: 4, cultura: 0, internacional: 5, ecologia: 1, descentralizacao: -1 }
  },
  {
    id: 'thatcher',
    name: 'Margaret Thatcher',
    role: 'Primeira-ministra',
    era: 'Século XX',
    vector: { economia: -8, estado: -5, liberdades: 2, democracia: -1, cultura: -6, internacional: -2, ecologia: -3, descentralizacao: -1 }
  },
  {
    id: 'mandela',
    name: 'Nelson Mandela',
    role: 'Líder político',
    era: 'Século XX',
    vector: { economia: 3, estado: 3, liberdades: 8, democracia: 8, cultura: 6, internacional: 7, ecologia: 1, descentralizacao: 2 }
  },
  {
    id: 'friedman',
    name: 'Milton Friedman',
    role: 'Economista',
    era: 'Século XX',
    vector: { economia: -9, estado: -8, liberdades: 5, democracia: 1, cultura: -1, internacional: 4, ecologia: -5, descentralizacao: 3 }
  },
  {
    id: 'tocqueville',
    name: 'Alexis de Tocqueville',
    role: 'Pensador político',
    era: 'Século XIX',
    vector: { economia: -2, estado: -1, liberdades: 5, democracia: 5, cultura: -2, internacional: 1, ecologia: 0, descentralizacao: 5 }
  },
  {
    id: 'luxemburg',
    name: 'Rosa Luxemburg',
    role: 'Teórica socialista',
    era: 'Século XIX-XX',
    vector: { economia: 9, estado: 3, liberdades: 5, democracia: 8, cultura: 4, internacional: 8, ecologia: 1, descentralizacao: 4 }
  },
  {
    id: 'sandel',
    name: 'Michael Sandel',
    role: 'Filósofo político',
    era: 'Século XX-XXI',
    vector: { economia: 2, estado: 2, liberdades: 1, democracia: 5, cultura: -1, internacional: 2, ecologia: 1, descentralizacao: 3 }
  },
  {
    id: 'mill',
    name: 'John Stuart Mill',
    role: 'Filósofo liberal',
    era: 'Século XIX',
    vector: { economia: -4, estado: -3, liberdades: 9, democracia: 4, cultura: 4, internacional: 4, ecologia: 0, descentralizacao: 2 }
  },
  {
    id: 'locke',
    name: 'John Locke',
    role: 'Filósofo político',
    era: 'Século XVII',
    vector: { economia: -5, estado: -4, liberdades: 8, democracia: 3, cultura: 0, internacional: 1, ecologia: -1, descentralizacao: 2 }
  },
  {
    id: 'hobbes',
    name: 'Thomas Hobbes',
    role: 'Filósofo político',
    era: 'Século XVII',
    vector: { economia: 0, estado: 8, liberdades: -8, democracia: -8, cultura: -3, internacional: 0, ecologia: 0, descentralizacao: -5 }
  },
  {
    id: 'rousseau',
    name: 'Jean-Jacques Rousseau',
    role: 'Filósofo político',
    era: 'Século XVIII',
    vector: { economia: 2, estado: 3, liberdades: 1, democracia: 7, cultura: -1, internacional: 1, ecologia: 0, descentralizacao: 2 }
  },
  {
    id: 'nozick',
    name: 'Robert Nozick',
    role: 'Filósofo político',
    era: 'Século XX',
    vector: { economia: -10, estado: -10, liberdades: 8, democracia: 1, cultura: 2, internacional: 1, ecologia: -5, descentralizacao: 4 }
  },
  {
    id: 'amartya-sen',
    name: 'Amartya Sen',
    role: 'Economista e filósofo',
    era: 'Século XX-XXI',
    vector: { economia: 5, estado: 4, liberdades: 7, democracia: 7, cultura: 4, internacional: 6, ecologia: 2, descentralizacao: 2 }
  },
  {
    id: 'bernstein',
    name: 'Eduard Bernstein',
    role: 'Teórico social-democrata',
    era: 'Século XIX-XX',
    vector: { economia: 6, estado: 5, liberdades: 4, democracia: 7, cultura: 2, internacional: 4, ecologia: 1, descentralizacao: 1 }
  },
  {
    id: 'brandt',
    name: 'Willy Brandt',
    role: 'Chanceler social-democrata',
    era: 'Século XX',
    vector: { economia: 6, estado: 6, liberdades: 6, democracia: 6, cultura: 3, internacional: 8, ecologia: 3, descentralizacao: 2 }
  },
  {
    id: 'attlee',
    name: 'Clement Attlee',
    role: 'Primeiro-ministro trabalhista',
    era: 'Século XX',
    vector: { economia: 7, estado: 7, liberdades: 3, democracia: 5, cultura: 1, internacional: 3, ecologia: 1, descentralizacao: 0 }
  },
  {
    id: 'helmut-schmidt',
    name: 'Helmut Schmidt',
    role: 'Chanceler social-democrata',
    era: 'Século XX',
    vector: { economia: 4, estado: 5, liberdades: 3, democracia: 4, cultura: -1, internacional: 5, ecologia: 0, descentralizacao: 0 }
  },
  {
    id: 'giddens',
    name: 'Anthony Giddens',
    role: 'Sociólogo e teórico político',
    era: 'Século XX-XXI',
    vector: { economia: 1, estado: 2, liberdades: 4, democracia: 3, cultura: 4, internacional: 7, ecologia: 1, descentralizacao: 1 }
  },
  {
    id: 'adenauer',
    name: 'Konrad Adenauer',
    role: 'Chanceler democrata-cristão',
    era: 'Século XX',
    vector: { economia: 1, estado: 3, liberdades: 0, democracia: 4, cultura: -5, internacional: 4, ecologia: 0, descentralizacao: 1 }
  },
  {
    id: 'de-gaulle',
    name: 'Charles de Gaulle',
    role: 'Líder político',
    era: 'Século XX',
    vector: { economia: 1, estado: 7, liberdades: -2, democracia: -1, cultura: -4, internacional: -4, ecologia: 0, descentralizacao: -3 }
  },
  {
    id: 'mazzini',
    name: 'Giuseppe Mazzini',
    role: 'Republicano e nacionalista democrático',
    era: 'Século XIX',
    vector: { economia: 2, estado: 3, liberdades: 2, democracia: 6, cultura: -1, internacional: -1, ecologia: 0, descentralizacao: 2 }
  },
  {
    id: 'gramsci',
    name: 'Antonio Gramsci',
    role: 'Teórico marxista',
    era: 'Século XX',
    vector: { economia: 9, estado: 5, liberdades: 2, democracia: 5, cultura: 5, internacional: 6, ecologia: 1, descentralizacao: 1 }
  },
  {
    id: 'lenin',
    name: 'Vladimir Lenin',
    role: 'Líder revolucionário',
    era: 'Século XX',
    vector: { economia: 10, estado: 10, liberdades: -6, democracia: -7, cultura: 0, internacional: 7, ecologia: 0, descentralizacao: -8 }
  },
  {
    id: 'trotsky',
    name: 'Leon Trotsky',
    role: 'Revolucionário marxista',
    era: 'Século XX',
    vector: { economia: 10, estado: 7, liberdades: -2, democracia: -2, cultura: 1, internacional: 10, ecologia: 0, descentralizacao: -3 }
  },
  {
    id: 'bakunin',
    name: 'Mikhail Bakunin',
    role: 'Teórico anarquista',
    era: 'Século XIX',
    vector: { economia: 7, estado: -10, liberdades: 7, democracia: 7, cultura: 2, internacional: 6, ecologia: 1, descentralizacao: 10 }
  },
  {
    id: 'kropotkin',
    name: 'Piotr Kropotkin',
    role: 'Teórico anarquista',
    era: 'Século XIX-XX',
    vector: { economia: 8, estado: -9, liberdades: 7, democracia: 8, cultura: 3, internacional: 6, ecologia: 4, descentralizacao: 10 }
  },
  {
    id: 'proudhon',
    name: 'Pierre-Joseph Proudhon',
    role: 'Teórico mutualista',
    era: 'Século XIX',
    vector: { economia: 5, estado: -8, liberdades: 6, democracia: 7, cultura: 0, internacional: 2, ecologia: 1, descentralizacao: 9 }
  },
  {
    id: 'gandhi',
    name: 'Mahatma Gandhi',
    role: 'Líder político e moral',
    era: 'Século XX',
    vector: { economia: 2, estado: -1, liberdades: 7, democracia: 6, cultura: -1, internacional: 5, ecologia: 5, descentralizacao: 7 }
  },
  {
    id: 'nehru',
    name: 'Jawaharlal Nehru',
    role: 'Primeiro-ministro',
    era: 'Século XX',
    vector: { economia: 5, estado: 6, liberdades: 4, democracia: 5, cultura: 2, internacional: 7, ecologia: 1, descentralizacao: 1 }
  },
  {
    id: 'mitterrand',
    name: 'François Mitterrand',
    role: 'Presidente socialista',
    era: 'Século XX',
    vector: { economia: 6, estado: 6, liberdades: 5, democracia: 5, cultura: 4, internacional: 5, ecologia: 2, descentralizacao: 0 }
  },
  {
    id: 'beveridge',
    name: 'William Beveridge',
    role: 'Economista e reformador social',
    era: 'Século XX',
    vector: { economia: 5, estado: 7, liberdades: 3, democracia: 4, cultura: 0, internacional: 3, ecologia: 0, descentralizacao: 0 }
  },
  {
    id: 'polanyi',
    name: 'Karl Polanyi',
    role: 'Historiador económico',
    era: 'Século XX',
    vector: { economia: 7, estado: 6, liberdades: 3, democracia: 5, cultura: 2, internacional: 1, ecologia: 2, descentralizacao: 1 }
  },
  {
    id: 'habermas',
    name: 'Jürgen Habermas',
    role: 'Filósofo social',
    era: 'Século XX-XXI',
    vector: { economia: 3, estado: 3, liberdades: 7, democracia: 8, cultura: 4, internacional: 7, ecologia: 2, descentralizacao: 2 }
  },
  {
    id: 'bobbio',
    name: 'Norberto Bobbio',
    role: 'Filósofo político',
    era: 'Século XX',
    vector: { economia: 3, estado: 3, liberdades: 7, democracia: 7, cultura: 2, internacional: 4, ecologia: 1, descentralizacao: 2 }
  }
];