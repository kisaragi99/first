import {authMe} from "./auth-reducer";

const INITIALIZED = 'INITIALIZED';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED :
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initialized = () => ({type: 'INITIALIZED'});

export const initializeApp = () => async (dispatch) => {
    let promise = dispatch(authMe());
    await Promise.all([promise])
    dispatch(initialized());

}

export default appReducer;