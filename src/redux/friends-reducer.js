const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET_FRIENDS";
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
        default:
            return state;
    }
}
export const follow = (friendId) => ({type: "FOLLOW", friendId})
export const unfollow = (friendId) => ({type: "UNFOLLOW", friendId})
export const setFriends = (friends) => ({type: "SET_FRIENDS", friends})
export const setCurrentPage = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage})
export const setTotalFriendsCount = (totalCount) => ({type: "SET_TOTAL_FRIENDS_COUNT", totalCount})
export const toggleIsLoading = (isLoading) => ({type: 'TOGGLE_IS_LOADING' , isLoading})

export default friendsReducer;