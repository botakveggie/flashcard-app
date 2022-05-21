import ReactDOM from "react-dom";

import "./NewFlashCard.css";
import NewFlashCardForm from "./NewFlashCardForm";
import Card from "../FlashCard/Card";

const Backdrop = (props) => {
  // since this `props.toggle` is called in this function, the portal element MUST have a prop named `toggle`
  return <div className="backdrop" onClick={props.toggle}></div>;
};

const ModalOverlay = (props) => {
  // since the following props are called in the function, they MUST be provided in the portal element
  const { onAddFlashCard, toggle, ...other } = props;
  return (
    <Card {...other} className="new-flashcard">
      <NewFlashCardForm onSaveFormData={onAddFlashCard} onCancel={toggle} />
    </Card>
  );
};

const NewFlashCard = (props) => {
  const { onAddFlashCard, toggle, ...other } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggle={toggle} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onAddFlashCard={onAddFlashCard}
          toggle={toggle}
          {...other}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default NewFlashCard;
