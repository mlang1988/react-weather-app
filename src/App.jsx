import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/mlang1988"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mona Lang
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mlang1988/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub and hosted on{" "}
          <a
            href="https://illustrious-crisp-7b0983.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
