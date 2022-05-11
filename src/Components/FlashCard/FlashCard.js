import "./FlashCard.css";
import Answer from "./Answer";
import Card from "./Card";

const FlashCard = (props) => {
  const month = props.date.getMonth();
  const year = props.date.getFullYear();
  return (
    <Card className="flash-card">
      <h2>Question: {props.qn}</h2>
      <Answer answer={props.ans} />
      <div className="date-added">{props.date.toDateString()}</div>
    </Card>
  );
}

export default FlashCard;
