export const setConvoState = (/*status*/) => {
    return(dispatch) => {
        dispatch({
            type: "setConvo",
            /*payload: status*/
        })
    }
}

export const unsetConvoState = (/*status*/) => {
    return(dispatch) => {
        dispatch({
            type: "unsetConvo",
            /*payload: status*/
        })
    }
}

export const setWaiting = () => {
    return(dispatch) => {
        dispatch({
            type: "setWaiting",
        })
    }
}

export const unsetWaiting = () => {
    return(dispatch) => {
        dispatch({
            type: "unsetWaiting",
        })
    }
}

export const setCodeID = (code) => {
    return(dispatch) => {
        dispatch({
            type: "setCodeID",
            payload: code
        })

    }
}

export const addNewMessage = (msg) => {
    return(dispatch) => {
        dispatch({
            type: "addNewMessage",
            payload: msg
        })
    }
}

export const deleteAllMessages = () => {
    return(dispatch) => {
        dispatch({
            type: "deleteAllMessages",
        })
    }
}

export const setConvoerPublicKey = (code) => {
    return(dispatch) => {
        dispatch({
            type: "setConvoerPublicKey",
            payload: code
        })
    }
}
