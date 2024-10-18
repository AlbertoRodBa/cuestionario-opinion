import { useState } from 'react';
import Question from './components/Question';

function App() {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: '¿Qué opinas sobre el desarrollo web?',
      options: ['Me encanta', 'Es interesante', 'Es complicado', 'No es lo mío'],
    },
    {
      id: 2,
      question: '¿Cuál es tu lenguaje de programación favorito?',
      options: ['JavaScript', 'Python', 'C#', 'Otro'],
    },
    {
      id: 3,
      question: '¿Prefieres trabajar solo o en equipo?',
      options: ['Solo', 'En equipo', 'Ambas opciones'],
    },
  ];

  const handleChange = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Respuestas del usuario:', answers);
  };

  return (
    <div className="App">
      <h1>Cuestionario de Opinión</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <Question
            key={q.id}
            question={q.question}
            options={q.options}
            onChange={(answer) => handleChange(q.id, answer)}
            selectedAnswer={answers[q.id]}
          />
        ))}
        <button type="submit">Enviar respuestas</button>
      </form>
    </div>
  );
}

export default App;
