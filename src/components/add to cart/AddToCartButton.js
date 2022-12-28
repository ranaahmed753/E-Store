import React from "react";
import "./AddToCartButton.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addCarts } from "../../redux/actions/cart actions/CartActions";

function AddToCartButton({ image, title, price, category, amount, size, id }) {
    const dispatch = useDispatch();
    const { allCarts } = useSelector((state) => state);
    const { carts } = allCarts;

    const addItemToCart = () => {
        const newCarts = carts.filter((cart) => cart.title === title);
        if (newCarts.length !== 0 && newCarts !== []) {
            showToast("Item alredy added!", "warn");
        } else {
            dispatch(
                addCarts({
                    image: image,
                    title: title,
                    price: price * amount,
                    category: category,
                    amount: amount,
                    size: size,
                })
            );
            showToast("Item added to cart", "success");
        }
    };

    const showToast = (message, type) => {
        return type === "success"
            ? toast.success(message, {
                  position: toast.POSITION.BOTTOM_CENTER,
                  autoClose: 1000,
              })
            : toast.warn(message, {
                  position: toast.POSITION.BOTTOM_CENTER,
                  autoClose: 1000,
              });
    };

    return (
        <div className="add_to_cart" onClick={() => addItemToCart()}>
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 15,
                    fontWeight: 300,
                    color: "white",
                }}
            >
                Add To Cart
            </h3>
        </div>
    );
}
export default AddToCartButton;
