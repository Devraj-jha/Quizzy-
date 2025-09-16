import { useState } from "react";
import QuestionCard from "./QuestionCard";

function App() {
  const questions = [
    {
      question: "What is the output of console.log(typeof NaN)?",
      options: ["number", "NaN", "undefined", "object"],
      correct: "number"
    },
    {
      question: "What does this code print? console.log(2 + '2')",
      options: ["22", "4", "NaN", "error"],
      correct: "22"
    }
  ];

  // ✅ React State

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [ score, setScore] = useState(0);

  const handle_answer = answer => {
    if(answer === questions[currentQuestion].correct){
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);

  };

  if ( currentQuestion >= questions.length){
    return (
      <div>
        <h1>
          quizz done !!;
          
        </h1>
        <p>
          Your score: {score}/ {questions.length}
        </p>
      </div>
    )
  }
  return (
    <div>
      <h1>🚀 React Quiz App</h1>
      <p>Score: {score}</p>

      <QuestionCard
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handle_answer}
      />
    </div>
  ); 
}

export default App;
