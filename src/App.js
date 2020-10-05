import React, {Suspense} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import FriendsContainer from "./components/Friends/FriendsContainer"
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Loader from "./components/Loaders/Loader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <React.Suspense fallback={<Loader/>}>
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/friends" render={() => <FriendsContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <LoginContainer/>}/>
                    </div>
                </React.Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        initialized: state.app.initialized,
    })
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
// Возможен баг с роутами, поэтому мы оборачиваем в withRouter

let MainApp = () => {
    return (<BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>)
}
export default MainApp;
