import { axes, emptyVector } from '../data/axes';
import { figures } from '../data/figures';
import { ideologies } from '../data/ideologies';
import { questions } from '../data/questions';
import type { AnswerMap, AxisVector, MatchResult } from '../types';

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

export function buildUserVector(answers: AnswerMap): AxisVector {
  const raw = emptyVector();
  const max = emptyVector();

  for (const question of questions) {
    const answer = answers[question.id];

    if (answer === null || answer === undefined) continue;

    for (const effect of question.effects) {
      raw[effect.axis] += answer * effect.weight;
      max[effect.axis] += 3 * Math.abs(effect.weight);
    }
  }

  const result = emptyVector();

  for (const axis of axes) {
    const axisMax = max[axis.id];
    result[axis.id] = axisMax === 0 ? 0 : round((raw[axis.id] / axisMax) * 10);
  }

  return result;
}

function closenessScore(a: AxisVector, b: AxisVector): number {
  let totalDiff = 0;

  for (const axis of axes) {
    totalDiff += Math.abs(a[axis.id] - b[axis.id]);
  }

  const averageDiff = totalDiff / axes.length;
  return Math.max(0, 100 - averageDiff * 5);
}

function directionScore(a: AxisVector, b: AxisVector): number {
  let points = 0;

  for (const axis of axes) {
    const av = a[axis.id];
    const bv = b[axis.id];

    const aNearCenter = Math.abs(av) < 1.5;
    const bNearCenter = Math.abs(bv) < 1.5;

    if (aNearCenter && bNearCenter) {
      points += 1;
      continue;
    }

    if ((av > 0 && bv > 0) || (av < 0 && bv < 0)) {
      points += 1;
      continue;
    }

    if (aNearCenter || bNearCenter) {
      points += 0.5;
      continue;
    }
  }

  return (points / axes.length) * 100;
}

export function profileSimilarity(a: AxisVector, b: AxisVector): number {
  const closeness = closenessScore(a, b);
  const direction = directionScore(a, b);

  return Math.round(closeness * 0.8 + direction * 0.2);
}

export function getTopIdeologyMatches(userVector: AxisVector, count = 10): MatchResult[] {
  return ideologies
    .map((profile) => ({
      id: profile.id,
      name: profile.name,
      shortDescription: profile.shortDescription,
      similarity: profileSimilarity(userVector, profile.vector),
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, count);
}

export function getTopFigureMatches(userVector: AxisVector, count = 10): MatchResult[] {
  return figures
    .map((profile) => ({
      id: profile.id,
      name: profile.name,
      role: profile.role,
      era: profile.era,
      similarity: profileSimilarity(userVector, profile.vector),
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, count);
}