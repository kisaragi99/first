import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postsData = [
    {id: 1, message: "How are you?", likesCount: 3},
    {id: 2, message: "Hi, im fine", likesCount: 1},
    {id: 3, message: "Log", likesCount: 4},
    {id: 4, message: "Console", likesCount: 5},
    {id: 5, message: "Opposite", likesCount: 6},
    {id: 6, message: "Lorem", likesCount: 12}
];
let dialogs = [{id: 1, name: "Lex"}, {id: 2, name: "Lost"}, {id: 3, name: "Smile"}];
let messages = [{id: 1, message: "Hi!"}, {id: 2, message: "Lets play some Dota!"}, {id: 3, message: "Are you here?"}];


ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
