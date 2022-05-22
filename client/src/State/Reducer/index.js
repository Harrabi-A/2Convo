import {combineReducers} from "redux";
import ConvoStateReducer from "./ConvoStateReducer";
import WaitingStateReducer from "./WaitingStateReducer";

const reducers = combineReducers({
    convoState: ConvoStateReducer,
    waitingState: WaitingStateReducer
})

export default reducers;