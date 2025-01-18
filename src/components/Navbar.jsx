import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 

const Navbar = ({ questions, currentQuestion, answers }) => {
    const navigate = useNavigate();

    // Handles navigation to a specific question
    const handleQuestionClick = (index) => {
        navigate('/quiz', { state: { questionIndex: index } }); 
        // Pass the question index in the navigation state to display the selected question
    };

    // Determines the CSS class for a question based on its status
    const getStatusClass = (index) => {
        if (answers[index]) {
            return 'attempted'; // Question has been answered
        } else if (index <= currentQuestion) {
            return 'visited'; // Question has been visited but not answered
        }
        return ''; // Default status for unvisited questions
    };

    return (
        <div className="navbar"> 
            <ul>
                {/* Loop through questions to render a navigation item for each */}
                {questions.map((question, index) => (
                    <li
                        key={index} 
                        onClick={() => handleQuestionClick(index)} // Navigate to the selected question on click
                        className={getStatusClass(index)} // Apply dynamic CSS class based on question status
                    >
                        {index + 1} {/* (1-based index) */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;