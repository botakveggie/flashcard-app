import "./MainPage.css";
import FlashCard from "../FlashCard/FlashCard";

const MainPage = (props) => {
  var { children, items, onDelFlashCard, ...other } = props;
  const qnas = items;

  return (
    <div className="MainPage" {...other}>
      {qnas.map((flashcard) => (
        <FlashCard
          question={flashcard.question}
          answer={flashcard.answer}
          date={flashcard.date}
          key={flashcard.id}
          id={flashcard.id}
          onDel={onDelFlashCard}
        />
      ))}
      {/* <FlashCard qn={qnas[0].qn} ans={qnas[0].ans} date={qnas[0].date} />
      <FlashCard qn={qnas[1].qn} ans={qnas[1].ans} date={qnas[1].date} />
      <FlashCard qn={qnas[2].qn} ans={qnas[2].ans} date={qnas[2].date} /> */}
    </div>
  );
};

export default MainPage;
