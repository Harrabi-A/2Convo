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
            type: setWaiting
        })
    }
}

export const unsetWaiting = () => {
    return(dispatch) => {
        dispatch({
            type: unsetWaiting
        })
    }
}
