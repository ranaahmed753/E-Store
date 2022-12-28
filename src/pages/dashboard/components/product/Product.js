import React, { useEffect } from "react";
import "./Product.css";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchToUpdateProducts } from "../../../../redux/admin/actions/sidebar actions/SidebarActions";
import { deleteProduct } from "../../../../redux/admin/actions/post actions/SubmitProductActions";

function Product({ id, image, price, title }) {
    const dispatch = useDispatch();
    const { submitProductsReducer } = useSelector((state) => state);
    const { isDeleting } = submitProductsReducer;
    const navigateToUpdateProduct = () => {
        dispatch(switchToUpdateProducts());
    };

    const deleteProductById = () => {
        dispatch(deleteProduct(id));
        toast.success("Product Deleting....", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
        });

        setTimeout(() => {
            window.location.reload();
        }, 4000);

        setTimeout(() => {
            toast.success("Product deleted Successfully", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
        }, 2000);
    };

    return (
        <div className="product">
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 15,
                    zIndex: 1000,
                    right: 0,
                    top: 0,
                    position: "absolute",
                    fontWeight: 700,
                    marginTop: 0,
                    backgroundColor: "white",
                    padding: 5,
                    cursor: "pointer",
                }}
                onClick={() => deleteProductById()}
            >
                X
            </h3>

            <img
                alt=""
                src={image}
                style={{
                    height: 200,
                    width: 200,
                    borderRadius: 5,
                    objectFit: "cover",
                    zIndex: 999,
                }}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 1000,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "black",
                    opacity: 0.5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    paddingLeft: 5,
                }}
            >
                <p
                    style={{
                        color: "white",
                        fontFamily: "Poppins",
                        fontSize: 13,
                        marginBottom: -7,
                        fontWeight: 10,
                    }}
                >
                    {title}
                </p>

                <p
                    style={{
                        color: "white",
                        fontFamily: "Poppins",
                        fontSize: 12,
                        marginBottom: -7,
                        fontWeight: 10,
                    }}
                >
                    ${price}
                </p>
                <NavLink
                    to={`/dashboard/update_products/${id}`}
                    onClick={() => navigateToUpdateProduct()}
                    style={{ textDecoration: "none" }}
                >
                    <p
                        style={{
                            color: "white",
                            fontFamily: "Poppins",
                            cursor: "pointer",
                            fontSize: 12,
                        }}
                    >
                        Update
                    </p>
                </NavLink>
            </div>
        </div>
    );
}

export default Product;
