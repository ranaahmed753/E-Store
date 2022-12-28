import React from "react";
import CartButton from "../../../components/cart button/CartButton";
import "./ProductItem.css";

function ProductItem({ image, id, price }) {
    return (
        <div className="product__item">
            <img
                alt=""
                src={image}
                style={{
                    height: 300,
                    width: 250,
                    borderRadius: 5,
                    objectFit: "cover",
                    zIndex: 999,
                }}
            />

            <CartButton
                link={`/product_details/${id}`}
                title="CART"
                price={price}
            />
        </div>
    );
}

export default ProductItem;
