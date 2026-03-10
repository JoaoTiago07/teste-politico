import { useEffect, useMemo, useState } from 'react';
import './index.css';
import { axes } from './data/axes';
import { questions } from './data/questions';
import { buildUserVector, getTopFigureMatches, getTopIdeologyMatches } from './utils/scoring';
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

const STORAGE_KEY = 'teste-politico-estado-v1';

function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});

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

  const userVector = useMemo(() => buildUserVector(answers), [answers]);
  const ideologyMatches = useMemo(() => getTopIdeologyMatches(userVector, 5), [userVector]);
  const figureMatches = useMemo(() => getTopFigureMatches(userVector, 5), [userVector]);

  const answeredCount = Object.values(answers).filter((value) => value !== null && value !== undefined).length;
  const skippedCount = Object.values(answers).filter((value) => value === null).length;
  const progress = Math.round((currentIndex / questions.length) * 100);

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
  }

  if (!started) {
    return (
      <div className="page">
        <div className="shell">
          <section className="hero">
            <p className="eyebrow">Teste político robusto</p>
            <h1>Descobre o teu perfil político com muito mais profundidade.</h1>
            <p className="lead">
              Este teste não te reduz a esquerda vs direita. Mede várias dimensões,
              explica cada pergunta de forma simples e compara-te com ideologias e
              figuras políticas.
            </p>

            <div className="hero-grid">
              <div className="card">
                <h3>O que mede</h3>
                <p>8 eixos políticos independentes, com lógica preparada para escalar para mais de 100 perguntas.</p>
              </div>
              <div className="card">
                <h3>Como responde</h3>
                <p>Cada pergunta inclui ajuda simples, exemplo e escala gradual de concordância.</p>
              </div>
              <div className="card">
                <h3>O que recebes</h3>
                <p>Resultado por eixos, afinidade ideológica e semelhança com líderes e filósofos.</p>
              </div>
            </div>

            <div className="actions">
              <button className="primary-btn" onClick={startTest}>
                Começar teste
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
          <section className="result-header">
            <p className="eyebrow">Resultado final</p>
            <h1>O teu perfil político</h1>
            <p className="lead">
              Respondeste a {answeredCount} perguntas e saltaste {skippedCount}.
            </p>
          </section>

          <section className="result-grid">
            <div className="card">
              <h2>Eixos</h2>
              <div className="axis-list">
                {axes.map((axis) => {
                  const value = userVector[axis.id];
                  const percent = ((value + 10) / 20) * 100;

                  return (
                    <div key={axis.id} className="axis-row">
                      <div className="axis-head">
                        <strong>{axis.label}</strong>
                        <span>{value.toFixed(1)}</span>
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

            <div className="card">
              <h2>Ideologias mais próximas</h2>
              <div className="match-list">
                {ideologyMatches.map((match) => (
                  <div key={match.id} className="match-item">
                    <div className="match-top">
                      <strong>{match.name}</strong>
                      <span>{match.similarity}%</span>
                    </div>
                    <p>{match.shortDescription}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2>Figuras mais próximas</h2>
              <div className="match-list">
                {figureMatches.map((match) => (
                  <div key={match.id} className="match-item">
                    <div className="match-top">
                      <strong>{match.name}</strong>
                      <span>{match.similarity}%</span>
                    </div>
                    <p>{match.role} · {match.era}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="actions">
            <button className="primary-btn" onClick={resetTest}>
              Refazer teste
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="shell">
        <section className="question-panel">
          <div className="question-top">
            <div>
              <p className="eyebrow">Pergunta {currentIndex + 1} de {questions.length}</p>
              <h1>{currentQuestion.text}</h1>
              <span className="badge">{currentQuestion.category}</span>
            </div>
            <div className="progress-box">
              <span>{progress}%</span>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
          </div>

          <details className="help-box">
            <summary>Explicação simples</summary>
            <p>{currentQuestion.help}</p>
            <p><strong>Exemplo:</strong> {currentQuestion.example}</p>
          </details>

          <div className="answers">
            {answerOptions.map((option) => (
              <button
                key={String(option.value)}
                className="answer-btn"
                onClick={() => answerQuestion(option.value)}
              >
                {option.label}
              </button>
            ))}

            <button className="skip-btn" onClick={() => answerQuestion(null)}>
              Saltar pergunta
            </button>
          </div>

          <div className="nav-row">
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