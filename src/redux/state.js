let rerenderEntireTree = ()=>{

}

let state = {

    profilePage: {
        postsData: [
            {id: 1, message: "How are you?", likesCount: 3},
            {id: 2, message: "Hi, im fine", likesCount: 1},
            {id: 3, message: "Log", likesCount: 4},
            {id: 4, message: "Console", likesCount: 5},
            {id: 5, message: "Opposite", likesCount: 6},
            {id: 6, message: "Lorem", likesCount: 12}
        ],
        newPostText: "",

    },

    dialogsPage: {
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Lets play some Dota!"},
            {id: 3, message: "Are you here?"}],
        dialogs: [
            {
                id: 1,
                name: "Lex",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKDM99rvtftg7ZHF5_cfcYMIddC35KSuaJ8Q&usqp=CAU"
            },
            {
                id: 2,
                name: "Lost",
                avatar: "https://svirtus.cdnvideo.ru/5BwwcdCMwq3EQKgjMP-3rOqooBg=/0x0:209x204/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/35/354cfce6f19b2bc856220f4c5f13b3c2.jpg?m=d668102fd143f399db9880ce43f8a1ae"
            },
            {
                id: 3,
                name: "Smile",
                avatar: "https://svirtus.cdnvideo.ru/T2Rx94j-A62VChGWYun076lAK98=/0x0:250x250/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/73/735bd29e228660f8d7084f56351019be.jpg?m=693b8e5540cbd57774380aef7b191044"
            }]
    },

    friendsPage: {
        friends: [
            {
                name: "Lex",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKDM99rvtftg7ZHF5_cfcYMIddC35KSuaJ8Q&usqp=CAU"
            },
            {
                name: "Lost",
                avatar: "https://svirtus.cdnvideo.ru/5BwwcdCMwq3EQKgjMP-3rOqooBg=/0x0:209x204/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/35/354cfce6f19b2bc856220f4c5f13b3c2.jpg?m=d668102fd143f399db9880ce43f8a1ae"
            },
            {
                name: "Smile",
                avatar: "https://svirtus.cdnvideo.ru/T2Rx94j-A62VChGWYun076lAK98=/0x0:250x250/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/73/735bd29e228660f8d7084f56351019be.jpg?m=693b8e5540cbd57774380aef7b191044"
            },
        ]
    }

}
window.state = state;
export const addPost = () => {
    let newPost = {
        id: 7,
        message: state.profilePage.newPostText,
        likesCount: 9
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = newText => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;