import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Timer from './Timer';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeUp, setTimeUp] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        axios
            .get('https://opentdb.com/api.php?amount=15')
            .then((res) => setQuestions(res.data.results))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (location.state?.questionIndex !== undefined) {
            setCurrentQuestion(location.state.questionIndex); // Update currentQuestion based on state passed from Navbar
        }
    }, [location.state?.questionIndex]);

    const handleAnswer = (answer) => {
        setAnswers({ ...answers, [currentQuestion]: answer });
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            navigate('/results', { state: { questions, answers } });
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
            <Navbar questions={questions} currentQuestion={currentQuestion} answers={answers} />
        </div>
    );
};

export default Quiz;
