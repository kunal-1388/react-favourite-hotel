import React, { useState } from "react";
import "../styles/Hotel.css";
function Hotel(props) {
    const { id, name, location, price, img } = props.data;
    console.log(name, location, price, img);
    const [inActive, setInActive] = useState(false);
    function handleClick(e) {
        let savedList =
            JSON.parse(window.localStorage.getItem("favourites")) || [];

        if (savedList.find((item) => item.id === id) === undefined) {
            savedList.push({ id, name, location, price, img });
            window.localStorage.setItem(
                "favourites",
                JSON.stringify(savedList)
            );
        }
        localStorage.setItem(id,false);
        e.target.classList.add("inactive");
    }

    return (
        <div className="card">
            <div className="card-image">
                <img src={img} />
            </div>
            <div className="card-text">
                <h2>{name}</h2>
                <span className="location"> {location}</span>
                <h4>Rs. {price} per night</h4>
            </div>
            <button className={`button`} onClick={handleClick}>
                Add to Favourites
            </button>
        </div>
    );
}

export default Hotel;
