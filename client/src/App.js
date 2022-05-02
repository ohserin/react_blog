import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import View from "./pages/view/View";
import Write from "./pages/write/Write";
import MyPage from "./pages/myPage/MyPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/join">
                    <Join />
                </Route>
                <Route path="/join">
                    <Join />
                </Route>
                <Route path="/view">
                    <View />
                </Route>
                <Route path="/write">
                    <Write />
                </Route>
                <Route path="/myPage">
                    <MyPage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
