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
        default:
            break;
    }
}

export {quizzReducer}