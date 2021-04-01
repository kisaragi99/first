import {dialogsAPI} from '../api/api'
import {profileAPI} from '../api/api'

const SET_DIALOGS = 'SET_DIALOGS';
const SET_LAST_MESSAGES = 'SET_LAST_MESSAGES';
const SET_SOME_USER_MESSAGES = 'SET_SOME_USER_MESSAGES';
const SET_OPPONENT_PROFILE = 'SET_OPPONENT_PROFILE';
const SET_SELF_PROFILE = 'SET_SELF_PROFILE';
const MESSAGE_HAS_BEEN_SENT = 'MESSAGE_HAS_BEEN_SENT';

let initialState = {
    lastMessages: [],
    dialogs: [],
    initialized: false,
    someUserMessages: [{}],
    opponentProfile: {
        data: {
            photos: {
                small: null,
                large: null,
            }
        }
    },
    selfProfile: {
    data: {
        photos: {
            small: null,
            large: null,
        }
    }
}, 
    messageHasBeenSent: null
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.payload,
            };

        case SET_LAST_MESSAGES:
            return {
                ...state,
                lastMessages: action.payload, 
            };
            
        case SET_SOME_USER_MESSAGES:
            return {
                ...state,
                someUserMessages: action.payload, 
            };
        case SET_OPPONENT_PROFILE :
            return {
                ...state,
                opponentProfile: action.payload, 
            };

        case SET_SELF_PROFILE :
            return {
                ...state,
                selfProfile: action.payload,
            };
            
        case MESSAGE_HAS_BEEN_SENT :
                return {
                    ...state,
                    someUserMessages: [...state.someUserMessages, action.payload],
                };

        default:
            return state;
    }
}

export const setDialogsAC = (payload) => {
  return  {type: SET_DIALOGS, payload}
};
export const setLastMessageAC = (payload) => {
    return {type: SET_LAST_MESSAGES, payload}
};
export const setSomeUserMessagesAC = payload => ({type: SET_SOME_USER_MESSAGES, payload});
export const setSenderProfileAC = payload => ({type: SET_OPPONENT_PROFILE , payload});
export const setRecipientProfileAC = payload => ({type: SET_SELF_PROFILE , payload});
export const messageHasBeenSentAC = payload => ({type: MESSAGE_HAS_BEEN_SENT, payload})



export const getOpponentProfile = (opponentId) => async (dispatch) => {
  let data = await profileAPI.getProfileAPI(opponentId);
  dispatch(setSenderProfileAC(data));
};


export const getSelfProfile = (selfId) => async (dispatch) => {
    let data = await profileAPI.getProfileAPI(selfId);
   dispatch(setRecipientProfileAC (data));
};


export const getAllDialogs = () => async (dispatch) => {
        let data = await dialogsAPI.getDialogs();
        dispatch(setDialogsAC(data));
        };



export const getMessages = (dialogsArray) => async (dispatch) => {
    let data = [];
    for(let el of dialogsArray) {
        let allMessagesForSomeUser = await dialogsAPI.getAllUserMessages(el.id)
        data.push(allMessagesForSomeUser.slice(-1)[0].body);
    };

    if(data.length > 0) {
        dispatch(setLastMessageAC(data));
    }
}


export const getSomeUserMessages = (userId) => async (dispatch) => {
        let data = await dialogsAPI.getAllUserMessages(userId);
        dispatch(setSomeUserMessagesAC(data));
        };



export const sendMessage = (userId, message) => async (dispatch) =>{
    let data = await dialogsAPI.sendMessage(userId, message)
        if(data.resultCode === 0){
            console.log(data);
            dispatch(messageHasBeenSentAC(data.data.message));
        }
};
export default dialogsReducer;