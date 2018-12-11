import {connect} from 'react-redux';
import {answerTheQuestion, goToNextQuestion, initializeQuestions, updateQuestions} from "../actions";
import Question from "../components/Question";

const mapStateToProps = (state) => {
    return {
        config: state.Quiz.config,
        questions: state.Quiz.questions,
        currentQuestion: state.Quiz.currentQuestion,
    };
};

const mapDispatchToProps = (dispatch)=> {
    return {
        updateQuestions: (new_questions) => dispatch(updateQuestions(new_questions)),
        initializeQuestions: (questions) => dispatch(initializeQuestions(questions)),
        goToNextQuestion: () => dispatch(goToNextQuestion()),
        answerTheQuestion: (index) => dispatch(answerTheQuestion(index)),
    }
};

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(Question);

export default QuestionContainer;