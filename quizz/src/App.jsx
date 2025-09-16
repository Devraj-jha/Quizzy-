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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

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
