function QuestionCard(props) {
  return (
    <div className="question-card">
      <h2>{props.question}</h2>
      <ul>
        {props.options.map((opt, index) => (
          <li key={index} onClick={() => props.onAnswer(opt)}>
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;
