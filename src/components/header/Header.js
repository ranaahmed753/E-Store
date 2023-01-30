import React from "react";
import { NavLink } from "react-router-dom";
import TextButton from "../custom text button/TextButton";
import TextField from "../textfield/TextField";
import "./Header.css";
import { LOGO } from "../../assets/index.js";
import { useDispatch } from "react-redux";
import {
    switchToLogin,
    switchToCart,
    switchToDashboard,
    switchToRegister,
    switchToHomePage,
} from "../../redux/actions/header actions/HeaderActions";

function Header() {
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="header__left">
                <NavLink
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={() => dispatch(switchToHomePage())}
                >
                    <img
                        alt=""
                        src={LOGO}
                        style={{
                            height: 50,
                            width: 50,
                            marginLeft: 15,
                            cursor: "pointer",
                        }}
                    />
                </NavLink>
                <h3
                    style={{
                        fontFamily: "Ubuntu",
                        fontSize: 25,
                        marginLeft: 8,
                    }}
                >
                    E-STORE
                </h3>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 0.2,
                    justifyItems: "center",
                }}
            >
                <TextField />
            </div>

            <div className="header__right">
                <TextButton
                    name="Register"
                    link="/register"
                    onPress={() => dispatch(switchToRegister())}
                />
                <TextButton
                    name="Login"
                    link="/login"
                    onPress={() => dispatch(switchToLogin())}
                />
                <TextButton
                    name="Dashboard"
                    // link="/dashboard/overview"
                    // onPress={() => dispatch(switchToOverview())}
                    link="/dashboard"
                    onPress={() => dispatch(switchToDashboard())}

                    // link changed
                />
                <TextButton
                    name="Cart"
                    link="/cart"
                    onPress={() => dispatch(switchToCart())}
                />
            </div>
        </div>
    );
}

export default Header;
