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
  },
  {
    question: "Which keyword is used to declare a constant variable in JavaScript?",
    options: ["let", "const", "var", "static"],
    correct: "const"
  },
  {
    question: "What is the output of: console.log(typeof null)?",
    options: ["object", "null", "undefined", "boolean"],
    correct: "object"
  },
  {
    question: "What will be the result of: console.log('5' - 2)?",
    options: ["3", "52", "NaN", "undefined"],
    correct: "3"
  },
  {
    question: "Which of these is a JavaScript data type?",
    options: ["string", "float", "character", "decimal"],
    correct: "string"
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "# comment", "/* comment"],
    correct: "// comment"
  },
  {
    question: "What is the output of: console.log(Boolean(0))?",
    options: ["true", "false", "0", "undefined"],
    correct: "false"
  },
  {
    question: "What does === compare in JavaScript?",
    options: ["Value only", "Type only", "Value and type", "Nothing"],
    correct: "Value and type"
  },
  {
    question: "Which array method adds an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()"
  }
];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds per question

   
  // When user selects an answer
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  // Move to next question
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  // Quiz finished
  if (currentQuestion >= questions.length) {
    return (
      <div>
        <h1>Quiz Finished 🎉</h1>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>🚀 React Quiz App</h1>
      <p>Score: {score}</p>

      <QuestionCard
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        correct={questions[currentQuestion].correct}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
      />

      {isAnswered && (
        <button onClick={handleNext}>Next Question ➡️</button>
      )}
    </div>
  );
}

export default App;
