import React from "react";
import "../styles/Hotel.css";
function Favourites() {
    const myFavouritesList = JSON.parse(
        window.localStorage.getItem("favourites")
    );

    return (
        <div>
            {myFavouritesList.map((hotel) => {
                return (
                    <div>
                        <ul className="catCardList">
                            <li className="catCardList">
                                <div className="catCard">
                                    <a href="#">
                                        <img src={hotel.img} alt="" />
                                    </a>
                                    <div className="lowerCatCard">
                                        <h3>{hotel.name}</h3>
                                        <div className="startingPrice">
                                            Price: Rs <span>{hotel.price}</span>
                                        </div>
                                        Location: <h4>{hotel.location}</h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default Favourites;
