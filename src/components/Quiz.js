import React, { Component } from "react";
import Question from "./Question";
import Summary from "./Summary";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { goToPrevQuestion, initializeQuestions } from "../actions";
import { Redirect } from "react-router-dom";
import SummaryContainer from "../containers/SummaryContainer";
import QuestionContainer from "../containers/QuestionContianer";
import axios from "axios";

class Quiz extends Component {
  componentWillMount() {
    axios.get("https://ancient-sierra-53701.herokuapp.com/").then(response => {
      let data = response.data;
      let quizState = {
        questions: data.questions.slice(),
        config: data,
        initializedQuestions: {},
        currentQuestion: 0,
        isStartedOver: true,
        answeredQuestions: [-1],
        isSummaryShown: false
      };
      this.props.updateQuestions(quizState.questions);
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

    content = (
      <div>
        <Card style={style.bg}>
          <CardContent>
            <Typography>
              <h5 style={headerstyle} className="headerqno">
                Question Number :- {this.props.currentQuestion + 1}
              </h5>
            </Typography>
          </CardContent>
          <CardActions>
            <QuestionContainer />
            <br />
          </CardActions>
        </Card>

        <div className="buttonsparent">
          <button
            className="buttonnext btn btn-primary"
            onClick={() => this.props.goToNextQuestion()}
          >
            Next
          </button>
          <button
            className="buttonprev btn btn-primary"
            onClick={() => this.props.goToPrevQuestion()}
          >
            Prev
          </button>
        </div>
      </div>
    );

    if (
      this.props.questions &&
      this.props.currentQuestion + 1 === this.props.questions.length &&
      this.props.answeredQuestions.length === this.props.questions.length
    ) {
      return <Redirect to={"/summary"} />;
    }

    return <div className="parentsummary">{content}</div>;
  }
}

export default Quiz;
