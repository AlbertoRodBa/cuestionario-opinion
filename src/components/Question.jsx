function Question({ question, options, onChange, selectedAnswer }) {
    return (
      <div className="question">
        <h3>{question}</h3>
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    );
  }
  
  export default Question;
  