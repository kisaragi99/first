import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loginStatus: false,
    // messages: null // BTW what messages does mean?
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
                loginStatus: true,
                // messages: action.messages
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: 'SET_USER_DATA', data: {userId, email, login}});

// export const setLoginData = (messages) => ({type: 'SET_LOGIN_DATA', messages});


export const authMe = () => {
    return (dispatch) => {

        authAPI.authMeAPI().then(data => {
            debugger;
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })

    };
}

export const loginMe = (formData) => {
    return () => {
        authAPI.loginAPI(formData)
    };
}



export default authReducer;


