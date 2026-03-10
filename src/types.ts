export type AxisId =
  | 'economia'
  | 'estado'
  | 'liberdades'
  | 'democracia'
  | 'cultura'
  | 'internacional'
  | 'ecologia'
  | 'descentralizacao';

export type AxisVector = Record<AxisId, number>;

export interface AxisDefinition {
  id: AxisId;
  label: string;
  leftLabel: string;
  rightLabel: string;
  description: string;
}

export interface QuestionEffect {
  axis: AxisId;
  weight: number;
}

export interface Question {
  id: string;
  text: string;
  help: string;
  example: string;
  category: string;
  effects: QuestionEffect[];
}

export interface IdeologyProfile {
  id: string;
  name: string;
  shortDescription: string;
  vector: AxisVector;
}

export interface FigureProfile {
  id: string;
  name: string;
  role: string;
  era: string;
  vector: AxisVector;
}

export interface MatchResult {
  id: string;
  name: string;
  similarity: number;
  shortDescription?: string;
  role?: string;
  era?: string;
}

export type AnswerValue = -3 | -2 | -1 | 0 | 1 | 2 | 3 | null;
export type AnswerMap = Record<string, AnswerValue>;