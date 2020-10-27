const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _callSubscriber() {
        console.log("state changed")
    },
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "How are you?", likesCount: 3},
                {id: 2, message: "Hi, im fine", likesCount: 1},
                {id: 3, message: "Log", likesCount: 4},
                {id: 4, message: "Console", likesCount: 5},
                {id: 5, message: "Opposite", likesCount: 6},
                {id: 6, message: "Lorem", likesCount: 12}
            ],
            newPostText: "i`m here",

        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Lets play some Dota!"},
                {id: 3, message: "Lets play some Dota!"},
                {id: 4, message: "Lets play some Dota!"},
                {id: 5, message: "Lets play some Dota!"},
                {id: 6, message: "Lets play some Dota!"},
                {id: 7, message: "Lets play some Dota!"},
                {id: 8, message: "Are you here?"}],
            newMessageTempText: "BeHerePlease",
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
        },
        friendsPage: {
            friends: [
                {
                    name: "Lex",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKDM99rvtftg7ZHF5_cfcYMIddC35KSuaJ8Q&usqp=CAU"
                },
                {
                    name: "Lost",
                    avatar: "https://svirtus.cdnvideo.ru/5BwwcdCMwq3EQKgjMP-3rOqooBg=/0x0:209x204/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/35/354cfce6f19b2bc856220f4c5f13b3c2.jpg?m=d668102fd143f399db9880ce43f8a1ae"
                },
                {
                    name: "Smile",
                    avatar: "https://svirtus.cdnvideo.ru/T2Rx94j-A62VChGWYun076lAK98=/0x0:250x250/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/73/735bd29e228660f8d7084f56351019be.jpg?m=693b8e5540cbd57774380aef7b191044"
                },
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 9
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else {

            if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            } else {
                if (action.type === ADD_MESSAGE) {
                    let text = this._state.dialogsPage.newMessageTempText;
                    let newMessage = {id: 9, message: text};
                    this._state.dialogsPage.messages.push(newMessage);
                    this._state.dialogsPage.newMessageTempText = '';
                    this._callSubscriber(this._state);
                    debugger;
                } else {
                    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
                        this._state.dialogsPage.newMessageTempText = action.newMessageText;
                        this._callSubscriber(this._state);
                    }
                }
            }
        }
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default store;
window.store = store;