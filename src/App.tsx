import { useEffect, useMemo, useState } from 'react';
import './index.css';
import { axes } from './data/axes';
import { figures } from './data/figures';
import { ideologies } from './data/ideologies';
import { methodologySections } from './data/methodology';
import { questions, quickQuestionIds } from './data/questions';
import { buildNarrative, buildShareText } from './utils/narrative';
import {
  getCoherenceInsight,
  getFamilyInsights,
  getFigureExplanation,
  getIdeologyExplanation,
} from './utils/insights';
import { buildUserVector, getTopFigureMatches, getTopIdeologyMatches } from './utils/scoring';
import type { AnswerMap, AnswerValue, AxisVector } from './types';
import RadarChart from './components/RadarChart';

type TestMode = 'quick' | 'full';

const answerOptions: { label: string; value: AnswerValue }[] = [
  { label: 'Discordo totalmente', value: -3 },
  { label: 'Discordo', value: -2 },
  { label: 'Discordo ligeiramente', value: -1 },
  { label: 'Neutro / não sei', value: 0 },
  { label: 'Concordo ligeiramente', value: 1 },
  { label: 'Concordo', value: 2 },
  { label: 'Concordo totalmente', value: 3 },
];

const STORAGE_KEY = 'teste-politico-estado-v4';

function formatSigned(value: number): string {
  return value > 0 ? `+${value.toFixed(1)}` : value.toFixed(1);
}

