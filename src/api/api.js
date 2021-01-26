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
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    updatePhoto(file){
        const formData = new FormData();
        formData.append("image", file)

        return instance.put('profile/photo', formData,{
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    }

}

export const authAPI = {

    authMeAPI() {
        return instance.get('auth/me').then(response => response.data)
    }, // This function is getting the information if the user is authorised or not (HeaderContainer)

    loginAPI(loginData) {
        return instance.post('auth/login', {
            email: loginData.login,
            password: loginData.password,
            rememberMe: loginData.rememberMe,
            captcha: true
        })
            .then(response => response.data)
    }, // Login to the server

    logoutAPI() {
        return instance.post('auth/logout').then(response => response.data)
    } // Logout from server
}
