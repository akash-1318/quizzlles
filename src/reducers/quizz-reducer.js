const quizzReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case "SET_QUESTIONS":
            return {...state, questionData : payload}
        case "PLAY_CLICK":
            return {...state, category : payload.category, categoryValue : payload.value, image : payload.image}
        case "EASY":
            return {...state, level : "easy"}
        case "MEDIUM":
            return {...state, level : "medium"}
        case "HARD":
            return {...state, level : "hard"}
        case "NEXT_QUESTION":
            return {...state, currentQue : state.currentQue + 1}
        case "SET_QUESTION_ONE":
            return {...state, currentQue : 0}
        case "DISABLE_LEVEL":
            return {...state, level : null}
        case "SET_SCORE":
            return {...state, score : state.score + 1}
        case "RESULT_DATA":
            return {...state, newQuestionData : [...state.newQuestionData, payload]}
        case "SET_CORRECT_OPTION":
            return {...state, correctOptions : [...state.correctOptions, payload]}
        case "KILL_QUESTION_DATA":
            return {...state, newQuestionData : [], score : 0}
        default:
            break;
    }
}

export {quizzReducer}