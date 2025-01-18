import React from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation(); // Get the location object which contains state passed from the Quiz component
  const { questions, answers } = location.state || {}; // Destructure questions and answers from location.state, if available
  const navigate = useNavigate(); 

  // Function to calculate the score based on correct answers
  const calculateScore = () =>
    questions.filter( // Filter out the questions where the user's answer matches the correct answer
      (q, index) => answers[index] === q.correct_answer
    ).length; // Return the number of correct answers

  return (
    <div className="results-container"> 
      <h1 className="results-h1">Quiz Result</h1> 
      <p className="results-score">
        Score: {calculateScore()} / {questions.length} 
      </p>

      <button className="results-btn" onClick={() => navigate('/quiz')}>Restart Quiz</button>
      
      <ul className="results-list">
        {questions.map((q, index) => (
          <li key={index}>
            {/* Display the question with HTML content */}
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
