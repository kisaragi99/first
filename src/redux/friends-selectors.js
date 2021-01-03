import {createSelector} from "reselect";

export const getFriendsSelector = (state) => {
    console.log("selector did something")
    return state.friendsPage.friends;
}

export const getFriends = createSelector(getFriendsSelector, (friends) => {
    console.log("SuperSelector did something")
    return friends.filter(f => true);
})

export const getTotalFriendsCount = (state) => {
    return state.friendsPage.totalFriendsCount;
}
export const getPageSize = (state) => {
    return state.friendsPage.pageSize;
}
export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage;
}
export const getIsLoading = (state) => {
    return state.friendsPage.isLoading;
}
export const getFollowingInProcess = (state) => {
    return state.friendsPage.followingInProcess;
}


//
// totalFriendsCount: state.friendsPage.totalFriendsCount,
//     currentPage: state.friendsPage.currentPage,
//     isLoading: state.friendsPage.isLoading,
//     followingInProcess: state.friendsPage.followingInProcess