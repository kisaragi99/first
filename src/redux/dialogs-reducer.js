import {dialogsAPI} from '../api/api'

const SET_DIALOGS = 'SET_DIALOGS';
const SET_LAST_MESSAGES = 'SET_LAST_MESSAGES';
const INITIALIZE_DIALOGS = 'INITIALIZE_DIALOGS';

let initialState = {
    lastMessages: [],
    dialogs: [],
    initialized: false
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

        case INITIALIZE_DIALOGS:
            return {
                ...state,
                initialized: true,
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


export const initializeDialogsAC = () => {
    return {type: INITIALIZE_DIALOGS}
}

export const getAllDialogs = () => async (dispatch) => {
        let data = await dialogsAPI.getDialogs();
        dispatch(setDialogsAC(data));
        };

export const intializeDialogs = (dialogsArray) => async (dispatch) =>{
        await Promise.all([dispatch(getAllDialogs()), dispatch(getMessages(dialogsArray))])
        .then(()=>dispatch(initializeDialogsAC()));
}

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


    // if(data.length === dialogsArray.length) {
    //     dispatch(setLastMessageAC(data));}
    // }








// Здесь, получив массив всех диалогов, надо вызывать getMessages столько раз, сколько есть диалогов.
// Вызывав getMessages мы получаем массив всех сообщений с каким-то человеком(диалогом), то есть в итоге у нас будет массив массивов.
// И надо будет взять последний элемент каждого подмассива и запушить его в новый массив(message2) и отдать его в презентационный компонент

// надо подумать над тем, нужны ли мне две отдельные санки (getAllDialogs и getMessages)

// В итоге - проблема в том, как мне получить массив массивов. Если getMessages срабатывает, то он перезаписывает старый стэйт.
// может сделать так, чтобы он не перезаписывал, а пушил в копию старого массива? Тогда после каждого вызова getMessages массив сообщений будет пополняться новыми массивами.

// Следующая проблема - как мне вызвать несколько запросов getMessages? - Циклом, который будет вызываться столько раз, сколько есть всего диалогов, уже полученных.
export default dialogsReducer;