import React from "react";
import "./QuantityCounter.css";

function QuantityCounter({ increaseAmount, decreaseAmount, amount }) {
    return (
        <div className="quantity__counter">
            <div className="add_button" onClick={() => decreaseAmount()}>
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 20,
                    }}
                >
                    -
                </h3>
            </div>

            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 20,
                    marginLeft: 8,
                    marginRight: 8,
                }}
            >
                {amount}
            </h3>

            <div className="minus_button" onClick={() => increaseAmount()}>
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 20,
                    }}
                >
                    +
                </h3>
            </div>
        </div>
    );
}

export default QuantityCounter;
