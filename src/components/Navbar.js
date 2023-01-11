import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { LoginContext } from "../Context/LoginContext";
function Navbar(props) {
    const { isLogin } = useContext(LoginContext);
    const links = props.links.filter((item) => {
        if (item[0] === "Login" && isLogin === true) {
            return false;
        }
        return true;
    });
    return (
        <nav id="topnav">
            <div className="navbar">
                <ul className="nav-item">
                    {links.map((item) => {
                        const [linkText, linkTo] = item;
                        if (item.length === 2) {
                            return (
                                <Link
                                    to={linkTo}
                                    className="nav-link"
                                    id={linkText}
                                >
                                    {linkText}
                                </Link>
                            );
                        }

                        return (
                            <Link
                                to={linkTo}
                                className="nav-link"
                                id={linkText}
                                onClick={item[2]}
                            >
                                {linkText}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
