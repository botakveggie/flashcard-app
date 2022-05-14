import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";

/* React Imports */
import FlashCard from "./Components/FlashCard/FlashCard";
import BottomBar from "./Components/UI/BottomBar";
import NewFlashCard from "./Components/NewFlashCard/NewFlashCard";
import MainPage from "./Components/UI/MainPage";

/* Main App */
const App = () => {
  const qnas = [
    {
      id: 0,
      qn: "What Does the Fox Say?",
      ans: "HELLO I AM A FOX",
      date: new Date(2022, 5, 1),
    },
    {
      id: 1,
      qn: "What Does the Chicken Say?",
      ans: "POK POK POK",
      date: new Date(2022, 5, 2),
    },
    {
      id: 2,
      qn: "What Does the Dog Say?",
      ans: "WOOF WOOF <3",
      date: new Date(2022, 5, 3),
    },
  ];
  const addFlashCardHandler = (flashCardData) => {
    console.log(flashCardData);
  };
  const [seen, setSeen] = useState(true)
  const toggleSeen = () => {
    setSeen(!seen)
  };

  return (
    <div>
      <div className="App">
        <div className="App-header">
          <div className="App-header-main">Hello World!</div>
          <div className="App-header-instructions">Use ↑ and ↓ to move!</div>
        </div>
        <div className="main">
          <MainPage>
            <FlashCard qn={qnas[0].qn} ans={qnas[0].ans} date={qnas[0].date} />
            <FlashCard qn={qnas[1].qn} ans={qnas[1].ans} date={qnas[1].date} />
            <FlashCard qn={qnas[2].qn} ans={qnas[2].ans} date={qnas[2].date} />
          </MainPage>
          <BottomBar onClick={toggleSeen}/>
          {seen ? <NewFlashCard onAddFlashCard={addFlashCardHandler} toggle={toggleSeen} /> : null}
        </div>
      </div>
    </div>
  );
};

export default App;
