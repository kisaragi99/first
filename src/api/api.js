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
    updatePhoto(file) {
        const formData = new FormData();
        formData.append("image", file)

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profileUserInfo){
        return instance.put('profile/', {
                "aboutMe": profileUserInfo.aboutMe,
                "contacts": {
                    facebook: profileUserInfo.facebook,
                    github: profileUserInfo.github,
                    instagram: profileUserInfo.instagram,
                    mainLink: null,
                    twitter: profileUserInfo.twitter,
                    vk: profileUserInfo.vk,
                    website: null,
                    youtube: null
                },
                "lookingForAJob": true,
                "lookingForAJobDescription": "dunno",
                "fullName": "Ochir B"
            }


        )
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
            captcha: loginData.captcha
        })
            .then(response => response.data)
    }, // Login to the server

    logoutAPI() {
        return instance.post('auth/logout').then(response => response.data)
    } // Logout from server
}

export const sequrityAPI = {
    getCapthaUrl() {
        return instance.get('security/get-captcha-url');
    }
}

export const dialogsAPI = {
    getDialogs() {
        return instance.get('dialogs').then(response => response.data);
    },
    sendMessage(userId, message){
        return instance.post(`dialogs/${userId}/messages`, {body: message}).then(response => response.data);
    },
    deleteMessage(messageId){
        return instance.delete(`dialogs/messages/${messageId}`).then(response => response.data);
    },
    // getMessages(userId = 15439, page = 1, count = 9){
    //     return instance.get(`dialogs/${userId}/messages?page=${page}&count=${count}`).then(response => response.data.items);
    // }, Это тоже, пока что не используется, понадобится на этапе создания компонента, который будет показывать диалог с кокрентным человеком.
    getAllUserMessages(userId){
        return instance.get(`dialogs/${userId}/messages`).then(response => response.data.items);
    }  // тут я получаю массив объектов, в котором каждый объект это сообщение.
}