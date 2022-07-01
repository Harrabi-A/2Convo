import {combineReducers} from "redux";
import CodeIDState from "./CodeIDState";
import ConvoStateReducer from "./ConvoStateReducer";
import Keys from "./Keys";
import WaitingStateReducer from "./WaitingStateReducer";
import Socket from "./Socket";
import Messages from "./Messages";
import ConvoerPubliKey from "./convoerPublicKey";

const reducers = combineReducers({
    convoState: ConvoStateReducer,
    waitingState: WaitingStateReducer,
    keys: Keys,
    codeID: CodeIDState,
    socket: Socket,
    messages: Messages,
    convoerPublicKey: ConvoerPubliKey
})

export default reducers;
