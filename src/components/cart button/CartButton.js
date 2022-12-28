import React from "react";
import "./CartButton.css";
import { useNavigate } from "react-router-dom";

function CartButton({ link, title, price }) {
    const navigate = useNavigate();

    return (
        <div className="cart__button" onClick={() => navigate(link)}>
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 15,
                    fontWeight: 300,
                    color: "white",
                }}
            >
                ${price} {title}
            </h3>
        </div>
    );
}

export default CartButton;
