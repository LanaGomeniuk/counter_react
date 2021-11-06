import React, { Component } from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="counter">
        <h1 className="count">{this.state.count}</h1>
        <button className="btn-count" onClick={this.increment}>
          increment
        </button>
        <button className="btn-count" onClick={this.decrement}>
          decrement
        </button>
      </div>
    );
  }
}

export default ClassCounter;
