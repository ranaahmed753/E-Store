import { GetProductActionTypes } from "../../actions/get product actions/constants";
const initialState = {
    isLoading: false,
    products: [],
    error: "",
    product: {},
    loading: false,
};

export const getProductsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GetProductActionTypes.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case GetProductActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                isLoading: false,
                error: "",
                products: payload,
            };

        case GetProductActionTypes.GET_PRODUCTS_FAILURE:
            return {
                isLoading: false,
                products: [],
                error: payload,
            };

        case GetProductActionTypes.GET_PRODUCT_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GetProductActionTypes.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                loading: false,
                product: payload,
                error: "",
            };

        case GetProductActionTypes.GET_PRODUCT_BY_ID_FAILURE:
            return {
                loading: false,
                product: {},
                error: payload,
            };

        default:
            return state;
    }
};
