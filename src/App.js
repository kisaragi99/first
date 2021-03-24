import React, {Suspense} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import FriendsContainer from "./components/Friends/FriendsContainer"
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Loader from "./components/Loaders/Loader";
import store from "./redux/redux-store";
import DialogPrivatePage from "./components/Dialogs/DialogPrivatePage/DialogPrivatePage"

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));


class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent)=>{
       console.log("some error occured")
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <Suspense fallback={<Loader/>}>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/dialogsprivate" render={() => <DialogPrivatePage/>}/>
                            <Route path="/friends" render={() => <FriendsContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/login" render={() => <LoginContainer/>}/>

                            <Route path="*" render={() => <div>404 - Page not found</div>}/>
                        </Switch>
                    </div>
                </Suspense>
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
    return (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>)
}
export default MainApp;