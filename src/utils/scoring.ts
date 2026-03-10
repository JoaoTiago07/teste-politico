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
    const maxValue = max[axis.id];
    result[axis.id] = maxValue === 0 ? 0 : round((raw[axis.id] / maxValue) * 10);
  }

  return result;
}

function distance(a: AxisVector, b: AxisVector): number {
  let sum = 0;

  for (const axis of axes) {
    const diff = a[axis.id] - b[axis.id];
    sum += diff * diff;
  }

  return Math.sqrt(sum);
}

function similarityFromDistance(distanceValue: number): number {
  const maxDistance = Math.sqrt(axes.length * 20 * 20);
  const similarity = (1 - distanceValue / maxDistance) * 100;
  return Math.max(0, Math.min(100, Math.round(similarity)));
}

export function getTopIdeologyMatches(userVector: AxisVector, count = 5): MatchResult[] {
  return ideologies
    .map((profile) => ({
      id: profile.id,
      name: profile.name,
      shortDescription: profile.shortDescription,
      similarity: similarityFromDistance(distance(userVector, profile.vector)),
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, count);
}

export function getTopFigureMatches(userVector: AxisVector, count = 5): MatchResult[] {
  return figures
    .map((profile) => ({
      id: profile.id,
      name: profile.name,
      role: profile.role,
      era: profile.era,
      similarity: similarityFromDistance(distance(userVector, profile.vector)),
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, count);
}