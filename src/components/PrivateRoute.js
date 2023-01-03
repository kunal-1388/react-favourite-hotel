import React from "react";
import { Route, Redirect } from "react-router-dom";
import { userData } from "../../utils/userData";
function PrivateRoute({ children, ...rest }) {
    function isAuth() {
        const username = window.localStorage.getItem("username");
        const password = window.localStorage.getItem("password");
        for (let data of userData) {
            if (data.username === username && data.password === password) {
                return true;
            }
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
