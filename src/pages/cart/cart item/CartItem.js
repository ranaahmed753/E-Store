import React from "react";
import "./CartItem.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { removeFromCarts } from "../../../redux/actions/cart actions/CartActions";

function CartItem({ id, image, title, price, category, quantity, size }) {
    const dispatch = useDispatch();
    const removeItemFromCarts = () => {
        dispatch(removeFromCarts(id));
        toast.success(`deleted successfully`, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000,
        });
    };
    return (
        <div className="cart__item">
            <div className="cart__item__left">
                <img
                    src={image}
                    style={{
                        objectFit: "contain",
                        height: 120,
                        width: 80,
                    }}
                />
            </div>

            <div className="cart__item__right">
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 12,
                        marginTop: 0,
                    }}
                >
                    {category}
                </h3>

                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 14,
                        marginTop: -5,
                        textAlign: "justify",
                        marginTop: -10,
                    }}
                >
                    {title}
                </h3>

                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 12,
                        marginTop: -10,
                    }}
                >
                    Total {quantity} Pieces && Size: {size}
                </h3>
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 12,
                        marginTop: -5,
                        marginTop: -10,
                    }}
                >
                    ${price}
                </h3>

                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 12,
                        backgroundColor: "black",
                        borderRadius: 999,
                        color: "white",
                        cursor: "pointer",
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 5,
                        paddingBottom: 5,
                        marginTop: -10,
                    }}
                    onClick={() => removeItemFromCarts()}
                >
                    Remove
                </h3>
            </div>
        </div>
    );
}

export default CartItem;
