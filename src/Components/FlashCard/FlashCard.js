import "./FlashCard.css";
import Answer from "./Answer";
import Card from "./Card";
import BlueButton from "../UI/BlueButton";
import { useState } from "react";
import RedButton from "../UI/RedButton";

const FlashCard = (props) => {
  const {question, answer, date, id, onDel, ...other} = props;
  const [funbutton, setFunbutton] = useState("fun button");
  const sentences = [
    "fun button",
    "are you having fun!!!",
    "hahaha stop tickling me!",
  ];
  const clickHandler = () => {
    const newName = sentences[Math.floor(Math.random() * sentences.length)];
    setFunbutton(newName);
    console.log("are you having fun :D:D:D ");
    console.log(question);
  };

  const delHandler = () => {
    console.log('deleting flashcard with id: ' + id);
    onDel(id);
  }

  return (
    <Card className="flash-card">
      <div className="topbuttons">
        <BlueButton buttonName="=" className="close-flash" />
        <RedButton buttonName="×" className="close-flash" onClick={delHandler}/>
      </div>
      <h2>Question: {question}</h2>
      <Answer answer={answer} />
      <BlueButton onClick={clickHandler} className="fun-button">
        {funbutton}
      </BlueButton>
      <div className="date-added">{date.toDateString()}</div>
    </Card>
  );
};

export default FlashCard;
