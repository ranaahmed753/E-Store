import React from "react";
import CartItem from "../cart item/CartItem";
import "./CartList.css";
import { useSelector } from "react-redux";
import Payments from "../../../components/payments/Payments";

function CartList() {
    const { allCarts } = useSelector((state) => state);
    const { carts } = allCarts;

    return carts.length !== 0 ? (
        <div className="cart__list">
            <div className="cart__list__left">
                {carts.map((cart, index) => (
                    <CartItem
                        key={index}
                        id={index}
                        image={cart.image}
                        title={cart.title}
                        price={cart.price}
                        category={cart.category}
                        quantity={cart.amount}
                        size={cart.size}
                    />
                ))}
            </div>

            <div className="cart__list__right">
                <Payments />
            </div>
        </div>
    ) : (
        <div
            style={{
                maxHeight: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 25,
                    textAlign: "center",
                }}
            >
                Your Cart is Empty
            </h3>
        </div>
    );
}

export default CartList;
