import React, { Component } from "react";
import "../index.css";

class Question extends Component {
  onSelect(questionIndex, optionIndex) {
    const questions = this.props.questions.slice();
    questions[questionIndex].user_answer = optionIndex;
    this.props.answerTheQuestion(questionIndex);
    this.props.updateQuestions(questions);
  }

  handleClick(option) {
    this.onSelect(this.props.currentQuestion, option);
    this.props.goToNextQuestion();
  }
  renderOptions() {
    if (this.props.questions[this.props.currentQuestion]) {
      const optionList = this.props.questions[
        this.props.currentQuestion
      ].options.map((option, index) => {
        return (
          <Option
            key={index}
            label={option.label}
            onClick={() => {
              this.handleClick(index);
            }}
          />
        );
      });
      return optionList;
    }
  }
  render() {
    var parentcard = {
      background: "white",
      color: "black"
    };
    return (
      <div className="card" id="parent-card" style={parentcard}>
        <div className="card-header">
          <ul className="list-group list-group-flush">
            <li>
              {this.props.questions &&
                this.props.questions[this.props.currentQuestion] &&
                this.props.questions[this.props.currentQuestion].label}
            </li>
          </ul>
        </div>
        {this.renderOptions()}
      </div>
    );
  }
}

function Option(props) {
  return (
    <div>
      <div className="card-custom">
        <ul className="list-group list-group-flush">
          <li>
            <span onClick={props.onClick}>
              <span>{props.label}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Question;
