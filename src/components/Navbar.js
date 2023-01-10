import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { LoginContext } from "../Context/LoginContext";
function Navbar(props) {
    const { isLogin } = useContext(LoginContext);
    console.log(isLogin);
    const links = props.links.filter((pair) => {
        if (pair[0] === "Login" && isLogin === true) {
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

                    {/* <li className="nav-link">
                        <Link to={pointsTo1} id={link1}>
                            {link1}
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            to={pointsTo2}
                            id={link2}
                            onClick={props.handleSignOut}
                        >
                            {link2}
                        </Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
