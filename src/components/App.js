import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import MainPage from "./MainPage";
import PrivateRoute from "./PrivateRoute";
import Favourites from "./Favourites";
import { LoginContext } from "../Context/LoginContext";
const App = () => {
    const [isLogin,setIsLogin]=useState(false);
    return (
        <LoginContext.Provider value={{isLogin,setIsLogin}}>
            <div id="main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login}></Route>
                    <PrivateRoute exact path="/main">
                        <MainPage />
                    </PrivateRoute>
                    <Route
                        exact
                        path="/favourites"
                        component={Favourites}
                    ></Route>
                </Switch>
            </div>
        </LoginContext.Provider>
    );
};

export default App;
