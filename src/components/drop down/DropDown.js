import React from "react";
import "./DropDown.css";

function DropDown({ size, changeSize }) {
    return (
        <div className="dropdown">
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 15,
                }}
            >
                SIZE
            </h3>
            <select
                style={{
                    marginLeft: 10,
                    border: 0,
                    outline: 0,
                    borderWidth: 0,
                    padding: 10,
                    fontFamily: "Poppins",
                    fontSize: 15,
                }}
                value={size}
                onChange={(e) => changeSize(e.target.value)}
            >
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
                <option>3XL</option>
                <option>M</option>
                <option>S</option>
            </select>
        </div>
    );
}

export default DropDown;
