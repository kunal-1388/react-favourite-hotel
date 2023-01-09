import React from "react";
import "../styles/Hotel.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/MainPage.css";
function Favourites() {
    const myFavouritesList =
        JSON.parse(window.localStorage.getItem("favourites")) || [];

    const styles = {
        display: "flex",
        justifyContent: "column",
        flexWrap: "wrap",
    };

    function handleClick(e) {
        const id = e.target.id;
        let savedList = JSON.parse(window.localStorage.getItem("favourites"));
        const newArray = savedList.filter((item) => item.id != id);
        window.localStorage.setItem("favourites", JSON.stringify(newArray));
        e.target.parentElement.remove();
    }

    function handleSignOut() {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
        window.localStorage.removeItem("favourites");
    }

    return (
        <div>
            <Navbar
                links={[
                    ["Go Back", "/main"],
                    ["Logout", "/"],
                ]}
                handleSignOut={handleSignOut}
            />
            {/* <div>

                <Link to="/" onClick={handleSignOut}>
                    Logout
                </Link>
            </div> */}
            <div style={styles}>
                {myFavouritesList.map((hotel) => {
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
                            <button
                                id={hotel.id}
                                className="button"
                                onClick={handleClick}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Favourites;
