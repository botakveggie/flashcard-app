import { useState } from "react";
import BlueButton from "../UI/BlueButton";
import styles from "./NewFlashCardForm.module.css";
import RedButton from "../UI/RedButton";

const NewFlashCardForm = (props) => {
  const [enteredQuestion, setEnteredQuestion] = useState("");
  const [enteredAnswer, setEnteredAnswer] = useState("");
  const [questionEmpty, setQuestionEmpty] = useState(false);
  const [answerEmpty, setAnswerEmpty] = useState(false);

  const questionChangeHandler = (event) => {
    setEnteredQuestion(event.target.value);
    if (enteredQuestion.trim().length > 0) {
      setQuestionEmpty(false);
    }
  };
  const answerChangeHandler = (event) => {
    setEnteredAnswer(event.target.value);
    if (enteredAnswer.trim().length > 0) {
      setAnswerEmpty(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Prevents adding flashcard if question or anwer is missing in form
    if ((enteredQuestion.trim().length === 0) && (enteredAnswer.trim().length === 0)) {
      setQuestionEmpty(true);
      setAnswerEmpty(true);
      return;
    } else if (enteredQuestion.trim().length === 0) {
      setQuestionEmpty(true);
      return;
    } else if (enteredAnswer.trim().length === 0) {
      setAnswerEmpty(true);
      return;
    }

    const flashcardData = {
      question: enteredQuestion,
      answer: enteredAnswer,
      date: new Date(),
    };
    // resets boxes and sends object up through a prop
    props.onSaveFormData(flashcardData);
    setEnteredQuestion("");
    setEnteredAnswer("");
  };

  // console.log("new form")
  return (
    <form onSubmit={submitHandler}>
      <div className={`${styles.title}`}>Add a new flashcard</div>
      <div className={styles.form__controls}>
        <div
          className={`${styles.form__control} ${
            questionEmpty && styles.invalid
          }`}
        >
          <input
            type="text"
            value={enteredQuestion}
            className={questionEmpty && styles.invalid}
            onChange={questionChangeHandler}
            placeholder="Question"
          />
        </div>
        <div
          className={`${styles["form__control"]}  ${
            answerEmpty && styles.invalid
          }`}
        >
          <input
            type="text"
            value={enteredAnswer}
            onChange={answerChangeHandler}
            placeholder="Answer"
          />
        </div>
      </div>
      <div className={`${styles["new-flashcard__actions"]}`}>
        <BlueButton
          className={styles.buttons}
          type="submit"
          buttonName="Add FlashCard"
        />
        <RedButton
          className={styles.buttons}
          onClick={props.onCancel}
          buttonName="Cancel"
        />
      </div>
    </form>
  );
};

export default NewFlashCardForm;
