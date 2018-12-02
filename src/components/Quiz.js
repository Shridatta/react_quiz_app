import React, { Component } from "react";
import config from "../quiz-data.json";
import Question from "./Question";
import Summary from "./Summary";

class Quiz extends Component {
  constructor(props) {
    super();
    this.state = config; // the loaded json data.

    this.onSelect = this.onSelect.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  initialize() {
    const questions = this.state.questions.slice();
    questions.map(question => {
      return (question.user_answer = null);
    });
    this.setState({ questions: questions });
  }

  onSelect(questionIndex, optionIndex) {
    const questions = this.state.questions.slice();
    questions[questionIndex].user_answer = optionIndex;
    this.setState({
      questions: questions
    });
  }
  render() {
    let content;
    var parentcard = {
      background: "#388ac1"
    };

    for (let i = 0, len = this.state.questions.length; i < len; i++) {
      let question = this.state.questions[i];

      if (
        typeof question.user_answer === "undefined" ||
        question.user_answer === null
      ) {
        let questionNumber = i + 1,
          questionCount = this.state.questions.length;
        content = (
          <div>
            <div className="card" style={parentcard}>
              <div className="card-body">
                <Question
                  key={i}
                  index={i}
                  options={question.options}
                  label={question.label}
                  onSelect={this.onSelect}
                />
                <div className="pagenumber">
                  {questionNumber} / {questionCount}
                </div>
              </div>
            </div>
          </div>
        );

        break;
      }
    }
    if (!content) {
      content = (
        <Summary
          questions={this.state.questions}
          reset={this.initialize}
          totalmarks={this.state.totalmarks}
        />
      );
    }
    return <div>{content}</div>;
  }
}

export default Quiz;
