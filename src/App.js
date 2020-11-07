import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/friends" render={() => <FriendsContainer store={props.store}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;
