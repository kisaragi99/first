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

    },
    dialogsPage: {
        messages: [{id: 1, message: "Hi!"}, {id: 2, message: "Lets play some Dota!"}, {id: 3, message: "Are you here?"}],
        dialogs: [{id: 1, name: "Lex"}, {id: 2, name: "Lost"}, {id: 3, name: "Smile"}]
    },

}


export default state;