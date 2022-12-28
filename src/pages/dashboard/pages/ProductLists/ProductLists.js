import React, { useEffect } from "react";
import Product from "../../components/product/Product";
import "./ProductLists.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/admin/actions/get product actions/GetProductActions";

function ProductLists() {
    const dispatch = useDispatch();
    const { getProductsReducer } = useSelector((state) => state);
    const { isLoading, products, error } = getProductsReducer;
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    return (
        <div className="product__lists">
            <div className="productLists__header">
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 16,
                    }}
                >
                    Product Lists
                </h3>
            </div>
            {!isLoading ? (
                <div className="productLits__body">
                    {products !== undefined &&
                        products.map((product, index) => (
                            <Product
                                key={index}
                                id={product._id}
                                image="https://i.pinimg.com/originals/22/bd/5b/22bd5b5f3ee93db33630aa56153a5151.jpg"
                                price={product.price}
                                title={product.title}
                            />
                        ))}

                    {error && (
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
                            fontSize: 15,
                            textAlign: "center",
                            margin: "auto",
                        }}
                    >
                        Loading...
                    </h3>
                </div>
            )}
        </div>
    );
}

export default ProductLists;
