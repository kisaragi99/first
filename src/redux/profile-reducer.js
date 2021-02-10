import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS';
const PROFILE_UPDATE_DELETE = 'PROFILE_UPDATE_DELETE';


let initialState = {
    postsData: [
        {id: 1, message: "How are you?", likesCount: 3},
        {id: 2, message: "Hi, im fine", likesCount: 1},
    ],
    profile: null,
    status: "",
    isUpdated: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: 7, message: action.newPostBody, likesCount: 9}]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter((p) => p.id !== action.postId)
            };

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        case PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdated: true
            };
        case PROFILE_UPDATE_DELETE:
            return {
                ...state,
                isUpdated: null
            };

        default:
            return state;
    }

}

export const addPostCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const profileUpdateSuccess = () => ({type: PROFILE_UPDATE_SUCCESS})
export const profileUpdateDelete = () => ({type: PROFILE_UPDATE_DELETE})


export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileAPI(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
     let response = await profileAPI.updatePhoto(file);
     dispatch(savePhotoSuccess(response.data.data.photos))
}

export const updateProfile = (profileUserInfo, userId) => async (dispatch) => {
    let response = await profileAPI.updateProfile(profileUserInfo);
    if (response.data.resultCode === 0) {
       dispatch(getProfile(userId));
       dispatch(profileUpdateSuccess());
       setTimeout(()=> dispatch(profileUpdateDelete()), 2700);
    } else{
        console.error(response.data)
    }
}

export default profileReducer;
