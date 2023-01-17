import React, { useContext } from "react";
import "../styles/Hotel.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/MainPage.css";
import { LoginContext } from "../Context/LoginContext";

function Favourites() {
    const { setIsLogin } = useContext(LoginContext);

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
        localStorage.setItem(id, true);
    }

    function handleSignOut() {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
        window.localStorage.removeItem("favourites");
        setIsLogin(false);
    }

    return (
        <div>
            <Navbar
                links={[
                    ["Back", "/main"],
                    ["Logout", "/", handleSignOut],
                ]}
            />

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
                                className={`button ${
                                    localStorage.getItem(hotel.id) === false
                                        ? "inactive"
                                        : ""
                                }`}
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
