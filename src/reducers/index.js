import { combineReducers } from "redux";
import {
  ANSWER_THE_QUESTION,
  GO_TO_NEXT_QUESTION,
  GO_TO_PREV_QUESTION,
  INITIALIZE_QUESTIONS,
  START_OVER,
  START_OVER_HANDLE_CHANGE,
  UPDATE_QUESTIONS,
  IS_SUMMARY_SHOWN
} from "../actions/index";
import config from "../quiz-data.json";
//import {IS_SUMMARY_SHOWN} from "../actions";

const quizInitialState = {
  questions: config.questions.slice(),
  config,
  initializedQuestions: {},
  currentQuestion: 0,
  isStartedOver: true,
  answeredQuestions: [-1],
  isSummaryShown: false
};

function Quiz(state = quizInitialState, action) {
  switch (action.type) {
    case UPDATE_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload
      });

    case INITIALIZE_QUESTIONS:
      return Object.assign({}, state, {
        initializedQuestions: action.payload
      });

    case GO_TO_NEXT_QUESTION:
      if (
        state.currentQuestion + 1 === state.questions.length &&
        state.answeredQuestions.length !== state.questions.length
      ) {
        alert("You need to answer all questions!");
      }

      if (state.currentQuestion + 1 < state.questions.length)
        return Object.assign({}, state, {
          currentQuestion: state.currentQuestion + 1
        });
      else return state;

    case GO_TO_PREV_QUESTION:
      if (state.currentQuestion > 0)
        return Object.assign({}, state, {
          currentQuestion: state.currentQuestion - 1
        });
      else return state;

    case START_OVER:
      return Object.assign({}, quizInitialState, {});

    case START_OVER_HANDLE_CHANGE: {
      return Object.assign({}, state, {
        isStartedOver: !state.isStartedOver
      });
    }
    case ANSWER_THE_QUESTION: {
      let answered_questions = state.answeredQuestions.slice();
      let i = 0;
      let flag = false;
      for (i = 0; i < answered_questions.length; i++) {
        if (i === 0 && answered_questions[i] === -1) {
          answered_questions[i] = action.payload;
          break;
        } else if (answered_questions[i] === action.payload) {
          flag = false;
          break;
        } else {
          flag = true;
        }
      }

      if (flag) answered_questions[i] = action.payload;

      console.log(answered_questions);

      return Object.assign({}, state, {
        answeredQuestions: answered_questions
      });
    }
    case IS_SUMMARY_SHOWN:
      return Object.assign({}, state, {
        isSummaryShown: true
      });

    default:
      return state;
  }
}

const storeApp = combineReducers({ Quiz });
export default storeApp;
