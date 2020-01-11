import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  reset = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    let { count } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <h1>{count}</h1>
          <button className="btn" onClick={this.increment}>
            Increment
          </button>
          <button className="btn" onClick={this.decrement}>
            Decrement
          </button>
          <button className="btn" onClick={this.reset}>
            Reset
          </button>
        </div>
        <footer>
          <div className="footer">
            <h3>Step</h3>
            <button className="active">2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <div className="footer">
            <h3>Max</h3>
            <button>15</button>
            <button>20</button>
            <button>25</button>
            <button>30</button>
          </div>
        </footer>
      </div>
    );
  }
}
