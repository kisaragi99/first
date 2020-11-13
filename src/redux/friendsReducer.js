const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_FRIENDS_COUNT = "SET_TOTAL_FRIENDS_COUNT";

let initialState = {
    friends: [],
    pageSize: 9,
    totalFriendsCount: 0,
    currentPage: 1,
}

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: true}
                    }
                    return f
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.userId) {
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

        debugger;
        default:
            return state;
    }
}
export const followAC = (userId) => ({type: "FOLLOW", userId})
export const unfollowAC = (userId) => ({type: "UNFOLLOW", userId})
export const setUsersAC = (friends) => ({type: "SET_USERS", friends})
export const setCurrentPageAC = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage})
export const setTotalFriendsCountAC = (totalCount) => ({type: "SET_TOTAL_FRIENDS_COUNT", totalCount})

export default friendsReducer;



//
// {
//     id: 1,
//         followed: true,
//     fullName: "Lex",
//     status: "I`m not Miracle",
//     avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKDM99rvtftg7ZHF5_cfcYMIddC35KSuaJ8Q&usqp=CAU",
//     location: {
//     city: "Moscow",
//         country: "Russia"
// }
// },
// {
//     id: 2,
//         followed: false,
//     fullName: "Lost",
//     status: "TI Winner",
//     avatar: "https://svirtus.cdnvideo.ru/5BwwcdCMwq3EQKgjMP-3rOqooBg=/0x0:209x204/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/35/354cfce6f19b2bc856220f4c5f13b3c2.jpg?m=d668102fd143f399db9880ce43f8a1ae",
//     location: {
//     city: "Moscow",
//         country: "Russia"
// }
// },
// {
//     id: 3,
//         followed: true,
//     fullName: "Smile",
//     status: "ARS-ART",
//     avatar: "https://svirtus.cdnvideo.ru/T2Rx94j-A62VChGWYun076lAK98=/0x0:250x250/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/73/735bd29e228660f8d7084f56351019be.jpg?m=693b8e5540cbd57774380aef7b191044",
//     location: {
//     city: "Moscow",
//         country: "Russia"
// }
// },
//
//