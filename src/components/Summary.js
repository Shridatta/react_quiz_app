import React, { Component } from "react";

class Summary extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.questions,
      totalmarks: props.totalmarks,
      reset: props.reset
    };
    this.reset = this.reset.bind(this);
  }
  reset() {
    this.state.reset();
  }
  displayAnswers() {
    return this.state.data.map((question, index) => {
      let questionNumber = index + 1;
      return (
        <li key={index}>
          <div>
            <span>
              <em>{questionNumber})</em> {question.label}
            </span>
            <br />
            <span>{question.options[question.user_answer].label}</span>
          </div>
        </li>
      );
    });
  }
  calculateTotalMarks() {
    let total = 0;
    for (let i = 0, len = this.state.data.length; i < len; i++) {
      let question = this.state.data[i];
      total += question.options[question.user_answer].value;
    }
    return total;
  }
  render() {
    return (
      <div>
        <h1>Congrats!</h1>
        <div>
          <p>
            Total Correct Answers:- <span>{this.calculateTotalMarks()}</span>
          </p>
        </div>
        <ul>{this.displayAnswers()}</ul>
        <button onClick={this.reset}>Start Over</button>
      </div>
    );
  }
}

export default Summary;
