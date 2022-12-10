import React from "react";
import "./App.css";
import IntroFrame from "./IntroFrame";
import TornStickyNote from "./TornStickyNote";

function App() {
  return (
    <div>
      <IntroFrame />
      <div className="TornStickyNotes">
        <TornStickyNote position="left" />
        <TornStickyNote position="right" />
      </div>
    </div>
  );
}

export default App;
