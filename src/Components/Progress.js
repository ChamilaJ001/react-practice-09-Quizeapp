function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        style={{ borderRadius: "100px" }}
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