function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [copyFeedback, setCopyFeedback] = useState('');
  const [testMode, setTestMode] = useState<TestMode>('full');
  const [showMethodology, setShowMethodology] = useState(false);
  const [selectedIdeologyId, setSelectedIdeologyId] = useState<string | null>(null);
  const [selectedFigureId, setSelectedFigureId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      setStarted(parsed.started ?? false);
      setFinished(parsed.finished ?? false);
      setCurrentIndex(parsed.currentIndex ?? 0);
      setAnswers(parsed.answers ?? {});
      setTestMode(parsed.testMode ?? 'full');
    } catch {
      console.error('Não foi possível recuperar o progresso guardado.');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ started, finished, currentIndex, answers, testMode })
    );
  }, [started, finished, currentIndex, answers, testMode]);

  const activeQuestions = useMemo(
    () =>
      testMode === 'quick'
        ? questions.filter((question) => quickQuestionIds.includes(question.id))
        : questions,
    [testMode]
  );

  useEffect(() => {
    if (currentIndex >= activeQuestions.length && activeQuestions.length > 0) {
      setCurrentIndex(activeQuestions.length - 1);
    }
  }, [currentIndex, activeQuestions]);

  const currentQuestion = activeQuestions[currentIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  const relevantAnswerEntries = useMemo(
    () => activeQuestions.map((question) => answers[question.id]),
    [activeQuestions, answers]
  );

  const answerValues = relevantAnswerEntries.filter(
    (value): value is Exclude<AnswerValue, null> =>
      value !== null && value !== undefined
  );

  const answeredCount = answerValues.length;
  const skippedCount = relevantAnswerEntries.filter((value) => value === null).length;
  const completion = Math.round(((answeredCount + skippedCount) / activeQuestions.length) * 100);
  const responseRate = Math.round((answeredCount / activeQuestions.length) * 100);

  const conviction =
    answeredCount === 0
      ? 0
      : Math.round(
          (answerValues.reduce<number>((sum, value) => sum + Math.abs(value), 0) /
            (answeredCount * 3)) *
            100
        );

  const userVector = useMemo(() => buildUserVector(answers, activeQuestions), [answers, activeQuestions]);
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

  const topIdeologyProfile = useMemo(
    () => ideologies.find((item) => item.id === ideologyMatches[0]?.id),
    [ideologyMatches]
  );

  const selectedIdeology = useMemo(
    () => ideologies.find((item) => item.id === selectedIdeologyId) ?? null,
    [selectedIdeologyId]
  );

  const selectedFigure = useMemo(
    () => figures.find((item) => item.id === selectedFigureId) ?? null,
    [selectedFigureId]
  );

  const selectedIdeologyMatch = selectedIdeologyId
    ? ideologyMatches.find((match) => match.id === selectedIdeologyId)
    : undefined;

  const selectedFigureMatch = selectedFigureId
    ? figureMatches.find((match) => match.id === selectedFigureId)
    : undefined;

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

    if (currentIndex === activeQuestions.length - 1) {
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
    setSelectedIdeologyId(null);
    setSelectedFigureId(null);
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

  function openIdeologyDetail(id: string) {
    setSelectedFigureId(null);
    setSelectedIdeologyId(id);
  }

  function openFigureDetail(id: string) {
    setSelectedIdeologyId(null);
    setSelectedFigureId(id);
  }

  function closeDetail() {
    setSelectedIdeologyId(null);
    setSelectedFigureId(null);
  }

  function renderAxisComparison(profileVector: AxisVector) {
    return axes.map((axis) => {
      const userValue = userVector[axis.id];
      const profileValue = profileVector[axis.id];
      const difference = Math.abs(userValue - profileValue);

      return (
        <div key={axis.id} className="axis-compare-row">
          <div className="match-top">
            <strong>{axis.label}</strong>
            <span>Δ {difference.toFixed(1)}</span>
          </div>
          <div className="compare-values">
            <span>Tu: {formatSigned(userValue)}</span>
            <span>Perfil: {formatSigned(profileValue)}</span>
          </div>
        </div>
      );
    });
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

            <div className="mode-grid">
              <button
                className={`mode-card ${testMode === 'quick' ? 'active' : ''}`}
                onClick={() => setTestMode('quick')}
              >
                <span className="mode-badge">Modo rápido</span>
                <strong>24 perguntas essenciais</strong>
                <p>Mais curto, ótimo para uma leitura inicial sólida.</p>
              </button>

              <button
                className={`mode-card ${testMode === 'full' ? 'active' : ''}`}
                onClick={() => setTestMode('full')}
              >
                <span className="mode-badge">Modo completo</span>
                <strong>{questions.length} perguntas</strong>
                <p>Mais robusto, com retrato político mais denso e refinado.</p>
              </button>
            </div>

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
              <button className="secondary-btn" onClick={() => setShowMethodology(true)}>
                Ver metodologia
              </button>
              <button className="secondary-btn" onClick={resetTest}>
                Limpar progresso
              </button>
            </div>
          </section>
        </div>

        {showMethodology && (
          <div className="overlay" onClick={() => setShowMethodology(false)}>
            <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
              <div className="modal-head">
                <div>
                  <div className="hero-kicker">Metodologia</div>
                  <h2>Como este teste funciona</h2>
                </div>
                <button className="modal-close" onClick={() => setShowMethodology(false)}>
                  Fechar
                </button>
              </div>

              <div className="methodology-grid">
                {methodologySections.map((section) => (
                  <div key={section.title} className="methodology-card">
                    <h3>{section.title}</h3>
                    <ul className="methodology-list">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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
                <span className="metric-label">Modo</span>
                <strong>{testMode === 'quick' ? 'Rápido' : 'Completo'}</strong>
              </div>
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
            </div>
          </section>

          <section className="visual-grid">
            <div className="glass-card">
              <h2>Mapa visual dos eixos</h2>
              <RadarChart
                userVector={userVector}
                comparisonVector={topIdeologyProfile?.vector}
                comparisonLabel={topIdeologyProfile?.name}
              />
              <p className="subtle-text">
                No gráfico, o centro representa posições intermédias. Quanto mais longe do
                centro, mais forte é a tua posição naquele eixo. A leitura exata de direção
                continua nas barras detalhadas abaixo.
              </p>
            </div>

            <div className="glass-card">
              <h2>Leitura interpretativa</h2>
              {narrative.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="hero-actions">
                <button className="primary-btn" onClick={copyResults}>
                  Copiar resumo
                </button>
                <button className="secondary-btn" onClick={() => setShowMethodology(true)}>
                  Ver metodologia
                </button>
                <button className="secondary-btn" onClick={resetTest}>
                  Refazer teste
                </button>
                {copyFeedback && <span className="copy-feedback">{copyFeedback}</span>}
              </div>
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
                    <p className="subtle-text">Exemplos: {family.examples.join(', ')}</p>
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
                  <button
                    key={match.id}
                    className="profile-link-card"
                    onClick={() => openIdeologyDetail(match.id)}
                  >
                    <div className="match-top">
                      <strong>{match.name}</strong>
                      <span>{match.similarity}%</span>
                    </div>
                    <p>{match.shortDescription}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h2>Figuras mais próximas</h2>
              <div className="match-list">
                {figureMatches.map((match) => (
                  <button
                    key={match.id}
                    className="profile-link-card"
                    onClick={() => openFigureDetail(match.id)}
                  >
                    <div className="match-top">
                      <strong>{match.name}</strong>
                      <span>{match.similarity}%</span>
                    </div>
                    <p>{match.role} · {match.era}</p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>

        {showMethodology && (
          <div className="overlay" onClick={() => setShowMethodology(false)}>
            <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
              <div className="modal-head">
                <div>
                  <div className="hero-kicker">Metodologia</div>
                  <h2>Como este teste funciona</h2>
                </div>
                <button className="modal-close" onClick={() => setShowMethodology(false)}>
                  Fechar
                </button>
              </div>

              <div className="methodology-grid">
                {methodologySections.map((section) => (
                  <div key={section.title} className="methodology-card">
                    <h3>{section.title}</h3>
                    <ul className="methodology-list">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedIdeology && (
          <div className="overlay" onClick={closeDetail}>
            <div className="modal-panel profile-modal" onClick={(event) => event.stopPropagation()}>
              <div className="modal-head">
                <div>
                  <div className="hero-kicker">Ideologia</div>
                  <h2>{selectedIdeology.name}</h2>
                </div>
                <button className="modal-close" onClick={closeDetail}>
                  Fechar
                </button>
              </div>

              <div className="profile-modal-grid">
                <div className="glass-inset">
                  <span className="metric-label">Semelhança</span>
                  <div className="big-similarity">{selectedIdeologyMatch?.similarity ?? '—'}%</div>
                </div>
                <div className="glass-inset">
                  <span className="metric-label">Descrição</span>
                  <p>{selectedIdeology.shortDescription}</p>
                </div>
              </div>

              <div className="axis-compare-list">{renderAxisComparison(selectedIdeology.vector)}</div>
            </div>
          </div>
        )}

        {selectedFigure && (
          <div className="overlay" onClick={closeDetail}>
            <div className="modal-panel profile-modal" onClick={(event) => event.stopPropagation()}>
              <div className="modal-head">
                <div>
                  <div className="hero-kicker">Figura histórica</div>
                  <h2>{selectedFigure.name}</h2>
                </div>
                <button className="modal-close" onClick={closeDetail}>
                  Fechar
                </button>
              </div>

              <div className="profile-modal-grid">
                <div className="glass-inset">
                  <span className="metric-label">Semelhança</span>
                  <div className="big-similarity">{selectedFigureMatch?.similarity ?? '—'}%</div>
                </div>
                <div className="glass-inset">
                  <span className="metric-label">Perfil</span>
                  <p>{selectedFigure.role} · {selectedFigure.era}</p>
                </div>
              </div>

              <div className="axis-compare-list">{renderAxisComparison(selectedFigure.vector)}</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="page">
      <div className="shell">
        <section className="question-shell">
          <div className="question-head">
            <div>
              <div className="hero-kicker">
                {testMode === 'quick' ? 'Modo rápido' : 'Modo completo'} · Pergunta {currentIndex + 1} de {activeQuestions.length}
              </div>
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
                <strong>{Math.round(((currentIndex + 1) / activeQuestions.length) * 100)}%</strong>
              </div>
            </div>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
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
            <button className="secondary-btn" onClick={() => setShowMethodology(true)}>
              Metodologia
            </button>
            <button className="secondary-btn" onClick={resetTest}>
              Recomeçar
            </button>
          </div>
        </section>
      </div>

      {showMethodology && (
        <div className="overlay" onClick={() => setShowMethodology(false)}>
          <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="hero-kicker">Metodologia</div>
                <h2>Como este teste funciona</h2>
              </div>
              <button className="modal-close" onClick={() => setShowMethodology(false)}>
                Fechar
              </button>
            </div>

            <div className="methodology-grid">
              {methodologySections.map((section) => (
                <div key={section.title} className="methodology-card">
                  <h3>{section.title}</h3>
                  <ul className="methodology-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;