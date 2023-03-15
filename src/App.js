import React from "react";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import Social from "./components/Social/Social";
import Video from "./components/Video/Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Video />
      <div className="container">
        <div className="centered">
          <h1>
            COMPPEC '23
            <br />
            Coming Soon
          </h1>
          <Timer />
          <Optin />
          <Social />
        </div>
        <Preloader />
      </div>
    </div>
  );
}

export default App;
