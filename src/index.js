import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addMessage={addMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();