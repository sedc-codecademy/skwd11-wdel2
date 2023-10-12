import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (operation) => {
    if (operation === "INCREMENT") {
      setCount(count + 1);
    }
    if (operation === "DECREMENT") {
      setCount(count - 1);
    }
  };

  /**
   * effect with empty deps. list []
   * mimics componentDidMount
   *
   * - it executes only once, once the component is born/initialized
   */
  useEffect(() => {
    console.log("Effect triggered once the component is born.");

    const interval = setInterval(() => {
      console.log("Tick-Tack");
    }, 1000);

    // componentWillUnmount =) component will get DESTROYED
    return () => {
      console.log("We destroy the component");

      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log("We destroy the compoennt bla bla");
    };
  }, []);

  /**
   * effect with value in the deps. list [count]
   * mimicts componentDidUpdate
   *
   * - it executes whenever the component is BORN/INITIALIZED and whenever
   * the VALUE OF the DEPS. LIST CHANGES
   */
  useEffect(() => {
    // i want to execute this logic, when count prop value changes
    console.log(
      "Effect triggered once the component is BORN and value of deps. list  changes"
    );
  }, [count]);

  /**
   * this effect will run every time
   *
   * !IMPORTANT => be careful!
   */
  useEffect(() => {
    console.log("Effect without deps. list");
  });

  return (
    <div>
      <h1>Our counter</h1>
      <h1>{count}</h1>
      <button onClick={() => handleCount("INCREMENT")}>Increment</button>
      <button onClick={() => handleCount("DECREMENT")}>Decrement</button>
    </div>
  );
};
