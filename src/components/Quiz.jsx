import { useState } from "react";

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
        answer: "Hydrogen"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        answer: "Diamond"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
    }
];

const Quiz =()=>{
    
    const [optionSelected, setOptionSelected]= useState("");
    const [userAnswers, setUserAnswers]= useState(
        Array.from({length: quizData.length})
    );


    const [currentQuestion, setCurrentQuestion]= useState(0);



    const handleSelectedOption=(option, index)=>{
        setOptionSelected(option);
    
        const newUserAnswers=[...userAnswers];
        newUserAnswers[currentQuestion]= index;
        setUserAnswers(newUserAnswers);

    };

    const goNext =()=>{
        setCurrentQuestion((prev) => prev +1) ;
    }
    const goBack =()=>{
        if(currentQuestion>0){
            setCurrentQuestion((prev)=>prev -1);
        }
        
    }


    return  (
    <div>
        <h2>Câu {currentQuestion +1}</h2>
        <p className="question">{quizData[currentQuestion].question}</p>
        
        {quizData[currentQuestion].options.map((option,index)=>(
            <button 
                key={option}
                className={`option ${optionSelected === option ?"selected":""}`}
                disabled={!!optionSelected && optionSelected !== option}
                onClick={()=>handleSelectedOption(option,index)}
            >
                {option}
            </button>
        ))}

        <p>Câu trả lời của bạn: {optionSelected} </p>

        {
            optionSelected === quizData[currentQuestion].answer ? (
                <p className="correct-answer">Câu trả lời của bạn chính xác</p>
            ) : (
                <p className="incorrect-answer">Câu trả lời của bạn chưa chính xác</p>
            )
        }

        

        <div className="nav-buttons">
            <button onClick={goBack}>Quay Lại</button>
            <button onClick={goNext}>Tiếp Theo</button>
        </div>

    </div>
);
       
};

export default Quiz;