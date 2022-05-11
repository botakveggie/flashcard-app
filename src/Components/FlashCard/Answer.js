import "./Answer.css";
import Card from "./Card";

const Answer = (props) => {
  return (
    <Card className="answer-box">
      <h2>Answer: </h2>
      <div className="answer">{props.answer}</div>
    </Card>
  );
}

export default Answer;
