import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [value, setValue] = useState(1);
  const [maxvalue, setMaxvalue] = useState(1000);
  const [error, setError] = useState("");
  useEffect(() => {
    if (counter < maxvalue || counter > value) {
      setError("");
    }
  }, [counter]);
  const handleClick1 = () => {
    if (counter < maxvalue) {
      setCounter(counter + 1);
    } else {
      setError("Reached maximum set value");
    }
  };

  const handleClick2 = () => {
    if (counter > value || (counter > 1 && value === 1)) {
      setCounter(counter - 1);
    } else {
      setError("Reached minimum set value");
    }
  };
  const handleStartchange = (e) => {
    if (e.target.value !== "") {
      setValue(parseInt(e.target.value));
    } else {
      setValue(1);
    }
  };
  const handleStopchange = (e) => {
    if (e.target.value !== "") {
      setMaxvalue(parseInt(e.target.value));
    } else {
      setMaxvalue(1000);
    }
  };
  const handleSetvalue = () => {
    setCounter(value);
  };
  return (
    <div className="container">
      <section className="inputSection">
        <div className="inputvalues">
          <div className="first">
            <label>Start Value</label>
            <input
              type="text"
              id="svalue"
              name="svalue"
              onChange={handleStartchange}
            />
          </div>
          <div className="second">
            <label>Stop Value</label>
            <input
              type="text"
              id="evalue"
              name="evalue"
              onChange={handleStopchange}
            />
          </div>
        </div>
        <div className="update">
          <button onClick={handleSetvalue}>Set Values</button>
        </div>
      </section>
      <section className="counterContent">
        <div className="counterSection">
          <button className="buttonLeft" onClick={handleClick2}>
            -
          </button>
          <div
            className="content"
            contenteditable="true"
            onChange={handleStartchange}
          >
            {counter}
          </div>
          <button className="buttonRight" onClick={handleClick1}>
            +
          </button>
        </div>
      </section>
      <div className="errormessage">{error}</div>
    </div>
  );
};

export default App;
