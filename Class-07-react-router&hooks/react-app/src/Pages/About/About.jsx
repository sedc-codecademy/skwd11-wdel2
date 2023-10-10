import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  /**
   * componentDidMount will execute only once, once the component is born/initialized
   */
  componentDidMount() {
    console.log("COMPONENT DID MOUNT, COMPONENT IS BORN");
    // make my api call here to get the products
  }

  /**
   * componentDidUpdate will execute once the component state changes or recieves props
   */
  componentDidUpdate() {
    console.log("COMPONENT DID UPDATE");
  }

  /**
   * componentWillUnmount will execute when the component is going to get destroyed
   */
  componentWillUnmount() {
    console.log("COMPONENT WILL GET DESTROYED");
  }

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <h2>Count is: {this.state.counter}</h2>
        {/* wrap this into handler function/method */}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
        <button>Decrement</button>
      </div>
    );
  }
}

export default About;
