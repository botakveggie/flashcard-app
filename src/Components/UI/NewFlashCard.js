import "./NewFlashCard.css";
import NewFlashCardForm from "./NewFlashCardForm";
import Card from "../FlashCard/Card";

const NewFlashCard = (props) => {
  const saveFormDataHandler = (enteredFormData) => {
    
    const formData = {
      ...enteredFormData,
      id: Math.random().toString()
    };
    // console.log(formData);
    props.onAddFlashCard(formData);
  }

  const clickHandler = () => {
    props.toggle();
    console.log()
  }

  return (
    <Card className="new-flashcard">
      <NewFlashCardForm onSaveFormData = {saveFormDataHandler}/>
      <button onClick={clickHandler}>cancel</button>
    </Card>
  );
};

export default NewFlashCard;
