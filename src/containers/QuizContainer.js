import {connect} from 'react-redux';
import Quiz from '../components/Quiz';
import {
    goToNextQuestion,
    goToPrevQuestion,
    initializeQuestions,
    startOverHandleChange,
    updateQuestions
} from "../actions";

const mapStateToProps = (state) => {
    return {
        config: state.Quiz.config,
        questions: state.Quiz.questions,
        currentQuestion: state.Quiz.currentQuestion,
        answeredQuestions: state.Quiz.answeredQuestions,
    };
};

const mapDispatchToProps = (dispatch)=> {
    return {
        // testAction:()=>dispatch(testAction()),
        updateQuestions: (new_questions) => dispatch(updateQuestions(new_questions)),
        initializeQuestions: (questions) => dispatch(initializeQuestions(questions)),
        goToNextQuestion: () => dispatch(goToNextQuestion()),
        goToPrevQuestion: () => dispatch(goToPrevQuestion()),
        startOverHandleChange: () => dispatch(startOverHandleChange()),
    }
};

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);

export default QuizContainer;