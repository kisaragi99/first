const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Lets play some Dota!"}],
    newMessageTempText: "",
    dialogs: [
        {
            id: 1,
            name: "Lex",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKDM99rvtftg7ZHF5_cfcYMIddC35KSuaJ8Q&usqp=CAU"
        },
        {
            id: 2,
            name: "Lost",
            avatar: "https://svirtus.cdnvideo.ru/5BwwcdCMwq3EQKgjMP-3rOqooBg=/0x0:209x204/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/35/354cfce6f19b2bc856220f4c5f13b3c2.jpg?m=d668102fd143f399db9880ce43f8a1ae"
        },
        {
            id: 3,
            name: "Smile",
            avatar: "https://svirtus.cdnvideo.ru/T2Rx94j-A62VChGWYun076lAK98=/0x0:250x250/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/73/735bd29e228660f8d7084f56351019be.jpg?m=693b8e5540cbd57774380aef7b191044"
        }]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            let text = stateCopy.newMessageTempText;
            let newMessage = {id: 9, message: text};

            stateCopy.messages.push(newMessage);
            stateCopy.newMessageTempText = "";
            return stateCopy;}

        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state};
            stateCopy.newMessageTempText = action.newMessageText;
            return stateCopy;}

        default:
                return state;
    }
}
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});


export default dialogsReducer;
