import "./NewFlashCardForm.css";

const NewFlashCardForm = () => {
  // console.log("new form")
  return (
      <form>
        <div className="form__controls">
          <div className="form__control">
            <label>Question</label>
            <input type="text" />
          </div>
          <div className="form__control">
            <label>Answer</label>
            <input type="text" />
          </div>
        </div>
        <div className="new-flashcard__actions">
          <button type="submit">Add FlashCard</button>
        </div>
      </form>
  );
};

export default NewFlashCardForm;
