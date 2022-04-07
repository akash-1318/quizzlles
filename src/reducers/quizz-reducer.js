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
        default:
            break;
    }
}

export {quizzReducer}