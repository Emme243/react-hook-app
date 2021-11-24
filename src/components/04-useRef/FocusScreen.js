import React, { useRef } from "react";
import "../02-useEffect/effects.css";

const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Su nombre"
        className="form-control"
      ></input>
      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
