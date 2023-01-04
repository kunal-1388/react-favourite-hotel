import React from "react";
import "../styles/Hotel.css";
function Hotel(props) {
    const { id, name, location, price, img } = props.data;
    console.log(name, location, price, img);

    function handleClick(e) {
        let savedList =
            JSON.parse(window.localStorage.getItem("favourites")) || [];

        if (savedList.find((item) => item.id === id) === undefined) {
            savedList.push({ id,name, location, price, img });
            window.localStorage.setItem(
                "favourites",
                JSON.stringify(savedList)
            );
        }
    }

    return (
        <div>
            <ul className="catCardList">
                <li className="catCardList">
                    <div className="catCard">
                        <a href="#">
                            <img src={img} alt="" />
                        </a>
                        <div className="lowerCatCard">
                            <h3>{name}</h3>
                            <div className="startingPrice">
                                Price: Rs <span>{price}</span>
                            </div>
                            Location: <h4>{location}</h4>
                            <div id="catCardButton" className="button">
                                <a onClick={handleClick}>Add to Favourites</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Hotel;
