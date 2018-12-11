import {connect} from 'react-redux';
import {initializeQuestions, startOver, startOverHandleChange, updateQuestions} from "../actions";
import Intro from "../components/Intro";

const mapStateToProps = (state) => {
    return {
        isStartedOver: state.Quiz.isStartedOver,
    };
};

const mapDispatchToProps = (dispatch)=> {
    return {
        startOver: () => dispatch(startOver()),
        startOverHandleChange: () => dispatch(startOverHandleChange()),
    }
};

const IntroContainer = connect(mapStateToProps, mapDispatchToProps)(Intro);

export default IntroContainer;