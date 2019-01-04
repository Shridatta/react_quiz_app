export const START_QUIZ = "START_QUIZ";
export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";
export const INITIALIZE_QUESTIONS = "INITIALIZE_QUESTIONS";
export const GO_TO_NEXT_QUESTION = "GO_TO_NEXT_QUSETION";
export const GO_TO_PREV_QUESTION = "GO_TO_PREV_QUESTION";
export const START_OVER = "START_OVER";
export const START_OVER_HANDLE_CHANGE = "START_OVER_HANDLE_CHANGE";
export const ANSWER_THE_QUESTION = "ANSWER_THE_QUESTION";
export const IS_SUMMARY_SHOWN = "IS_SUMMARY_SHOWN";

export function startQuiz() {
  return {
    type: START_QUIZ
  };
}

export function updateQuestions(new_questions) {
  return {
    type: UPDATE_QUESTIONS,
    payload: new_questions
  };
}

export function initializeQuestions(questions) {
  questions.map(question => {
    return (question.user_answer = null);
  });

  return dispatch => {
    dispatch(updateQuestions(questions));
  };
}

export function goToNextQuestion() {
  return {
    type: GO_TO_NEXT_QUESTION
  };
}

export function goToPrevQuestion() {
  return {
    type: GO_TO_PREV_QUESTION
  };
}

export function startOver() {
  return {
    type: START_OVER
  };
}

export function startOverHandleChange() {
  return {
    type: START_OVER_HANDLE_CHANGE
  };
}

export function answerTheQuestion(index) {
  return {
    type: ANSWER_THE_QUESTION,
    payload: index
  };
}

export function isSummaryShown() {
  return {
    type: IS_SUMMARY_SHOWN
  };
}
