import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../redux/actions/product actions/ProductActions";
import Loading from "../../components/loading/Loading";
import AddToCartButton from "../../components/add to cart/AddToCartButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuantityCounter from "../../components/quantity counter/QuantityCounter";
import DropDown from "../../components/drop down/DropDown";

function ProductDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { allProducts } = useSelector((state) => state);
    const { product } = allProducts;
    const [amount, setAmount] = useState(0);
    const [size, setSize] = useState("");
    const increaseAmount = () => {
        setAmount(amount + 1);
    };
    const decreaseAmount = () => {
        amount > 0 && setAmount(amount - 1);
    };
    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, []);

    return product ? (
        <div className="product__details">
            <ToastContainer hideProgressBar />
            <div className="productDetails__left">
                <img
                    src={product !== undefined && product.image}
                    style={{
                        width: "100%",
                        height: "100%",
                        boxFit: "cover",
                    }}
                />
            </div>

            <div className="productDetails__right">
                <h3
                    style={{
                        fontFamily: "Ubuntu",
                        letterSpacing: 5,
                        fontSize: "2em",
                        marginTop: "auto",
                    }}
                >
                    {product !== undefined && product.title}
                </h3>

                <h3
                    style={{
                        fontFamily: "Poppins",
                        letterSpacing: 2,
                        marginTop: "auto",
                        fontSize: 20,
                        fontWeight: 400,
                    }}
                >
                    ${product !== undefined && product.price}
                </h3>

                <h3
                    style={{
                        fontFamily: "Poppins",
                        letterSpacing: 3,
                        marginTop: "auto",
                        fontSize: 15,
                    }}
                >
                    DESCRIPTION
                    <span
                        style={{
                            color: "lightgray",
                            marginLeft: 10,
                        }}
                    >
                        / DETAILS
                    </span>
                    <span
                        style={{
                            color: "lightgray",
                            marginLeft: 10,
                        }}
                    >
                        / FIT
                    </span>
                </h3>

                <p
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 15,
                        textAlign: "justify",
                    }}
                >
                    {product !== undefined && product.description}
                </p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <QuantityCounter
                        increaseAmount={increaseAmount}
                        decreaseAmount={decreaseAmount}
                        amount={amount}
                    />
                    <DropDown size={size} changeSize={setSize} />
                </div>

                <AddToCartButton
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    amount={amount}
                    size={size}
                    id={id}
                />
            </div>
        </div>
    ) : (
        <div className="product__details">
            <Loading />
        </div>
    );
}

export default ProductDetails;
