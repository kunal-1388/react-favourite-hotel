import React from "react";
import Hotel from "./Hotel";
import { hotelData } from "../../utils/hotelData.js";
function MainPage() {
    return (
        <div>
            {hotelData.map((hotel) => (
                <Hotel data={hotel} />
            ))}
        </div>
    );
}

export default MainPage;
