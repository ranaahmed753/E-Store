import React from "react";
import "./Payments.css";
import { creditCard, paypal } from "../../assets";
import CheckoutButton from "../checkout button/CheckoutButton";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Payments() {
    const { allCarts } = useSelector((state) => state);
    const { carts } = allCarts;
    var totalPrice = 0;
    const countTotalPrice = () => {
        carts.length != 0 &&
            carts.map((cart) => {
                totalPrice = totalPrice + cart.price;
            });
    };
    countTotalPrice();
    return (
        <div className="payments">
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 15,
                }}
            >
                Payments Summary
            </h3>
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 15,
                    marginTop: 0,
                }}
            >
                Total Price ${totalPrice}
            </h3>
            <div className="card__details">
                <img
                    src={paypal}
                    style={{
                        height: 50,
                        width: 80,
                        objectFit: "cover",
                        cursor: "pointer",
                    }}
                />

                <img
                    src={creditCard}
                    style={{
                        height: 50,
                        width: 80,
                        objectFit: "cover",
                        cursor: "pointer",
                        marginLeft: 15,
                    }}
                />
            </div>

            <CheckoutButton />
        </div>
    );
}

export default Payments;
