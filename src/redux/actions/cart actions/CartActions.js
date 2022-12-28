import { CartActionTypes } from "../cart actions/constants";
import axios from "axios";

export const addCarts = (carts) => {
    return {
        type: CartActionTypes.ADD_CARTS,
        payload: carts,
    };
};

export const removeFromCarts = (id) => {
    return { type: CartActionTypes.REMOVE_FROM_CARTS, payload: id };
};

export const fetchCartsRequest = () => {
    return {
        type: CartActionTypes.FETCH_CART_REQUEST,
    };
};

export const fetchCartSuccess = (carts) => {
    return {
        type: CartActionTypes.FETCH_CART_SUCCESS,
        payload: carts,
    };
};

export const fetchCartFailure = (error) => {
    return {
        type: CartActionTypes.FETCH_CART_FAILURE,
        payload: error,
    };
};

export const fetchCarts = () => {
    return (dispatch) => {
        dispatch(fetchCartsRequest());
        axios
            .get(`https://fakestoreapi.com/products`)
            .then((res) => {
                const carts = res.data;
                dispatch(fetchCartSuccess(carts));
            })
            .catch((error) => {
                const message = error.message;
                dispatch(fetchCartFailure(message));
            });
    };
};
