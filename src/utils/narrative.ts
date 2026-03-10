import { axes } from '../data/axes';
import type { AxisVector, MatchResult } from '../types';

function describeEconomy(value: number): string {
  if (value >= 6) return 'uma visão económica fortemente orientada para redistribuição, regulação e papel ativo do Estado';
  if (value >= 2) return 'uma visão económica moderadamente favorável à redistribuição e à correção pública do mercado';
  if (value <= -6) return 'uma visão económica claramente orientada para mercado, concorrência e contenção da intervenção pública';
  if (value <= -2) return 'uma visão económica relativamente favorável à autonomia do mercado e a um Estado mais contido';
  return 'uma posição económica intermédia, com equilíbrio entre mercado e intervenção pública';
}

function describeState(value: number): string {
  if (value >= 6) return 'Defendes um Estado forte, com capacidade de orientar, regular e garantir bens públicos essenciais.';
  if (value >= 2) return 'Tens uma inclinação para um Estado presente, embora não necessariamente omnipresente.';
  if (value <= -6) return 'Tendes para um Estado mínimo, com funções mais limitadas e grande espaço para iniciativa privada.';
  if (value <= -2) return 'Preferes um Estado mais contido e menos interventivo no quotidiano económico e social.';
  return 'Vês o Estado como instrumento útil, mas sem defender nem hiperintervenção nem retração profunda.';
}

function describeLiberties(value: number): string {
  if (value >= 6) return 'Colocas forte ênfase nas liberdades civis, na privacidade e na autonomia individual.';
  if (value >= 2) return 'Tendes a valorizar direitos civis e liberdade individual, embora com algumas reservas práticas.';
  if (value <= -6) return 'Dás prioridade nítida à ordem, autoridade e mecanismos de controlo social mais robustos.';
  if (value <= -2) return 'Tendes a aceitar alguma restrição das liberdades em nome da ordem ou da segurança.';
  return 'Manténs uma posição intermédia entre autonomia individual e exigências de ordem social.';
}

function describeDemocracy(value: number): string {
  if (value >= 6) return 'Valorizas fortemente participação, deliberação e pluralismo democrático.';
  if (value >= 2) return 'Tens sensibilidade democrática participativa, ainda que dentro de moldes institucionais clássicos.';
  if (value <= -6) return 'Tendes a preferir liderança concentrada e decisão mais vertical.';
  if (value <= -2) return 'Aceitas estruturas de poder mais concentradas quando as consideras mais eficazes.';
  return 'Vês virtudes tanto na participação como na eficácia institucional.';
}

function describeCulture(value: number): string {
  if (value >= 6) return 'Revelas uma postura cultural claramente progressista e aberta à diversidade social.';
  if (value >= 2) return 'Mostras abertura a progresso social e pluralismo cultural.';
  if (value <= -6) return 'Tendes para posições culturalmente conservadoras e de valorização forte da tradição.';
  if (value <= -2) return 'Manténs uma inclinação cultural mais conservadora do que progressista.';
  return 'Estás relativamente ao centro nas questões culturais e sociais.';
}

function describeInternational(value: number): string {
  if (value >= 6) return 'Defendes cooperação internacional, integração e abertura ao multilateralismo.';
  if (value >= 2) return 'Tendes a ver com bons olhos cooperação internacional e compromissos externos.';
  if (value <= -6) return 'Privilegias soberania rígida, reserva face a integração e maior fechamento político externo.';
  if (value <= -2) return 'Tendes a desconfiar de integração excessiva e a valorizar mais autonomia nacional.';
  return 'Manténs equilíbrio entre cooperação internacional e autonomia soberana.';
}

function describeEcology(value: number): string {
  if (value >= 6) return 'Atribuis prioridade muito elevada à transição ecológica, mesmo perante custos imediatos.';
  if (value >= 2) return 'Revelas preocupação ecológica relevante e aceitação de transição gradual mas séria.';
  if (value <= -6) return 'Dás clara prioridade ao produtivismo e ao crescimento económico sobre metas ambientais exigentes.';
  if (value <= -2) return 'Tendes a ver a agenda ecológica com prudência e a recusar custos excessivos no curto prazo.';
  return 'Assumes uma posição intermédia entre ambição ecológica e prudência económica.';
}

function describeDecentralization(value: number): string {
  if (value >= 6) return 'Preferes descentralização robusta e maior poder local ou regional.';
  if (value >= 2) return 'Tens inclinação favorável a aproximar poder político dos territórios.';
  if (value <= -6) return 'Preferes centralização forte e maior concentração institucional do poder.';
  if (value <= -2) return 'Tendes a valorizar coordenação central acima da autonomia territorial.';
  return 'Tens uma posição intermédia entre centralização e descentralização.';
}

function describeAxis(id: string, value: number): string {
  switch (id) {
    case 'economia':
      return describeEconomy(value);
    case 'estado':
      return describeState(value);
    case 'liberdades':
      return describeLiberties(value);
    case 'democracia':
      return describeDemocracy(value);
    case 'cultura':
      return describeCulture(value);
    case 'internacional':
      return describeInternational(value);
    case 'ecologia':
      return describeEcology(value);
    case 'descentralizacao':
      return describeDecentralization(value);
    default:
      return '';
  }
}

export function buildNarrative(userVector: AxisVector, ideologyMatches: MatchResult[], figureMatches: MatchResult[]): string[] {
  const strongestAxes = [...axes]
    .map((axis) => ({
      ...axis,
      value: userVector[axis.id],
      strength: Math.abs(userVector[axis.id]),
    }))
    .sort((a, b) => b.strength - a.strength)
    .slice(0, 3);

  const opening = `O teu perfil revela ${describeEconomy(userVector.economia)}. ${describeState(userVector.estado)}`;

  const middle = strongestAxes
    .map((axis) => describeAxis(axis.id, axis.value))
    .join(' ');

  const closing = ideologyMatches[0] && figureMatches[0]
    ? `No conjunto, aproximas-te mais de ${ideologyMatches[0].name.toLowerCase()} e, entre figuras históricas, o teu perfil aproxima-se mais de ${figureMatches[0].name}.`
    : 'O teu resultado sugere um perfil politicamente misto, com tendências cruzadas entre várias tradições.';

  return [opening, middle, closing];
}

export function buildShareText(userVector: AxisVector, ideologyMatches: MatchResult[], figureMatches: MatchResult[]): string {
  const topAxes = [...axes]
    .map((axis) => ({ label: axis.label, value: userVector[axis.id] }))
    .sort((a, b) => Math.abs(b.value) - Math.abs(a.value))
    .slice(0, 3)
    .map((axis) => `${axis.label}: ${axis.value > 0 ? '+' : ''}${axis.value.toFixed(1)}`)
    .join(' | ');

  const topIdeology = ideologyMatches[0]?.name ?? 'Sem correspondência';
  const topFigure = figureMatches[0]?.name ?? 'Sem correspondência';

  return `Resultado do meu teste político\n\nIdeologia mais próxima: ${topIdeology}\nFigura mais próxima: ${topFigure}\nEixos principais: ${topAxes}`;
}