import React from "react";
import "../styles/Hotel.css";
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

    return (
        <div style={styles}>
            {myFavouritesList.map((hotel) => {
                return (
                    <div className="card">
                        <div className="card-image">
                            <img src={hotel.img} />
                        </div>
                        <div className="card-text">
                            <h2>{hotel.name}</h2>
                            <span className="location"> {hotel.location}</span>
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
    );
}

export default Favourites;
