import React, { Component } from "react";
import Quiz from "./components/Quiz";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false
    };
  }

  showIntro() {
    return (
      <div>
        <div>
          <h1>Welcome to the React Quiz</h1>
          <p>React Questions</p>
        </div>
        <div>
          <button
            onClick={() => {
              this.start();
            }}
          >
            Begin
          </button>
        </div>
      </div>
    );
  }

  start() {
    this.setState({ started: true });
  }
  getContent() {
    if (!this.state.started) {
      return this.showIntro();
    }
    return <Quiz />;
  }
  render() {
    return <div>{this.getContent()}</div>;
  }
}

export default App;
