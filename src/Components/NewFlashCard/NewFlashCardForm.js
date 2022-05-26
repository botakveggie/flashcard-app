import { useState, useRef } from "react";
import BlueButton from "../UI/BlueButton";
import styles from "./NewFlashCardForm.module.css";
import RedButton from "../UI/RedButton";

const NewFlashCardForm = (props) => {
  const enteredQuestionRef = useRef();
  const enteredAnswerRef = useRef();
  const [questionEmpty, setQuestionEmpty] = useState(false);
  const [answerEmpty, setAnswerEmpty] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQuestion = enteredQuestionRef.current.value;
    const enteredAnswer = enteredAnswerRef.current.value;
    // upon form submission, take the values stored by the reference pointers as the entered qna
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
      id: Math.random().toString(),
    };
    // resets boxes and sends object up through a prop
    props.onSaveFormData(flashcardData);
    enteredAnswerRef.current.value = '';
    enteredQuestionRef.current.value = '';
    props.onCancel();
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
            className={questionEmpty && styles.invalid}
            placeholder='Question'
            ref={enteredQuestionRef}
          />
        </div>
        <div
          className={`${styles["form__control"]}  ${
            answerEmpty && styles.invalid
          }`}
        >
          <input
            type="text"
            placeholder="Answer"
            ref={enteredAnswerRef}
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
