export const CodeIDState = (state='', action) => {
    switch(action.type){
        case "setCodeID":
            return action.payload
        default:
            return state
    }

}

export default CodeIDState;