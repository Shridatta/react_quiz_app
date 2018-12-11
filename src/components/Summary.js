import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isSummaryShown, startOverHandleChange } from "../actions/index";
import Redirect from "react-router-dom/es/Redirect";

class Summary extends Component {
  displayAnswers() {
    return this.props.questions.map((question, index) => {
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
    for (let i = 0, len = this.props.questions.length; i < len; i++) {
      let question = this.props.questions[i];
      total += question.options[question.user_answer].value;
    }
    return total;
  }

  startOver() {
    this.props.isSummaryShown();
    this.props.startOverHandleChange();
  }

  render() {
    if (this.props.isStartedOver === true && this.props.isSummaryShown === true)
      return <Redirect to={"/"} />;

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
            <Link onClick={() => this.startOver()} to={"/"}>
              <button
                className="btn btn-primary"
                onClick={() => this.props.startOver()}
                style={buttonstyle}
              >
                Start Over
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
