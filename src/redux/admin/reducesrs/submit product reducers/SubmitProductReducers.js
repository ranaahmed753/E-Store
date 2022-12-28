import { SubmitProductActionTypes } from "../../actions/post actions/constants";
const initialState = {
    isLoading: false,
    products: [],
    error: "",
    isDeleting: false,
    isUpdating: false,
};

export const submitProductReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SubmitProductActionTypes.SUBMIT_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case SubmitProductActionTypes.SUBMIT_PRODUCT_SUCCESS:
            return {
                isLoading: false,
                products: payload,
                error: "",
            };

        case SubmitProductActionTypes.SUBMIT_PRODUCT_FAILURE:
            return {
                isLoading: false,
                products: [],
                error: payload,
            };

        case SubmitProductActionTypes.DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                isDeleting: true,
            };

        case SubmitProductActionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                isDeleting: false,
                products: payload,
                error: "",
            };

        case SubmitProductActionTypes.DELETE_PRODUCT_FAILURE:
            return {
                isDeleting: false,
                error: payload,
                products: [],
            };

        case SubmitProductActionTypes.UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                isUpdating: true,
            };

        case SubmitProductActionTypes.UPDATE_PRODUCT_SUCCESS:
            return {
                isUpdating: false,
                products: payload,
                error: "",
            };

        case SubmitProductActionTypes.UPDATE_PRODUCT_FAILURE:
            return {
                isUpdating: false,
                products: [],
                error: payload,
            };

        default:
            return state;
    }
};
