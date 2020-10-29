const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageTempText;
            let newMessage = {id: 9, message: text};
            state.messages.push(newMessage);
            state.newMessageTempText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageTempText = action.newMessageText;
            return state;

        default:
                return state;
    }
}


export default dialogsReducer;
