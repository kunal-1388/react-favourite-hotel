import React from "react";
import Hotel from "./Hotel";
import { hotelData } from "../../utils/hotelData.js";
import "../styles/MainPage.css";
function MainPage() {
    return (
        <div id="main">
            {hotelData.map((hotel) => (
                <Hotel data={hotel} />
            ))}
        </div>
    );
}

export default MainPage;
