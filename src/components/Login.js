import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { userData } from "../../utils/userData";
import "../styles/Login.css";
import { LoginContext } from "../Context/LoginContext";
function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLogin } = useContext(LoginContext);
    let history = useHistory();
    function handleClick(e) {
        e.preventDefault();
        for (let data of userData) {
            if (username === data.username && password === data.password) {
                window.localStorage.setItem("username", data.username);
                window.localStorage.setItem("password", data.password);
                setIsLogin(true);
                history.push("/");
            } else {
                setUserName("");
                setPassword("");
            }
        }
    }

    return (
        <div>
            <form className="login">
                <h1>Login Here</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button id="submit" onClick={handleClick}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
