import React from "react";
import ProductItem from "../product items/ProductItem";
import "./ProductList.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../redux/actions/product actions/ProductActions";

function ProductList() {
    const { allProducts } = useSelector((state) => state);
    const { products, error, loading } = allProducts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return !loading ? (
        <div className="product__list">
            {products !== undefined &&
                products.map((product, index) => (
                    <ProductItem
                        key={index}
                        id={product.id}
                        image={product.image}
                        price={product.price}
                    />
                ))}

            {error && (
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h3
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 20,
                            textAlign: "center",
                        }}
                    >
                        {error}
                    </h3>
                </div>
            )}
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
                    fontSize: 20,
                    textAlign: "center",
                }}
            >
                Loading.....
            </h3>
        </div>
    );
}

export default ProductList;
