import {questionAndAnswers} from "../../../data/questionsAndAnswers/questionsAndAnswers";

export type Answer = {
    answer: string,
    isCorrect: boolean
}

export type Answers = Answer[]

export type QuestionsAndAnswers = {
    questionsAndAnswers: {
        data: {question: string, answers: Answers}[],
        currentQuestionIndex: number
    }
}

const initialState = {
    data: [...questionAndAnswers],
    currentQuestionIndex: 0
}

const questionsAndAnswers = (state = initialState, action: {type: string}) => {
    switch (action.type) {
        case "answerCorrect":
            return {
                data: [...questionAndAnswers],
                currentQuestionIndex: state.currentQuestionIndex += 1
            }

        default:
            return state
    }
}

export default questionsAndAnswers