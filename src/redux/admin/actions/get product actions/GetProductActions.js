import { GetProductActionTypes } from "./constants";
import axios from "axios";

//get all products
export const getProductsRequest = () => {
    return {
        type: GetProductActionTypes.GET_PRODUCTS_REQUEST,
    };
};

export const getProductsSuccess = (products) => {
    return {
        type: GetProductActionTypes.GET_PRODUCTS_SUCCESS,
        payload: products,
    };
};

export const getProductsFailure = (error) => {
    return {
        type: GetProductActionTypes.GET_PRODUCTS_FAILURE,
        payload: error,
    };
};

export const getProducts = () => {
    return async (dispatch) => {
        dispatch(getProductsRequest());
        await axios
            .get("https://estore-p28w.onrender.com/api/v1/products/")
            .then((res) => {
                dispatch(getProductsSuccess(res.data.data.products));
            })
            .catch((err) => {
                dispatch(getProductsFailure(err.message));
            });
    };
};

//get product by id

export const getProductByIdRequest = () => {
    return {
        type: GetProductActionTypes.GET_PRODUCT_BY_ID_REQUEST,
    };
};

export const getProductByIdSuccess = (product) => {
    return {
        type: GetProductActionTypes.GET_PRODUCT_BY_ID_SUCCESS,
        payload: product,
    };
};

export const getProductByIdFailure = (error) => {
    return {
        type: GetProductActionTypes.GET_PRODUCT_BY_ID_FAILURE,
        payload: error,
    };
};

export const getProductById = (id) => {
    return async (dispatch) => {
        dispatch(getProductByIdRequest());
        await axios
            .get(`https://estore-p28w.onrender.com/api/v1/products/${id}`)
            .then((res) => {
                dispatch(getProductByIdSuccess(res.data.data.product));
            })
            .catch((err) => {
                dispatch(getProductByIdFailure(err.message));
            });
    };
};
