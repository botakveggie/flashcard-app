import "./MainPage.css";
import FlashCard from "../FlashCard/FlashCard";

const MainPage = (props) => {
  var { children, items, onDelFlashCard, ...other } = props;
  const qnas = items;

  return (
    <div className="MainPage" {...other}>
      {qnas.length === 0 ? (
        <h1 className="empty">No flashcards found</h1>
      ) : (
        qnas.map((flashcard) => (
          <FlashCard
            question={flashcard.question}
            answer={flashcard.answer}
            date={flashcard.date}
            key={flashcard.id}
            id={flashcard.id}
            onDel={onDelFlashCard}
          />
        ))
      )}
    </div>
  );
};

export default MainPage;
