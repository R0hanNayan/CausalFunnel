import React from 'react';

const Question = ({ question, questionIndex, onAnswer }) => {
    const options = [
        ...question.incorrect_answers,
        question.correct_answer,
    ].sort(() => Math.random() - 0.5);

    return (
        <div className="question-container">
            <h2 className='question-h1'>Question {questionIndex + 1}</h2>
            <p className='question-p' dangerouslySetInnerHTML={{ __html: question.question }} />
            <div className="options">
                {options.map((option, index) => (
                    <div className='options-item'>
                        <span>⭕</span>
                        <button
                            key={index}
                            onClick={() => onAnswer(option)}
                            dangerouslySetInnerHTML={{ __html: option }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
