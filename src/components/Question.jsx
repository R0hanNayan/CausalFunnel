import React from 'react'; 

const Question = ({ question, questionIndex, onAnswer }) => {
    // Combine correct and incorrect answers, then shuffle them for random order
    const options = [
        ...question.incorrect_answers, // Spread incorrect answers into the array
        question.correct_answer, // Add the correct answer
    ].sort(() => Math.random() - 0.5); // Shuffle the array using a random sort comparator

    return (
        <div className="question-container"> 
            <h2 className="question-h1">Question {questionIndex + 1}</h2> 
            {/* Display the question text, using dangerouslySetInnerHTML to render HTML-encoded content */}
            <p
                className="question-p"
                dangerouslySetInnerHTML={{ __html: question.question }}
            />
            <div className="options"> 
                {options.map((option, index) => (
                    <div className="options-item" key={index}> 
                        <span>⭕</span> 
                        <button
                            onClick={() => onAnswer(option)} // Trigger the onAnswer callback when an option is clicked
                            dangerouslySetInnerHTML={{ __html: option }} // Render HTML-encoded content for the option
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question; 
