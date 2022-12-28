import React from "react";
import "./TextButton.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function TextButton({ name, link, onPress }) {
    const { allCarts, headerReducer } = useSelector((state) => state);
    const { carts } = allCarts;
    const { isLoginPage, isCartPage, isDashboardPage, isRegisterPage } =
        headerReducer;
    if (name === "Login") {
        return (
            <NavLink
                className={
                    isLoginPage ? "active__textbutton" : "inactive__textbutton"
                }
                to={link}
                style={{ textDecoration: "none" }}
                onClick={() => onPress()}
            >
                <h3
                    style={{
                        fontFamily: "Poppins",
                        color: "black",
                        fontWeight: 300,
                        fontStyle: "normal",
                        fontSize: 15,
                    }}
                >
                    {name}
                </h3>
            </NavLink>
        );
    }

    if (name === "Register") {
        return (
            <NavLink
                className={
                    isRegisterPage
                        ? "active__textbutton"
                        : "inactive__textbutton"
                }
                to={link}
                style={{ textDecoration: "none" }}
                onClick={() => onPress()}
            >
                <h3
                    style={{
                        fontFamily: "Poppins",
                        color: "black",
                        fontWeight: 300,
                        fontStyle: "normal",
                        fontSize: 15,
                    }}
                >
                    {name}
                </h3>
            </NavLink>
        );
    }

    if (name === "Dashboard") {
        return (
            <NavLink
                className={
                    isDashboardPage
                        ? "active__textbutton"
                        : "inactive__textbutton"
                }
                to={link}
                style={{ textDecoration: "none" }}
                onClick={() => onPress()}
            >
                <h3
                    style={{
                        fontFamily: "Poppins",
                        color: "black",
                        fontWeight: 300,
                        fontStyle: "normal",
                        fontSize: 15,
                    }}
                >
                    {name}
                </h3>
            </NavLink>
        );
    }

    if (name === "Cart") {
        return (
            <NavLink
                className={
                    isCartPage ? "active__textbutton" : "inactive__textbutton"
                }
                to={link}
                style={{ textDecoration: "none" }}
                onClick={() => onPress()}
            >
                <h3
                    style={{
                        fontFamily: "Poppins",
                        color: "black",
                        fontWeight: 300,
                        fontStyle: "normal",
                        fontSize: 15,
                    }}
                >
                    {carts.length !== 0 && name === "Cart"
                        ? "Cart{" + carts.length + "}"
                        : name === "Cart" && "Cart"}
                </h3>
            </NavLink>
        );
    }
}

export default TextButton;
