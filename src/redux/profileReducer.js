const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: "How are you?", likesCount: 3},
        {id: 2, message: "Hi, im fine", likesCount: 1},
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 7, message: state.newPostText, likesCount: 9}
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;}

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;}
        default: return state;
    }

}



export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
