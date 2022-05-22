
const WaitingStateReducer = (waitingState = false, action) =>{
    switch(action.type){
        case "setWaiting":
            return true;
        case "unsetWaiting":
            return false;
        default:
            return waitingState;
    }
}

export default WaitingStateReducer;
