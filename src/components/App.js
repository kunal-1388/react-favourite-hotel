import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import MainPage from "./MainPage";
import PrivateRoute from "./PrivateRoute";
import Favourites from "./Favourites";
const App = () => {
    return (
        <div id="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}></Route>
                <PrivateRoute exact path="/main">
                    <MainPage />
                </PrivateRoute>
                <Route exact path="/favourites" component={Favourites}></Route>
            </Switch>
        </div>
    );
};

export default App;
