import React from "react";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ children, ...rest }) {
    function isAuth() {
        const username = window.localStorage.getItem("username");
        const password = window.localStorage.getItem("password");
        if (username && password) {
            return true;
        }
        return false;
    }

    return isAuth() ? (
        <Route render={() => children}></Route>
    ) : (
        <Redirect to="/login" />
    );
}

export default PrivateRoute;
