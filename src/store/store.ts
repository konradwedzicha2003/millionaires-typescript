import {createStore, combineReducers} from "redux";
import questionsAndAnswers from "./reducers/questionsAndAnswers/questionsAndAnswers";
import prizes from "./reducers/prizes/prizes";

const allReducers = combineReducers({
    questionsAndAnswers,
    prizes
})

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
