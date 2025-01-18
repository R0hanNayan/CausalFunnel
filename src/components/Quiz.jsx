import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeUp, setTimeUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=15')
      .then((res) => setQuestions(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results', { state: { questions, answers: { ...answers, [currentQuestion]: answer } } });
    }
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    navigate('/results', { state: { questions, answers } });
  };

  if (timeUp || questions.length === 0) return null;

  return (
    <div className="quiz-container scale-up-center">
      <Timer duration={30 * 60} onTimeUp={handleTimeUp} />
      <Question
        question={questions[currentQuestion]}
        questionIndex={currentQuestion}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
