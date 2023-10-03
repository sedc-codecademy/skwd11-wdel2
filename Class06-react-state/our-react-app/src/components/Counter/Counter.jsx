import { useState } from "react";

export const Counter = () => {
  // useState => react hook for state management

  /**
   * count => state property, and whenever it changes, react will re-render the component with the new value
   * setCount => is the function that changes the value of this state property.
   * useState(0) => the 0 is the default value of the state property.
   *
   * whenever the state prop. changes, react will detect those changes
   * and will trigger re-render, so we see the up-to-date UI
   */
  const [count, setCount] = useState(0);
  // let count = 0;

  // let message = "";
  const [message, setMessage] = useState("Hello");
  const [inputColor, setInputColor] = useState("#FFFF00");

  const handleIncrement = () => {
    // count += 1;
    if (count === 10) alert("Amigo count is 10, 10 tequalas are fine");

    setCount(count + 1);
    console.log("Increment count:", count);
  };

  const handleDecrement = () => {
    // count -= 1;
    if (count === 0) return; //early return
    setCount(count - 1);
    console.log("Decrement count:", count);
  };

  const handleChangeMessage = (event) => {
    const value = event.target.value;

    // message = value;
    setMessage(value);
    console.log(message);
  };

  const handleChangeColor = (event) => {
    const colorValue = event.target.value;

    setInputColor(colorValue);
  };

  return (
    <>
      <h2>Our counter is: {count}</h2>

      <button onClick={() => handleIncrement()}>INCREMENT</button>
      <button onClick={() => handleDecrement()}>DECREMENT</button>
      <hr />
      <section>
        <input type="text" onChange={(event) => handleChangeMessage(event)} />
        <input
          type="color"
          // We can directly use the set property function
          // but it is not good practice !!!
          // onChange={(event) => setInputColor(event.target.value)}
          onChange={(event) => handleChangeColor(event)}
        />
        <h3 style={{ color: inputColor }}>Message: {message}</h3>
      </section>
    </>
  );
};
