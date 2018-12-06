import React, { Component } from "react";
import config from "../quiz-data.json";
import Question from "./Question";
import Summary from "./Summary";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

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

    const style = {
      bg: {
        backgroundColor: "teal",
        color: "white"
      },
      h2: {
        color: "white"
      },
      h5: {
        color: "white"
      }
    };

    const headerstyle = {
      color: "white"
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
            <Card style={style.bg}>
              <CardContent>
                <Typography>
                  <h5 style={headerstyle} className="headerqno">
                    Question Number :- {questionNumber}
                  </h5>
                </Typography>
              </CardContent>
              <CardActions>
                <Question
                  key={i}
                  index={i}
                  options={question.options}
                  label={question.label}
                  onSelect={this.onSelect}
                />
                <br />
              </CardActions>
            </Card>
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
    return <div className="parentsummary">{content}</div>;
  }
}

export default Quiz;
