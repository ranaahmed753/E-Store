import React from "react";
import "./CheckoutButton.css";
import { NavLink } from "react-router-dom";
import { switchToLogin } from "../../redux/actions/header actions/HeaderActions";
import { useDispatch } from "react-redux";

function CheckoutButton() {
    const dispatch = useDispatch();
    return (
        <NavLink
            to="/login"
            style={{ textDecoration: "none" }}
            className="checkout"
            onClick={() => dispatch(switchToLogin())}
        >
            <h3
                style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontSize: 14,
                }}
            >
                Checkout
            </h3>
        </NavLink>
    );
}

export default CheckoutButton;
