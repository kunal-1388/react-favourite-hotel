import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { hotelData } from "../../utils/hotelData.js";
import "../styles/Hotel.css";
function Home() {
    const selectedHotelData = hotelData.slice(0, 5);
    return (
        <div>
            <Navbar
                links={[
                    ["Login", "/login"],
                    ["Main", "/main"],
                ]}
            />
            <div id="main">
                {selectedHotelData.map((hotel) => {
                    return (
                        <div className="card">
                            <div className="card-image">
                                <img src={hotel.img} />
                            </div>
                            <div className="card-text">
                                <h2>{hotel.name}</h2>
                                <span className="location">
                                    {" "}
                                    {hotel.location}
                                </span>
                                <h4>Rs. {hotel.price} per night</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
