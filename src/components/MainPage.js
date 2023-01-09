import React from "react";
import Hotel from "./Hotel";
import { hotelData } from "../../utils/hotelData.js";
import "../styles/MainPage.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function MainPage() {
    function handleSignOut() {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
        window.localStorage.removeItem("favourites");

    }

    return (
        <div>
            <Navbar
                links={[
                    ["My Favourites", "/favourites"],
                    ["Logout", "/"],
                ]}
                handleSignOut={handleSignOut}
            />
            {/* <div>
                <Link id="favourites" to="/favourites">
                    My Favourites
                </Link>
            </div>
            <div>
                <Link to="/" onClick={handleSignOut}>
                    Logout
                </Link>
            </div> */}

            <div id="main">
                {hotelData.map((hotel) => (
                    <Hotel data={hotel} />
                ))}
            </div>
        </div>
    );
}

export default MainPage;
