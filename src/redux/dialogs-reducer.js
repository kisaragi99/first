import {dialogsAPI} from '../api/api'

const GET_DIALOGS = 'GET_DIALOGS';
const GET_MESSAGES = 'GET_MESSAGES';
const INITIALIZE_DIALOGS = 'INITIALIZE_DIALOGS';

let initialState = {
    messages: [],
    dialogs: [],
    initialized: false
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case GET_DIALOGS:
            return {
                ...state,
                dialogs: action.payload,
            };

        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
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

export const getDialogsAC = (payload) => ({type: GET_DIALOGS, payload});
export const getMessagesAC = (payload) => ({type: GET_MESSAGES, payload});
export const initializeDialogsAC = () => ({type: INITIALIZE_DIALOGS})

export const getAllDialogs = () => async (dispatch) => {
        let data = await dialogsAPI.getDialogs();
        dispatch(getDialogsAC(data));
        };

export const getMessages = (userId) => async (dispatch) => {
        let data = await dialogsAPI.getMessages(userId);
        dispatch(getMessagesAC(data));
        };

export const intializeDialogs = (userId) => async (dispatch) =>{
        let diaglosPromise = getAllDialogs()(dispatch);
        let messagesPromise = getMessages(userId)(dispatch);
        await Promise.all([diaglosPromise,messagesPromise]);
        dispatch(initializeDialogsAC());
}
// Здесь, получив массив всех диалогов, надо вызывать getMessages столько раз, сколько есть диалогов.
// Вызывав getMessages мы получаем массив всех сообщений с каким-то человеком(диалогом), то есть в итоге у нас будет массив массивов.
// И надо будет взять последний элемент каждого подмассива и запушить его в новый массив(message2) и отдать его в презентационный компонент

// надо подумать над тем, нужны ли мне две отдельные санки (getAllDialogs и getMessages)

// В итоге - проблема в том, как мне получить массив массивов. Если getMessages срабатывает, то он перезаписывает старый стэйт.
// может сделать так, чтобы он не перезаписывал, а пушил в копию старого массива? Тогда после каждого вызова getMessages массив сообщений будет пополняться новыми массивами.
export default dialogsReducer;