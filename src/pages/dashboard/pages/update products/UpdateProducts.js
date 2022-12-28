import React, { useEffect, useState } from "react";
import UpdateProductItem from "../../components/update product item/UpdateProductItem";
import "./UpdateProducts.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../../redux/admin/actions/get product actions/GetProductActions";
import { updateProduct } from "../../../../redux/admin/actions/post actions/SubmitProductActions";

function UpdateProducts() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();
    const { getProductsReducer, submitProductsReducer } = useSelector(
        (state) => state
    );
    const { product, error } = getProductsReducer;
    const { isUpdating } = submitProductsReducer;
    useEffect(() => {
        dispatch(getProductById(id));
    }, [id]);

    const updateProductById = () => {
        if (title === "" || description === "" || price === "") {
            toast.warn("some fields may be empty!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
        } else {
            dispatch(
                updateProduct(id, {
                    title: title,
                    description: description,
                    price: price,
                    imgUrl: "",
                })
            );

            setTimeout(() => {
                error === "" &&
                    !isUpdating &&
                    toast.success("Product Updated Successfully", {
                        position: toast.POSITION.BOTTOM_CENTER,
                        autoClose: 4000,
                    });
                error &&
                    !isUpdating &&
                    toast.warn("Opps:" + error, {
                        position: toast.POSITION.BOTTOM_CENTER,
                        autoClose: 4000,
                    });
            }, 4000);
        }
    };

    return (
        <div className="update__product">
            <div className="updateProduct__header">
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 16,
                    }}
                >
                    Update Product
                </h3>
            </div>
            <div className="updateProduct__body">
                <img
                    alt=""
                    src="https://static.r1.pixmama.com/image/tmd/foUr6p4ppZ.webp"
                    style={{
                        width: "30%",
                        height: 400,
                        objectFit: "cover",
                        flex: 0.3,
                    }}
                />
                <div className="updateProductBody__right">
                    <UpdateProductItem
                        name="Product Name"
                        type="normal-field"
                        placeholder={product !== undefined && product.title}
                        setSomething={setTitle}
                    />
                    <UpdateProductItem
                        name="Product Price"
                        type="normal-field"
                        placeholder={product !== undefined && product.price}
                        setSomething={setPrice}
                    />
                    <UpdateProductItem
                        name="Product Description"
                        type="description"
                        placeholder={
                            product !== undefined && product.description
                        }
                        setSomething={setDescription}
                    />
                    <UpdateProductItem
                        name="In-Stock"
                        type="normal-field"
                        placeholder=""
                        setSomething=""
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flex: 1,
                            marginLeft: "auto",
                        }}
                    >
                        <button
                            style={{
                                fontFamily: "Poppins",
                                fontSize: 15,
                                marginRight: 20,
                                outline: 0,
                                border: 0,
                                padding: 10,
                                marginTop: 10,
                                flex: 1,
                                cursor: "pointer",
                                backgroundColor: "black",
                                color: "white",
                            }}
                            onClick={() => updateProductById()}
                        >
                            {isUpdating ? "Updating.." : "Update"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProducts;
