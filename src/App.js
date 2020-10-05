import React from "react";
import "./App.css";
import HeaderX from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderX/>
      <Navbar/>
      <Profile/>
    </div>
  );
};

export default App;
