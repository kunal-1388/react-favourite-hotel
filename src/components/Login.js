import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { userData } from "../../utils/userData";
function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    function handleClick(e) {
        e.preventDefault();
        for (let data of userData) {
            if (username === data.username && password === data.password) {
                window.localStorage.setItem("username", data.username);
                window.localStorage.setItem("password", data.password);
                history.push("/main");
            } else {
                setUserName("");
                setPassword("");
            }
        }
    }

    return (
        <div>
            <form>
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
