import { ActionTypes } from "./constants";
import axios from "axios";

export const fetchProductsRequest = () => {
    return {
        type: ActionTypes.FETCH_PRODUCTS_REQUEST,
    };
};

export const fetchProductsSuccess = (products) => {
    return {
        type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: products,
    };
};

export const fetchSingleProductSuccess = (product) => {
    return {
        type: ActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS,
        payload: product,
    };
};

export const fetchProductsFailure = (error) => {
    return {
        type: ActionTypes.FETCH_PRODUCTS_FAILURE,
        payload: error,
    };
};

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                const products = res.data;
                dispatch(fetchProductsSuccess(products));
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(fetchProductsFailure(errorMessage));
            });
    };
};

export const fetchSingleProduct = (id) => {
    return (dispatch) => {
        dispatch(fetchSingleProductRequest());
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                const product = res.data;
                dispatch(fetchSingleProductSuccess(product));
            })
            .catch((error) => {
                const message = error.message;
                dispatch(fetchSingleProductFailure(message));
            });
    };
};

export const fetchSingleProductRequest = () => {
    return {
        type: ActionTypes.FETCH_SINGLE_PRODUCT_REQUEST,
    };
};

export const fetchSingleProductFailure = (error) => {
    return {
        type: ActionTypes.FETCH_SINGLE_PRODUCT_REQUEST,
        payload: error,
    };
};
