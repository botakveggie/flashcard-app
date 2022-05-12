import "./FlashCard.css";
import Answer from "./Answer";
import Card from "./Card";
import BlueButton from "../UI/BlueButton";
import {useState} from 'react';

const FlashCard = (props) => {
const [funbutton, setFunbutton] = useState('fun button')
const sentences = ['fun button', 'are you having fun!!!', 'hahaha stop tickling me!']
  const clickHandler = () => {
    const newName = sentences[Math.floor(Math.random() * sentences.length)]
    setFunbutton(newName);
    console.log('are you having fun :D:D:D ');
  }
  return (
    <Card className="flash-card">
      <h2>Question: {props.qn}</h2>
      <Answer answer={props.ans} />
      <BlueButton onClick={clickHandler} className='fun-button'>{funbutton}</BlueButton>
      <div className="date-added">{props.date.toDateString()}</div>
    </Card>
  );
}

export default FlashCard;
