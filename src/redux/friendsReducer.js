const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_FRIENDS_COUNT = "SET_TOTAL_FRIENDS_COUNT";
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
    friends: [],
    pageSize: 9,
    totalFriendsCount: 0,
    currentPage: 1,
    isLoading: true,
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

        case SET_USERS: {
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
        default:
            return state;
    }
}
export const followAC = (friendId) => ({type: "FOLLOW", friendId})
export const unfollowAC = (friendId) => ({type: "UNFOLLOW", friendId})
export const setUsersAC = (friends) => ({type: "SET_USERS", friends})
export const setCurrentPageAC = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage})
export const setTotalFriendsCountAC = (totalCount) => ({type: "SET_TOTAL_FRIENDS_COUNT", totalCount})
export const toggleIsLoadingAC = (isLoading) => ({type: 'TOGGLE_IS_LOADING' , isLoading})

export default friendsReducer;