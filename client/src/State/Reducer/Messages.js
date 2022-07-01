const initialMessages = 
    [
        {
            id: 0,
            message: 'Message own 1',
            own: true
        },
        {
            id: 1,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante elit, porttitor placerat sagittis quis, aliquam a lectus.',
            own: false
        },
        {
            id: 2,
            message: 'Message 2',
            own: true
        }
    ]


export const Messages = (messages=initialMessages, action) =>{
    switch(action.type){
        case "addNewMessage":
            messages.push(action.payload)
            return messages;
        case "deleteAllMessages":
            return [];
        default:
            return messages;
    }
}

export default Messages;