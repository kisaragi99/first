import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c3b6b8c4-0dfb-4a27-8050-5e4ce867a46f"
    }
});

export const usersAPI = {

    getUsersAPI(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }, // This function is getting the users array from sever (ProfileContainer)

    unfollowUserAPI(friendId) {
        return instance.delete(`follow/${friendId}`).then(response => response.data)
    }, // This function is used to unfollow a user on the server (FriendsContainer)

    followUserAPI(friendId) {
        return instance.post(`follow/${friendId}`).then(response => response.data)
    } // This function is used to follow a user on the server (FriendsContainer)
}

export const profileAPI = {

    getProfileAPI(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    // getStatus(userId) {
    //     return instance.get(`status/${userId}`).then(response => response.data)
    // },
    // updateStatus(status) {
    //     return instance.get(`status/${userId}`).then(response => response.data)
    // }

}

export const authAPI = {

    authMeAPI() {
        return instance.get('auth/me').then(response => response.data)
    } // This function is getting the information if the user is authorised or not (HeaderContainer)

}
