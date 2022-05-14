import { useState } from "react";
import BlueButton from "../UI/BlueButton";
import "./NewFlashCardForm.css";
import RedButton from "../UI/RedButton";

const NewFlashCardForm = (props) => {
  const [enteredQuestion, setEnteredQuestion] = useState("");
  const [enteredAnswer, setEnteredAnswer] = useState("");
  const questionChangeHandler = (event) => {
    setEnteredQuestion(event.target.value);
  };
  const answerChangeHandler = (event) => {
    setEnteredAnswer(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const flashcardData = {
      question: enteredQuestion,
      answer: enteredAnswer,
      date: new Date()
    };
    // console.log(flashcardData);
    props.onSaveFormData(flashcardData);
    setEnteredQuestion('');
    setEnteredAnswer('');
  };

  // console.log("new form")
  return (
    <form onSubmit={submitHandler}>
      <h1>New FlashCard! 😊 </h1>
      <div className="form__controls">
        <div className="form__control">
          {/* <label>Question</label> */}
          <input type="text" value={enteredQuestion} 
          onChange={questionChangeHandler} 
          placeholder='Question' />
        </div>
        <div className="form__control">
          {/* <label>Answer</label> */}
          <input type="text" value={enteredAnswer} 
          onChange={answerChangeHandler} 
          placeholder='Answer' />
          </div>
      </div>
      <div className="new-flashcard__actions">
        <BlueButton className='buttons'  type="submit" buttonName='Add FlashCard' />
        <RedButton  className='buttons' onClick={props.onCancel} buttonName='Cancel'/>
      </div>
    </form>
  );
};

export default NewFlashCardForm;
