import * as axios from "axios";


export const authMe = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    }).then(response => response.data)
}

export const getUsers = (currentPage, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {withCredentials: true}).then(response => response.data)
}


export const unfollowUser = (friendId) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${friendId}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "c3b6b8c4-0dfb-4a27-8050-5e4ce867a46f"
        }
    }).then(response => response.data)
}

export const followUser = (friendId) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${friendId}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "c3b6b8c4-0dfb-4a27-8050-5e4ce867a46f"
        }
    }).then(response => response.data)
}