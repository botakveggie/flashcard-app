import styles from "./App.module.css";
import { useState } from "react";

/* React Imports */
import BottomBar from "./Components/UI/BottomBar";
import NewFlashCard from "./Components/NewFlashCard/NewFlashCard";
import MainPage from "./Components/UI/MainPage";

/* Main App */
const App = () => {
  const INITIAL_QNAS = [
    {
      id: 0,
      question: "You can move up and down using the arrow keys!",
      answer: "HELLO I AM A FOX",
      date: new Date(2022, 5, 1),
    },
    {
      id: 1,
      question: "Hovering over the answer box allows you to display the answer",
      answer: "POK POK POK",
      date: new Date(2022, 5, 2),
    },
    {
      id: 2,
      question: "Try adding a question on your own!",
      answer: "WOOF WOOF <3",
      date: new Date(2022, 5, 3),
    },
  ];

  const [qnas, setQnas] = useState(INITIAL_QNAS);
  const [seen, setSeen] = useState(false);

  const addFlashCardHandler = (flashCardData) => {
    setQnas((prevQnas) => {
      console.log(flashCardData);
      return [flashCardData, ...prevQnas];
    });
  };
  const delFlashCardHandler = (removeId) => {
    console.log('removing from app.js: '+ removeId);
    setQnas((prevQnas) => {
      return prevQnas.filter((obj) => obj.id !== removeId);
    });
  };

  const toggleSeen = () => {
    "Function to toggle visibility of New FlashCard UI";
    setSeen(!seen);
  };

  const keydownHandler = (event) => {
    "Function to handle keystroke events for shortcuts";
    if (event.keyCode === 27) {
      // keyCode for `Esc` 27
      console.log("close the window...");
      setSeen(false);
    }
    if (event.keyCode === 67) {
      // keyCode for `C` 67
      setSeen(true);
    }
    if (event.keyCode === 46) {
      // keyCode for `Del` 46
      console.log("sorry, delete not implemented yet");
    }
  };

  const announceClick = () => {
    console.log("you have clicked the mouse");
  };
  return (
    <div onClick={announceClick} onKeyDown={keydownHandler}>
      <div className={styles.App} onKeyDown={keydownHandler}>
        <div className={styles.AppHeader}>
          <div className={styles.AppHeaderMain}>FlashCard</div>
          <div className={styles.AppHeaderInstructions}>
            Use ↑ and ↓ to move!
          </div>
        </div>
        <div className={styles.main} onKeyDown={keydownHandler}>
          {seen && (
            <NewFlashCard
              onAddFlashCard={addFlashCardHandler}
              onKeyDown={keydownHandler}
              toggle={toggleSeen}
            />
          )}
          <MainPage items={qnas} onKeyDown={keydownHandler} onDelFlashCard={delFlashCardHandler} />
          <BottomBar onClick={toggleSeen} onKeyDown={keydownHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
