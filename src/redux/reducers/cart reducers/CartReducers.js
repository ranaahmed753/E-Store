import { CartActionTypes } from "../../actions/cart actions/constants";
const initialState = {
    carts: [],
    loading: false,
    error: "",
};
export const cartReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CartActionTypes.FETCH_CART_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CartActionTypes.FETCH_CART_SUCCESS:
            return {
                loading: true,
                carts: payload,
                error: "",
            };

        case CartActionTypes.FETCH_CART_FAILURE:
            return {
                loading: false,
                carts: [],
                error: payload,
            };

        case CartActionTypes.ADD_CARTS:
            return {
                carts: [...state.carts, payload],
            };

        case CartActionTypes.REMOVE_FROM_CARTS:
            return {
                carts: state.carts.filter((cart, index) => index !== payload),
            };

        default:
            return state;
    }
};
