import state, {addPost} from './redux/state'
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './render'


rerenderEntireTree(state,addPost);


serviceWorker.unregister();