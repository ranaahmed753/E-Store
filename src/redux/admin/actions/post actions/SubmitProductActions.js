import { SubmitProductActionTypes } from "./constants";
import axios from "axios";
export const submitProductRequest = () => {
    return {
        type: SubmitProductActionTypes.SUBMIT_PRODUCT_REQUEST,
    };
};

export const submitProductSuccess = (products) => {
    return {
        type: SubmitProductActionTypes.SUBMIT_PRODUCT_SUCCESS,
        payload: products,
    };
};

export const submitProductFailure = (error) => {
    return {
        type: SubmitProductActionTypes.SUBMIT_PRODUCT_FAILURE,
        payload: error,
    };
};

export const submitProduct = (product) => {
    return (dispatch) => {
        dispatch(submitProductRequest());
        axios
            .post("https://estore-p28w.onrender.com/api/v1/products/", product)
            .then((res) => {
                dispatch(submitProductSuccess(res.data.data.products));
            })
            .catch((err) => {
                dispatch(submitProductFailure(err.message));
            });
    };
};

//delete product
export const deleteProductRequest = () => {
    return {
        type: SubmitProductActionTypes.DELETE_PRODUCT_REQUEST,
    };
};
export const deleteProductSuccess = (products) => {
    return {
        type: SubmitProductActionTypes.DELETE_PRODUCT_SUCCESS,
        payload: products,
    };
};
export const deleteProductFailure = (error) => {
    return {
        type: SubmitProductActionTypes.DELETE_PRODUCT_FAILURE,
        payload: error,
    };
};
export const deleteProduct = (id) => {
    return async (dispatch) => {
        dispatch(deleteProductRequest());
        await axios
            .delete(`https://estore-p28w.onrender.com/api/v1/products/${id}`)
            .then((res) => {
                const data = res.data;
                dispatch(deleteProductSuccess(data.products));
            })
            .catch((err) => {
                dispatch(deleteProductFailure(err.message));
            });
    };
};

//update product

export const updateProductRequest = () => {
    return {
        type: SubmitProductActionTypes.UPDATE_PRODUCT_REQUEST,
    };
};

export const updateProductSuccess = (products) => {
    return {
        type: SubmitProductActionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: products,
    };
};

export const updateProductFailure = (error) => {
    return {
        type: SubmitProductActionTypes.UPDATE_PRODUCT_FAILURE,
        payload: error,
    };
};

export const updateProduct = (id, product) => {
    return async (dispatch) => {
        dispatch(updateProductRequest());
        await axios
            .patch(
                `https://estore-p28w.onrender.com/api/v1/products/${id}`,
                product
            )
            .then((res) => {
                dispatch(updateProductSuccess(res.data.data.products));
            })
            .catch((err) => {
                dispatch(updateProductFailure(err.message));
            });
    };
};
