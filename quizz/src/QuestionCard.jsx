function QuestionCard(props) {
  return (
    <div className="question-card">
      <h2>{props.question}</h2>
      <ul>
        {props.options.map((opt, index) => {
          // Determine style
          let className = "";
          if (props.selectedAnswer) {
            if (opt === props.correct) {
              className = "correct";
            } else if (opt === props.selectedAnswer) {
              className = "wrong";
            }
          }

          return (
            <li
              key={index}
              className={className}
              onClick={() => !props.selectedAnswer && props.onAnswer(opt)}
            >
              {opt}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuestionCard;
