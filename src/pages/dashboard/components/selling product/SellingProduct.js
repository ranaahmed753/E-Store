import React from "react";
import "./SellingProduct.css";

function SellingProduct({ name, image, price }) {
    return (
        <div className="selling__product">
            <img
                alt=""
                src={image}
                style={{
                    height: 30,
                    width: 30,
                    borderRadius: 10,
                    marginLeft: 10,
                }}
            />
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 12,
                    marginLeft: 5,
                }}
            >
                {name}
            </h3>
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 12,
                    marginLeft: "auto",
                    marginRight: 10,
                }}
            >
                {price}
            </h3>
        </div>
    );
}

export default SellingProduct;
