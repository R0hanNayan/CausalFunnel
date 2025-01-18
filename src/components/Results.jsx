import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const { questions, answers } = location.state || {};
  const navigate = useNavigate();

  const calculateScore = () =>
    questions.filter(
      (q, index) => answers[index] === q.correct_answer
    ).length;

  return (
    <div className="results-container">
      <h1 className='results-h1'>Quiz Result</h1>
      <p className='results-score'>Score: {calculateScore()} / {questions.length}</p>
      <button className='results-btn' onClick={() => navigate('/quiz')}>Restart Quiz</button>
      <ul className='results-list'>
        {questions.map((q, index) => (
          <li key={index}>
            <p dangerouslySetInnerHTML={{ __html: q.question }} />
            <p>Your Answer: {answers[index]}</p>
            <p>Correct Answer: {q.correct_answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
