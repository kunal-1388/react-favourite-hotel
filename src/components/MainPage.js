import React from "react";
import Hotel from "./Hotel";
import { hotelData } from "../../utils/hotelData.js";
import "../styles/MainPage.css";
import { Link } from "react-router-dom";
function MainPage() {
    function handleSignOut() {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
    }

    return (
        <div>
            <div>
                <Link id="favourites" to="/favourites">
                    My Favourites
                </Link>
            </div>
            <div>
                <Link to="/" onClick={handleSignOut}>
                    Logout
                </Link>
            </div>

            <div id="main">
                {hotelData.map((hotel) => (
                    <Hotel data={hotel} />
                ))}
            </div>
        </div>
    );
}

export default MainPage;
