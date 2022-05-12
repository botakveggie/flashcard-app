import "./FlashCard.css";
import Answer from "./Answer";
import Card from "./Card";
import BlueButton from "../UI/BlueButton";

const FlashCard = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!!')
  }
  return (
    <Card className="flash-card">
      <h2>Question: {props.qn}</h2>
      <Answer answer={props.ans} />
      <BlueButton onClick={clickHandler} className='fun-button'>fun button</BlueButton>
      <div className="date-added">{props.date.toDateString()}</div>
    </Card>
  );
}

export default FlashCard;
