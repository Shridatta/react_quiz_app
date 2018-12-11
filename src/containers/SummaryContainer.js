import {connect} from 'react-redux';
import {initializeQuestions, isSummaryShown, startOver, startOverHandleChange, updateQuestions} from "../actions";
import Summary from "../components/Summary";

const mapStateToProps = (state) => {
    return {
        config: state.Quiz.config,
        questions: state.Quiz.questions,
        initializedQuestions: state.Quiz.initializedQuestions,
        isStartedOver: state.Quiz.isStartedOver,
        answeredQuestions: state.Quiz.answeredQuestions,
        isSummaryShown: state.Quiz.isSummaryShown,
    };
};

const mapDispatchToProps = (dispatch)=> {
    return {
        updateQuestions: (new_questions) => dispatch(updateQuestions(new_questions)),
        initializeQuestions: (questions) => dispatch(initializeQuestions(questions)),
        startOver: () => dispatch(startOver()),
        startOverHandleChange: () => dispatch(startOverHandleChange()),
        isSummaryShown: () => dispatch(isSummaryShown())
    }
};

const SummaryContainer = connect(mapStateToProps, mapDispatchToProps)(Summary);

export default SummaryContainer;