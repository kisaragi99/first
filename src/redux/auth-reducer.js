import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: 'SET_USER_DATA', payload:
        {userId, email, login, isAuth}
});

// export const authMe = () => {
//     return async (dispatch) => {
//         let data = await authAPI.authMeAPI()
//             if (data.resultCode === 0) {
//                 let {id, email, login} = data.data;
//                 dispatch(setAuthUserData(id, email, login, true));
//             }
//     };
// }
export const authMe = () => {
    return (dispatch) => {
        return authAPI.authMeAPI()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })


    };
}



export const loginMe = (formData) => {
    return async (dispatch) => {
        let data = await authAPI.loginAPI(formData)

            if (data.resultCode === 0) {
                dispatch(authMe());
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message}));
            }

    };
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logoutAPI()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }

    };
}
export default authReducer;