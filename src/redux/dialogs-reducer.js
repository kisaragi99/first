import {dialogsAPI} from '../api/api'
import {profileAPI} from '../api/api'

const SET_DIALOGS = 'SET_DIALOGS';
const SET_LAST_MESSAGES = 'SET_LAST_MESSAGES';
const SET_SOME_USER_MESSAGES = 'SET_SOME_USER_MESSAGES';
const SET_SENDER_PROFILE = 'SET_SENDER_PROFILE';
const SET_RECIPIENT_PROFILE = 'SET_RECIPIENT_PROFILE';


let initialState = {
    lastMessages: [],
    dialogs: [],
    initialized: false,
    someUserMessages: [{}],
    senderProfile: {
        data: {
            photos: {
                small: null,
                large: null,
            }
        }
    },
    recipientProfile: {
    data: {
        photos: {
            small: null,
            large: null,
        }
    }
}
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
        case SET_SENDER_PROFILE :
            return {
                ...state,
                senderProfile: action.payload, 
            };

        case SET_RECIPIENT_PROFILE :
            return {
                ...state,
                recipientProfile: action.payload,
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
export const setSenderProfileAC = payload => ({type: SET_SENDER_PROFILE , payload});
export const setRecipientProfileAC = payload => ({type: SET_RECIPIENT_PROFILE , payload});




export const getSenderProfile = (senderId) => async (dispatch) => {
  let data = await profileAPI.getProfileAPI(senderId);
  dispatch(setSenderProfileAC(data));
};


export const getRecipientProfile = (recipientId) => async (dispatch) => {
    let data = await profileAPI.getProfileAPI(recipientId);
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


export default dialogsReducer;