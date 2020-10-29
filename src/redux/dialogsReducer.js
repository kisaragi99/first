const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let text = state.newMessageTempText;
        let newMessage = {id: 9, message: text};
        state.messages.push(newMessage);
        state.newMessageTempText = '';


    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageTempText = action.newMessageText;

    }
        return state;

}


export default dialogsReducer;
