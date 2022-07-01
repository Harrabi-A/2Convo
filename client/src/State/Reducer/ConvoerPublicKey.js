export const ConvoerPublicKey = ( convoerPublicKey='', action ) => {
    switch(action.type){
        case "setConvoerPublicKey":
            return action.payload;
        default:
            return convoerPublicKey;
    }
}

export default ConvoerPublicKey;
