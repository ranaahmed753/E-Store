import { ActionTypes } from "../../actions/product actions/constants";

const initialState = {
    products: [],
    loading: false,
    error: "",
    product: {},
};

export const productReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: payload,
                error: "",
            };

        case ActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                error: payload,
            };

        case ActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: payload,
                error: "",
            };

        case ActionTypes.FETCH_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ActionTypes.FETCH_SINGLE_PRODUCT_FAILURE:
            return {
                loading: false,
                product: {},
                error: payload,
            };

        default:
            return state;
    }
};
