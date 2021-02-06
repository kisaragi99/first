import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS';

let initialState = {
    friends: [],
    pageSize: 9,
    totalFriendsCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProcess: []
}

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                friends: updateObjectInArray(state.friends, action.friendId, "id", {followed: true})
            }
        case UNFOLLOW :
            return {
                ...state,
                friends: updateObjectInArray(state.friends, action.friendId, "id", {followed: false})
            }
        case SET_FRIENDS: {
            return {
                ...state,
                friends: action.friends
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_FRIENDS_COUNT: {
            return {
                ...state,
                totalFriendsCount: action.totalCount
            }
        }
        case TOGGLE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case TOGGLE_IS_FOLLOWING_PROCESS: {
            return {
                ...state,
                followingInProcess: action.isLoading
                    ? [...state.followingInProcess, action.friendId]
                    : [state.followingInProcess.filter(id => id !== action.friendId)]
            }
        }
        default:
            return state;
    }
}
export const followSuccess = (friendId) => ({type: FOLLOW, friendId})
export const unfollowSuccess = (friendId) => ({type: UNFOLLOW, friendId})
export const setFriends = (friends) => ({type: SET_FRIENDS, friends})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalFriendsCount = (totalCount) => ({type: SET_TOTAL_FRIENDS_COUNT, totalCount})
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})
export const toggleFollowingProcess = (isLoading, friendId) => ({
    type: TOGGLE_IS_FOLLOWING_PROCESS,
    isLoading,
    friendId
})

export const getUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsLoading(true));

    let data = await usersAPI.getUsersAPI(page, pageSize)
    dispatch(toggleIsLoading(false));
    dispatch(setFriends(data.items));
    dispatch(setTotalFriendsCount(data.totalCount));
    dispatch(setCurrentPage(page));
}

const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProcess(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProcess(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch,userId, usersAPI.followUserAPI.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch,userId, usersAPI.unfollowUserAPI.bind(usersAPI), unfollowSuccess)
}

export default friendsReducer;