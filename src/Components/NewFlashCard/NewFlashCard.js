import "./NewFlashCard.css";
import NewFlashCardForm from "./NewFlashCardForm";
import Card from "../FlashCard/Card";

const NewFlashCard = (props) => {
  const { onAddFlashCard, toggle, ...other } = props;
  const saveFormDataHandler = (enteredFormData) => {
    const formData = {
      ...enteredFormData,
      id: Math.random().toString(),
    };
    // console.log(formData);
    onAddFlashCard(formData);
  };

  const clickHandler = () => {
    toggle();
    console.log("bruh");
  };

  return (
    <div className="modal">
      <div className="backdrop" onClick={clickHandler}></div>
      <Card {...other} className="new-flashcard">
        <NewFlashCardForm
          onSaveFormData={saveFormDataHandler}
          onCancel={clickHandler}
        />
      </Card>
    </div>
  );
};

export default NewFlashCard;
