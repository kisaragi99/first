import state, {addPost, updateNewPostText} from './redux/state'
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './render'


rerenderEntireTree(state,addPost,updateNewPostText);


serviceWorker.unregister();