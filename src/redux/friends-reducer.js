import {followUserAPI, getUsersAPI, unfollowUserAPI} from "../api/api";

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
                friends: state.friends.map(f => {
                    if (f.id === action.friendId) {
                        return {...f, followed: true}
                    }
                    return f
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.friendId) {
                        return {...f, followed: false}
                    }
                    return f
                })
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


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        getUsersAPI(currentPage, pageSize).then(data => {
            dispatch(toggleIsLoading(false));
            dispatch(setFriends(data.items));
            dispatch(setTotalFriendsCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
        })

    }
}

export const follow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProcess(true, userId));

        followUserAPI(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }

            dispatch(toggleFollowingProcess(false, userId));
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProcess(true, userId));

        unfollowUserAPI(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }

            dispatch(toggleFollowingProcess(false, userId));
        })
    }
}


export default friendsReducer;