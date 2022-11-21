import {createStore, combineReducers} from "redux";
import questionsAndAnswersReducer from "./questionsAndAnswersReducer/questionsAndAnswersReducer";
import prizesReducer from "./prizesReducer/prizesReducer";

const allReducers = combineReducers({
    data: questionsAndAnswersReducer,
    prizes: prizesReducer
})

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store