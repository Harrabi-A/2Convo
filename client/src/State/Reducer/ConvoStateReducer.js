
export const ConvoStateReducer = (convoState = false, action) => {
    switch(action.type){
        case "setConvo":
            return true;
        case "unsetConvo":
            return false; 
        default:
            return convoState;
    }
}

export default ConvoStateReducer; 
