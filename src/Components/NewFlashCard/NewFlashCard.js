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
    console.log('bruh')
  }

  return (
    <Card className="new-flashcard">
      <NewFlashCardForm onSaveFormData = {saveFormDataHandler} onCancel={clickHandler}/>
    </Card>
  );
};

export default NewFlashCard;
