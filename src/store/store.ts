import {createStore} from "redux";
import {questionAndAnswers} from "../data/questionsAndAnswers/questionsAndAnswers";

const questionsAndAnswersReducer = (state = {data: questionAndAnswers}, action: any) => {
    switch (action.type) {
        case 'changeData':
            return {data: [...state.data]}
        default:
            return state
    }
}

const store = createStore(
    questionsAndAnswersReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store