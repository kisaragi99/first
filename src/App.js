import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Information from "./components/Information/Information";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-con tent">
                    <Route path = "/profile" component={Profile}/>
                    <Route path = "/dialogs" component={Dialogs}/>
                    <Route path = "/information" component={Information}/>
                    <Route path = "/news" component={News}/>
                    <Route path = "/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
