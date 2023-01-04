import React from "react";
import Hotel from "./Hotel";
import { hotelData } from "../../utils/hotelData.js";
import "../styles/MainPage.css";
import { Link } from "react-router-dom";
function MainPage() {
    return (
        <div id="main">
            <Link id="favourites" to="/favourites">
                My Favourites
            </Link>
            {hotelData.map((hotel) => (
                <Hotel data={hotel} />
            ))}
        </div>
    );
}

export default MainPage;
