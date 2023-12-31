import { useQuize } from "../context/QuizeContext";
import Options from "./Options";

function Question() {
  const { question } = useQuize();

  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
