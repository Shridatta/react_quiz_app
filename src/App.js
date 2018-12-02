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
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">React Quiz</span>
        </nav>
        <div className="content">
          <p>Click Begin to Take the React Quiz !!!</p>

          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.start();
              }}
            >
              Begin
            </button>
          </div>
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
