import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import Question from './Question'; 
import Timer from './Timer'; 
import Navbar from './Navbar'; 
import { useNavigate, useLocation } from 'react-router-dom'; 


const Quiz = () => {
    const [questions, setQuestions] = useState([]); // Store fetched questions
    const [currentQuestion, setCurrentQuestion] = useState(0); // Index of the currently displayed question
    const [answers, setAnswers] = useState({}); // Store user's answers
    const [timeUp, setTimeUp] = useState(false); // Track if the timer has expired
    const navigate = useNavigate(); // Hook to navigate between routes programmatically
    const location = useLocation(); // Hook to access the location object for passing and reading route state

    // Fetch questions from the API when the component mounts
    useEffect(() => {
        axios
            .get('https://opentdb.com/api.php?amount=15') // Fetch 15 questions from the Open Trivia Database
            .then((res) => setQuestions(res.data.results)) // Store the fetched questions in state
            .catch((err) => console.error(err)); // Log any errors during the API call
    }, []);

    // Update the current question index if passed via location state (e.g., from the Navbar)
    useEffect(() => {
        if (location.state?.questionIndex !== undefined) {
            setCurrentQuestion(location.state.questionIndex); // Set the current question based on the passed index
        }
    }, [location.state?.questionIndex]);

    // Handle answer selection
    const handleAnswer = (answer) => {
        // Update answers with the selected option for the current question
        setAnswers({ ...answers, [currentQuestion]: answer });

        // Navigate to the next question or the results page if it's the last question
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1); // Move to the next question
        } else {
            // Navigate to the results page and pass the questions and answers via state
            navigate('/results', { state: { questions, answers: { ...answers, [currentQuestion]: answer } } });
        }
    };

    // Handle when the timer expires
    const handleTimeUp = () => {
        setTimeUp(true); // Set timeUp to true
        navigate('/results', { state: { questions, answers } }); // Navigate to the results page with the current state
    };

    // If time is up or questions haven't been loaded, render nothing
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