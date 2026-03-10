import { axes } from '../data/axes';
import { figures } from '../data/figures';
import { ideologies } from '../data/ideologies';
import { ideologyFamilies } from '../data/ideologyFamilies';
import type { AnswerMap, AxisId, AxisVector } from '../types';
import { profileSimilarity } from './scoring';

export interface FamilyInsight {
  id: string;
  name: string;
  description: string;
  score: number;
  examples: string[];
}

export interface CoherenceWarning {
  title: string;
  detail: string;
}

export interface CoherenceInsight {
  score: number;
  label: string;
  comparedPairs: number;
  warnings: CoherenceWarning[];
}

export interface MatchExplanation {
  title: string;
  intro: string;
  bullets: string[];
  caution: string;
}

const axisMap = Object.fromEntries(axes.map((axis) => [axis.id, axis]));

function directionLabel(axisId: AxisId, value: number): string {
  const axis = axisMap[axisId];
  if (!axis) return 'uma posição intermédia';

  if (Math.abs(value) < 1.5) {
    return 'uma posição relativamente intermédia';
  }

  return value >= 0 ? axis.leftLabel.toLowerCase() : axis.rightLabel.toLowerCase();
}

export function getFamilyInsights(userVector: AxisVector, count = 4): FamilyInsight[] {
  return ideologyFamilies
    .map((family) => {
      const members = ideologies
        .filter((ideology) => family.members.includes(ideology.id))
        .map((ideology) => ({
          name: ideology.name,
          similarity: profileSimilarity(userVector, ideology.vector),
        }))
        .sort((a, b) => b.similarity - a.similarity);

      const topMembers = members.slice(0, Math.min(3, members.length));
      const score =
        topMembers.length === 0
          ? 0
          : Math.round(
              topMembers.reduce((sum, member) => sum + member.similarity, 0) / topMembers.length
            );

      return {
        id: family.id,
        name: family.name,
        description: family.description,
        score,
        examples: topMembers.map((member) => member.name),
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

const contradictionPairs: Array<{
  a: string;
  b: string;
  title: string;
  detail: string;
}> = [
  {
    a: 'q1',
    b: 'q47',
    title: 'Redistribuição vs aceitação da desigualdade',
    detail: 'Concordaste simultaneamente com mais redistribuição e com a ideia de que desigualdade económica é aceitável em termos relativamente fortes.'
  },
  {
    a: 'q2',
    b: 'q7',
    title: 'Estado acionista vs primazia da empresa privada',
    detail: 'Aparece uma tensão entre defender participação pública forte e preferir que empresas privadas produzam quase sempre melhores resultados.'
  },
  {
    a: 'q6',
    b: 'q7',
    title: 'Serviços públicos universais vs solução prioritariamente privada',
    detail: 'Há uma tensão entre preferir provisão pública universal e confiar sobretudo na primazia da iniciativa privada.'
  },
  {
    a: 'q9',
    b: 'q10',
    title: 'Privacidade vs expansão da vigilância',
    detail: 'Surgiu concordância simultânea com proteção forte da privacidade e com expansão significativa da vigilância estatal.'
  },
  {
    a: 'q13',
    b: 'q21',
    title: 'Pluralidade social vs proteção da tradição',
    detail: 'Aparece simultaneamente abertura forte a novas formas sociais e forte defesa de travões tradicionais à mudança cultural.'
  },
  {
    a: 'q14',
    b: 'q17',
    title: 'Participação cidadã vs tecnocracia',
    detail: 'Há uma tensão entre querer mais participação direta e preferir que especialistas decidam mais do que o debate político alargado.'
  },
  {
    a: 'q14',
    b: 'q15',
    title: 'Participação vs concentração executiva',
    detail: 'Concordaste em simultâneo com maior participação cidadã e com forte concentração de poder no executivo em momentos de crise.'
  },
  {
    a: 'q27',
    b: 'q28',
    title: 'Integração internacional vs soberania rígida',
    detail: 'Aparece concordância simultânea com integração internacional reforçada e com prioridade rígida da soberania sobre compromissos externos.'
  },
  {
    a: 'q29',
    b: 'q30',
    title: 'Abertura migratória vs fronteiras muito restritivas',
    detail: 'Surgiu tensão entre visão relativamente aberta da imigração e preferência por forte restrição de fronteiras.'
  },
  {
    a: 'q33',
    b: 'q35',
    title: 'Transição ecológica rápida vs prioridade produtivista',
    detail: 'Há uma tensão entre defender transição ecológica rápida e recusar que metas ambientais travem projetos económicos relevantes.'
  },
  {
    a: 'q39',
    b: 'q40',
    title: 'Descentralização vs centralização',
    detail: 'Concordaste de forma relativamente forte com mais transferência de poder para territórios e com maior centralização estatal.'
  },
  {
    a: 'q41',
    b: 'q42',
    title: 'Subsidiariedade vs forte controlo central',
    detail: 'Há uma tensão entre preferir decisão próxima dos cidadãos e defender forte controlo central sobre áreas estratégicas.'
  }
];

function contradictionPenalty(a: number, b: number): number {
  if (a >= 1 && b >= 1) {
    return (Math.min(a, b) / 3) * 40;
  }

  return 0;
}

function coherenceLabel(score: number): string {
  if (score >= 86) return 'Muito coerente';
  if (score >= 72) return 'Coerência elevada';
  if (score >= 58) return 'Coerência intermédia';
  return 'Perfil com tensões relevantes';
}

export function getCoherenceInsight(answers: AnswerMap): CoherenceInsight {
  let totalPenalty = 0;
  let comparedPairs = 0;
  const warnings: CoherenceWarning[] = [];

  for (const pair of contradictionPairs) {
    const a = answers[pair.a];
    const b = answers[pair.b];

    if (typeof a !== 'number' || typeof b !== 'number') {
      continue;
    }

    comparedPairs += 1;

    const penalty = contradictionPenalty(a, b);
    totalPenalty += penalty;

    if (penalty >= 20) {
      warnings.push({
        title: pair.title,
        detail: pair.detail,
      });
    }
  }

  const score =
    comparedPairs === 0
      ? 100
      : Math.max(0, Math.round(100 - totalPenalty / comparedPairs));

  return {
    score,
    label: coherenceLabel(score),
    comparedPairs,
    warnings: warnings.slice(0, 3),
  };
}

function buildExplanation(userVector: AxisVector, profileName: string, profileVector: AxisVector): MatchExplanation {
  const rankedAxes = axes
    .map((axis) => {
      const userValue = userVector[axis.id];
      const profileValue = profileVector[axis.id];
      const sameDirection =
        Math.abs(userValue) < 1.5 ||
        Math.abs(profileValue) < 1.5 ||
        Math.sign(userValue) === Math.sign(profileValue);

      const diff = Math.abs(userValue - profileValue);
      const closeness = 10 - diff;
      const intensity = (Math.abs(userValue) + Math.abs(profileValue)) / 2;

      return {
        axis,
        userValue,
        profileValue,
        sameDirection,
        score: closeness + (sameDirection ? 4 : 0) + intensity * 0.15,
      };
    })
    .sort((a, b) => b.score - a.score);

  const strongest = rankedAxes.slice(0, 3);
  const weakest = rankedAxes[rankedAxes.length - 1];

  return {
    title: `Porque estás próximo de ${profileName}`,
    intro: `A correspondência surge sobretudo nos eixos ${strongest
      .map((item) => item.axis.label.toLowerCase())
      .join(', ')}.`,
    bullets: strongest.map((item) => {
      const direction = directionLabel(item.axis.id, (item.userValue + item.profileValue) / 2);

      return `No eixo ${item.axis.label}, tanto tu como ${profileName} tendem para ${direction}.`;
    }),
    caution: `A maior distância aparece em ${weakest.axis.label}, onde o teu perfil se afasta mais de ${profileName}.`,
  };
}

export function getIdeologyExplanation(userVector: AxisVector, ideologyId: string): MatchExplanation | null {
  const ideology = ideologies.find((item) => item.id === ideologyId);
  if (!ideology) return null;

  return buildExplanation(userVector, ideology.name, ideology.vector);
}

export function getFigureExplanation(userVector: AxisVector, figureId: string): MatchExplanation | null {
  const figure = figures.find((item) => item.id === figureId);
  if (!figure) return null;

  return buildExplanation(userVector, figure.name, figure.vector);
}