import { useEffect, useMemo, useState } from 'react';
import './index.css';
import { axes } from './data/axes';
import { questions } from './data/questions';
import { buildUserVector, getTopFigureMatches, getTopIdeologyMatches } from './utils/scoring';
import { buildNarrative, buildShareText } from './utils/narrative';
import {
  getCoherenceInsight,
  getFamilyInsights,
  getFigureExplanation,
  getIdeologyExplanation,
} from './utils/insights';
import type { AnswerMap, AnswerValue } from './types';

const answerOptions: { label: string; value: AnswerValue }[] = [
  { label: 'Discordo totalmente', value: -3 },
  { label: 'Discordo', value: -2 },
  { label: 'Discordo ligeiramente', value: -1 },
  { label: 'Neutro / não sei', value: 0 },
  { label: 'Concordo ligeiramente', value: 1 },
  { label: 'Concordo', value: 2 },
  { label: 'Concordo totalmente', value: 3 },
];

const STORAGE_KEY = 'teste-politico-estado-v3';

function formatSigned(value: number): string {
  return value > 0 ? `+${value.toFixed(1)}` : value.toFixed(1);
}

function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [copyFeedback, setCopyFeedback] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      setStarted(parsed.started ?? false);
      setFinished(parsed.finished ?? false);
      setCurrentIndex(parsed.currentIndex ?? 0);
      setAnswers(parsed.answers ?? {});
    } catch {
      console.error('Não foi possível recuperar o progresso guardado.');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ started, finished, currentIndex, answers })
    );
  }, [started, finished, currentIndex, answers]);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  const userVector = useMemo(() => buildUserVector(answers), [answers]);
  const ideologyMatches = useMemo(() => getTopIdeologyMatches(userVector, 10), [userVector]);
  const figureMatches = useMemo(() => getTopFigureMatches(userVector, 10), [userVector]);
  const narrative = useMemo(
    () => buildNarrative(userVector, ideologyMatches, figureMatches),
    [userVector, ideologyMatches, figureMatches]
  );
  const shareText = useMemo(
    () => buildShareText(userVector, ideologyMatches, figureMatches),
    [userVector, ideologyMatches, figureMatches]
  );

  const familyInsights = useMemo(() => getFamilyInsights(userVector, 4), [userVector]);
  const coherenceInsight = useMemo(() => getCoherenceInsight(answers), [answers]);

  const topIdeologyExplanation = useMemo(
    () =>
      ideologyMatches[0] ? getIdeologyExplanation(userVector, ideologyMatches[0].id) : null,
    [userVector, ideologyMatches]
  );

  const topFigureExplanation = useMemo(
    () => (figureMatches[0] ? getFigureExplanation(userVector, figureMatches[0].id) : null),
    [userVector, figureMatches]
  );

  const answerValues = Object.values(answers).filter(
    (value): value is Exclude<AnswerValue, null> =>
      value !== null && value !== undefined
  );

  const answeredCount = answerValues.length;
  const skippedCount = Object.values(answers).filter((value) => value === null).length;
  const completion = Math.round(((answeredCount + skippedCount) / questions.length) * 100);
  const responseRate = Math.round((answeredCount / questions.length) * 100);

  const conviction =
    answeredCount === 0
      ? 0
      : Math.round(
          (answerValues.reduce<number>((sum, value) => sum + Math.abs(value), 0) /
            (answeredCount * 3)) *
            100
        );

  function startTest() {
    setStarted(true);
    setFinished(false);
    setCurrentIndex(0);
  }

  function answerQuestion(value: AnswerValue) {
    if (!currentQuestion) return;

    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };

    setAnswers(nextAnswers);

    if (currentIndex === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  }

  function previousQuestion() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function resetTest() {
    localStorage.removeItem(STORAGE_KEY);
    setStarted(false);
    setFinished(false);
    setCurrentIndex(0);
    setAnswers({});
    setCopyFeedback('');
  }

  async function copyResults() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopyFeedback('Resultado copiado.');
      setTimeout(() => setCopyFeedback(''), 2000);
    } catch {
      setCopyFeedback('Não foi possível copiar.');
      setTimeout(() => setCopyFeedback(''), 2000);
    }
  }

  if (!started) {
    return (
      <div className="page">
        <div className="shell">
          <section className="hero">
            <div className="hero-kicker">Teste político de nova geração</div>
            <h1>Mais do que esquerda e direita.</h1>
            <p className="lead">
              Este teste mede o teu perfil político em várias dimensões, com linguagem
              simples, explicações claras e resultados muito mais ricos do que os testes
              tradicionais.
            </p>

            <div className="hero-grid">
              <div className="glass-card">
                <h3>Explicações simples</h3>
                <p>Cada pergunta pode ser aberta e explicada para quem não domina jargão político.</p>
              </div>
              <div className="glass-card">
                <h3>Resultado interpretado</h3>
                <p>No fim recebes narrativa, famílias ideológicas, coerência interna e correspondências históricas.</p>
              </div>
              <div className="glass-card">
                <h3>Robusto e escalável</h3>
                <p>A estrutura está preparada para crescer com mais perguntas, perfis, páginas e metodologia pública.</p>
              </div>
            </div>

            <div className="hero-actions">
              <button className="primary-btn" onClick={startTest}>
                Começar
              </button>
              <button className="secondary-btn" onClick={resetTest}>
                Limpar progresso
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="page">
        <div className="shell">
          <section className="result-hero">
            <div className="hero-kicker">Resultado final</div>
            <h1>O teu perfil político</h1>
            <p className="lead">
              Respondeste a {answeredCount} perguntas, saltaste {skippedCount} e concluíste {completion}% do teste.
            </p>

            <div className="metric-grid">
              <div className="metric-card">
                <span className="metric-label">Taxa de resposta</span>
                <strong>{responseRate}%</strong>
              </div>
              <div className="metric-card">
                <span className="metric-label">Convicção média</span>
                <strong>{conviction}%</strong>
              </div>
              <div className="metric-card">
                <span className="metric-label">Ideologia mais próxima</span>
                <strong>{ideologyMatches[0]?.name ?? '—'}</strong>
              </div>
              <div className="metric-card">
                <span className="metric-label">Figura mais próxima</span>
                <strong>{figureMatches[0]?.name ?? '—'}</strong>
              </div>
            </div>
          </section>

          <section className="summary-card">
            <h2>Leitura interpretativa</h2>
            {narrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="hero-actions">
              <button className="primary-btn" onClick={copyResults}>
                Copiar resumo
              </button>
              <button className="secondary-btn" onClick={resetTest}>
                Refazer teste
              </button>
              {copyFeedback && <span className="copy-feedback">{copyFeedback}</span>}
            </div>
          </section>

          <section className="insight-grid">
            <div className="glass-card">
              <h2>Famílias ideológicas mais próximas</h2>
              <div className="family-stack">
                {familyInsights.map((family) => (
                  <div key={family.id} className="family-card">
                    <div className="match-top">
                      <strong>{family.name}</strong>
                      <span>{family.score}%</span>
                    </div>
                    <p>{family.description}</p>
                    <p className="subtle-text">
                      Exemplos: {family.examples.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h2>Coerência interna</h2>
              <div className="coherence-score">{coherenceInsight.score}%</div>
              <p className="coherence-label">{coherenceInsight.label}</p>
              <p className="subtle-text">
                Foram avaliadas {coherenceInsight.comparedPairs} relações internas entre respostas potencialmente tensas.
              </p>

              {coherenceInsight.warnings.length > 0 ? (
                <div className="warning-list">
                  {coherenceInsight.warnings.map((warning, index) => (
                    <div key={index} className="warning-card">
                      <strong>{warning.title}</strong>
                      <p>{warning.detail}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="subtle-text">
                  Não apareceram tensões fortes nas combinações principais avaliadas.
                </p>
              )}
            </div>

            <div className="glass-card">
              <h2>Porque sais próximo desta ideologia</h2>
              {topIdeologyExplanation ? (
                <div className="explanation-block">
                  <p>{topIdeologyExplanation.intro}</p>
                  <ul className="explanation-list">
                    {topIdeologyExplanation.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="subtle-text">{topIdeologyExplanation.caution}</p>
                </div>
              ) : (
                <p className="subtle-text">Ainda sem explicação disponível.</p>
              )}
            </div>

            <div className="glass-card">
              <h2>Porque sais próximo desta figura</h2>
              {topFigureExplanation ? (
                <div className="explanation-block">
                  <p>{topFigureExplanation.intro}</p>
                  <ul className="explanation-list">
                    {topFigureExplanation.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="subtle-text">{topFigureExplanation.caution}</p>
                </div>
              ) : (
                <p className="subtle-text">Ainda sem explicação disponível.</p>
              )}
            </div>
          </section>

          <section className="results-grid">
            <div className="glass-card large-card">
              <h2>Eixos políticos</h2>
              <div className="axis-list">
                {axes.map((axis) => {
                  const value = userVector[axis.id];
                  const percent = ((value + 10) / 20) * 100;

                  return (
                    <div key={axis.id} className="axis-row">
                      <div className="axis-header">
                        <div>
                          <strong>{axis.label}</strong>
                          <p>{axis.description}</p>
                        </div>
                        <span className="axis-value">{formatSigned(value)}</span>
                      </div>

                      <div className="axis-bar">
                        <div className="axis-fill" style={{ width: `${percent}%` }} />
                      </div>

                      <div className="axis-labels">
                        <span>{axis.leftLabel}</span>
                        <span>{axis.rightLabel}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card">
              <h2>Ideologias mais próximas</h2>
              <div className="match-list">
                {ideologyMatches.map((match) => (
                  <details key={match.id} className="details-card">
                    <summary className="details-summary">
                      <span>{match.name}</span>
                      <strong>{match.similarity}%</strong>
                    </summary>
                    <p>{match.shortDescription}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h2>Figuras mais próximas</h2>
              <div className="match-list">
                {figureMatches.map((match) => (
                  <details key={match.id} className="details-card">
                    <summary className="details-summary">
                      <span>{match.name}</span>
                      <strong>{match.similarity}%</strong>
                    </summary>
                    <p>{match.role} · {match.era}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="shell">
        <section className="question-shell">
          <div className="question-head">
            <div>
              <div className="hero-kicker">Pergunta {currentIndex + 1} de {questions.length}</div>
              <h1>{currentQuestion.text}</h1>
              <span className="question-badge">{currentQuestion.category}</span>
            </div>

            <div className="question-stats">
              <div className="question-stat">
                <span>Respondidas</span>
                <strong>{answeredCount}</strong>
              </div>
              <div className="question-stat">
                <span>Progresso</span>
                <strong>{Math.round(((currentIndex + 1) / questions.length) * 100)}%</strong>
              </div>
            </div>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          <details className="help-box">
            <summary>Explicação simples</summary>
            <p>{currentQuestion.help}</p>
            <p><strong>Exemplo:</strong> {currentQuestion.example}</p>
          </details>

          <div className="answers-grid">
            {answerOptions.map((option) => (
              <button
                key={String(option.value)}
                className={`answer-btn ${currentAnswer === option.value ? 'active' : ''}`}
                onClick={() => answerQuestion(option.value)}
              >
                {option.label}
              </button>
            ))}

            <button
              className={`skip-btn ${currentAnswer === null ? 'active' : ''}`}
              onClick={() => answerQuestion(null)}
            >
              Saltar pergunta
            </button>
          </div>

          <div className="hero-actions">
            <button className="secondary-btn" onClick={previousQuestion} disabled={currentIndex === 0}>
              Anterior
            </button>
            <button className="secondary-btn" onClick={resetTest}>
              Recomeçar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;