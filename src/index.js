import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

setInterval(()=>{
    store.dispatch({type: "FAKE"})
},1000)

    ReactDOM.render(
            <BrowserRouter>
                <Provider store ={store}>
                    <App/>
                </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );

// I removed StrictMode cuz ProfileStatus component was rendered twice for no reason.


serviceWorker.unregister();