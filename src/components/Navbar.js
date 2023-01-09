import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar(props) {
    const [[link1, pointsTo1], [link2, pointsTo2]] = props.links;

    return (
        <nav id="topnav">
            <div className="navbar">
                <ul className="nav-item">
                    <li className="nav-link">
                        <Link to={pointsTo1}>{link1}</Link>
                    </li>
                    <li className="nav-link">
                        <Link to={pointsTo2} onClick={props.handleSignOut}>
                            {link2}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
