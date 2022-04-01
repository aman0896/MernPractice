import React, { useState, useEffect } from "react";

function Homepage() {
  // Declare a new state variable count"
  const [count, setCount] = useState(0);
  const [isUpdate, setUpdate] = useState(false);

  const onBtnClick = (operation) => {
    if (operation === "add") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count > 0 && count <= 10) setUpdate(true);
    else setUpdate(false);
  }, [count]);

  return (
    <div className="homepage">
      {console.log("render")}
      <h1>Homepage</h1>
      <p>{count}</p>
      <p>Count Update {isUpdate.toString()}</p>
      <button onClick={() => onBtnClick("add")}>Increase</button>
      <button onClick={() => onBtnClick("subtract")}>Decrease</button>
    </div>
  );
}

export default Homepage;
