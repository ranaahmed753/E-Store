import React, { useState } from "react";
import "./AddProducts.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import AddProductInput from "../../components/add product input/AddProductInput";
import { submitProduct } from "../../../../redux/admin/actions/post actions/SubmitProductActions";
import { useDispatch, useSelector } from "react-redux";

function AddProducts() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    const { submitProductsReducer } = useSelector((state) => state);
    const { isLoading, error } = submitProductsReducer;

    const addProduct = () => {
        if (title === "" || description === "" || price === "") {
            toast.warn("some fields may be empty!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
        } else {
            dispatch(
                submitProduct({
                    title: title,
                    description: description,
                    price: price,
                    imgUrl: "",
                })
            );

            setTimeout(() => {
                error === "" &&
                    !isLoading &&
                    toast.success("Product Added Successfully", {
                        position: toast.POSITION.BOTTOM_CENTER,
                        autoClose: 4000,
                    });
                error &&
                    !isLoading &&
                    toast.warn("Opps:" + error, {
                        position: toast.POSITION.BOTTOM_CENTER,
                        autoClose: 4000,
                    });
            }, 4000);
        }
    };
    return (
        <div className="add_products">
            <div className="addProducts__header">
                <h3 style={{ fontFamily: "Poppins", fontSize: 16 }}>
                    Add Products
                </h3>
            </div>
            <div className="addProducts__body">
                <AddProductInput
                    name="Product Title"
                    fileType="input"
                    inputType="input"
                    something={title}
                    setSomething={setTitle}
                />
                <AddProductInput
                    name="Product Price"
                    fileType="input"
                    inputType="input"
                    something={price}
                    setSomething={setPrice}
                />
                <AddProductInput
                    name="Product Description"
                    fileType="input"
                    inputType="text-area"
                    something={description}
                    setSomething={setDescription}
                />
                <AddProductInput
                    name="In-Stock/Available/Unavailable"
                    fileType="input"
                    inputType="input"
                    something=""
                    setSomething=""
                />
                <AddProductInput
                    name="Product Image"
                    fileType="file"
                    inputType="file"
                    something=""
                    setSomething=""
                />
                <button
                    style={{
                        width: "70%",
                        flex: 1,
                        outline: 0,
                        border: 0,
                        backgroundColor: "black",
                        padding: 10,
                        cursor: "pointer",
                        color: "white",
                        fontFamily: "Poppins",
                        fontSize: 15,
                        alignSelf: "center",
                        marginTop: 5,
                    }}
                    onClick={() => addProduct()}
                >
                    {isLoading ? "Uploading...." : "Submit"}
                </button>
            </div>
        </div>
    );
}

export default AddProducts;
