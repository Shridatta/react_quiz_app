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
        <div className="card">
          <ul className="list-group list-group-flush">
            <li key={index}>
              <div>
                <span>
                  <em>{questionNumber})</em> {question.label}
                </span>
                <br />
                <span>{question.options[question.user_answer].label}</span>
              </div>
            </li>
          </ul>
        </div>
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
    var buttonstyle = {
      float: "right"
    };
    return (
      <div className="parentsummary">
        <div className="card">
          <div className="card-body">
            <div className="card-header">
              <h1>End of Quiz!!!</h1>
            </div>
            <br />
            <div>
              <p>
                Total Correct Answers:-{" "}
                <span>{this.calculateTotalMarks()}</span>
              </p>
            </div>
            <div>Your Answers : {this.displayAnswers()}</div>
            <button
              className="btn btn-primary"
              onClick={this.reset}
              style={buttonstyle}
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
