import { useState } from "react";
import "./index.css";

function App() {
  const [colorSelect, setColorSelect] = useState("orangered");
  const [visibility, setVisibility] = useState(true);
  return (
    <div className="App">
      <div className="main-container">
        <header>
          <h3>TRAPEZIUM</h3>
        </header>
        <div className="outer-circle" style={{ backgroundColor: colorSelect }}>
          <div className="inner-circle"></div>
        </div>

        <footer>
          <div
            className="arrow"
            onClick={() => setVisibility(!visibility)}
            style={{ transform: `rotate(${visibility ? "0deg" : "90deg"})` }}
          ></div>
          <div
            className="colors"
            style={{
              opacity: visibility ? 1 : 0,
              transform: `translateX(${visibility ? "10px" : "0px"})`,
            }}
          >
            <div
              className="color"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColorSelect("blue")}
            ></div>
            <div
              className="color"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColorSelect("pink")}
            ></div>
            <div
              className="color"
              style={{ backgroundColor: "green" }}
              onClick={() => setColorSelect("green")}
            ></div>
            <div
              className="color"
              style={{ backgroundColor: "orangered" }}
              onClick={() => setColorSelect("orangered")}
            ></div>
            <div
              className="color"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColorSelect("purple")}
            ></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
