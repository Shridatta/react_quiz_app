import {connect} from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        // isAppStarted: state.Quiz.isAppStarted,
    };
};

const mapDispatchToProps = (dispatch)=> {
    return {
        // testAction:()=>dispatch(testAction()),
    }
};

const ApplicationContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default ApplicationContainer;