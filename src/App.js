import "./App.css";
import { Component, useState } from "react";

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

  const addFlashCardHandler = (flashCardData) => {
    setQnas((prevQnas) => {
      console.log(flashCardData);
      return [flashCardData, ...prevQnas];
    });
  };
  const [seen, setSeen] = useState(false);
  const toggleSeen = () => {
    setSeen(!seen);
  };

  return (
    <div>
      <div className="App">
        <div className="App-header">
          <div className="App-header-main">Hello World!</div>
          <div className="App-header-instructions">Use ↑ and ↓ to move!</div>
        </div>
        <div className="main">
          <MainPage items={qnas} />
          <BottomBar onClick={toggleSeen} />
          {seen ? (
            <NewFlashCard
              onAddFlashCard={addFlashCardHandler}
              toggle={toggleSeen}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
