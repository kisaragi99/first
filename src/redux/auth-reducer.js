import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const BAD_RESULT = 'BAD_RESULT';
const LOGOUT = 'LOGOUT';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    messages: null,
    badResult: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            case SET_LOGIN_DATA :
            return {
                ...state,
                badResult: false,
                messages: action.messages
            }

        case BAD_RESULT :
            return {
                ...state,
                badResult: true
            }

        case LOGOUT :
            return {
                ...state,
                isAuth: false,

            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: 'SET_USER_DATA', data: {userId, email, login}});

export const setLoginData = (messages) => ({type: SET_LOGIN_DATA, messages});

export const badResult = () => ({type: BAD_RESULT});

export const setLogoutData = () => ({type: LOGOUT});




export const authMe = () => {
    return (dispatch) => {

        authAPI.authMeAPI().then(data => {

            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })

    };
}

export const loginMe = (formData) => {
    return (dispatch) => {
        authAPI.loginAPI(formData).then(data => {
            if(data.resultCode === 0){
            dispatch(setLoginData(data.messages))

            } else{
                dispatch(badResult())
            }

        })
    };
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logoutAPI().then(data => {
            if(data.resultCode === 0){
                dispatch(setLogoutData())
            }
        })
    };
}



export default authReducer;


