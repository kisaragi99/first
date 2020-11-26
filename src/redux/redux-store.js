import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer"
import authReducer from "./auth-reducer";
import thunkMidlleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMidlleware));
window.store = store;
export default store;


