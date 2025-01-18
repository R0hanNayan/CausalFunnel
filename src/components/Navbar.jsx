import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ questions, currentQuestion, answers }) => {
    const navigate = useNavigate();

    const handleQuestionClick = (index) => {
        navigate('/quiz', { state: { questionIndex: index } });
    };

    const getStatusClass = (index) => {
        if (answers[index]) {
            return 'attempted';
        } else if (index <= currentQuestion) {
            return 'visited';
        }
        return '';
    };

    return (
        <div className="navbar">
            {/* <span>⬅️</span> */}
            <ul>
                {questions.map((question, index) => (
                    <li
                        key={index}
                        onClick={() => handleQuestionClick(index)}
                        className={getStatusClass(index)}
                    >
                        {index + 1}
                    </li>
                ))}
            </ul>
            {/* <span>➡️</span> */}
        </div>
    );
};

export default Navbar;
