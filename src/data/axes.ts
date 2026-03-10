import type { AxisDefinition, AxisVector } from '../types';

export const axes: AxisDefinition[] = [
  {
    id: 'economia',
    label: 'Economia',
    leftLabel: 'Redistribuição',
    rightLabel: 'Mercado',
    description: 'Mede preferência por redistribuição, propriedade social e regulação versus autonomia do mercado.'
  },
  {
    id: 'estado',
    label: 'Estado',
    leftLabel: 'Estado forte',
    rightLabel: 'Estado mínimo',
    description: 'Mede quanto papel direto queres para o Estado na economia e na provisão social.'
  },
  {
    id: 'liberdades',
    label: 'Liberdades civis',
    leftLabel: 'Liberdades',
    rightLabel: 'Ordem',
    description: 'Mede a prioridade dada à autonomia individual, privacidade e direitos civis.'
  },
  {
    id: 'democracia',
    label: 'Democracia',
    leftLabel: 'Participação',
    rightLabel: 'Autoridade',
    description: 'Mede preferência por participação, deliberação e pluralismo versus concentração de poder.'
  },
  {
    id: 'cultura',
    label: 'Cultura',
    leftLabel: 'Progresso social',
    rightLabel: 'Conservadorismo',
    description: 'Mede atitude perante mudança de normas sociais, costumes e diversidade cultural.'
  },
  {
    id: 'internacional',
    label: 'Relações internacionais',
    leftLabel: 'Cooperação',
    rightLabel: 'Soberania rígida',
    description: 'Mede abertura a integração internacional, multilateralismo e circulação transnacional.'
  },
  {
    id: 'ecologia',
    label: 'Ecologia',
    leftLabel: 'Transição ecológica',
    rightLabel: 'Produtivismo',
    description: 'Mede prioridade dada ao ambiente face ao crescimento económico de curto prazo.'
  },
  {
    id: 'descentralizacao',
    label: 'Território e poder',
    leftLabel: 'Descentralização',
    rightLabel: 'Centralização',
    description: 'Mede preferência por poder local/regional versus concentração institucional.'
  }
];

export function emptyVector(): AxisVector {
  return {
    economia: 0,
    estado: 0,
    liberdades: 0,
    democracia: 0,
    cultura: 0,
    internacional: 0,
    ecologia: 0,
    descentralizacao: 0,
  };
}