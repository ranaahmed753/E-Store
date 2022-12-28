import { CustomersActionTypes } from "../../actions/customer actions/constants";

const initialState = {
    isLoading: false,
    customers: [],
    error: "",
    customer: {},
    loading: false,
};

export const customersReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CustomersActionTypes.GET_CUSTOMERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case CustomersActionTypes.GET_CUSTOMERS_SUCCESS:
            return {
                isLoading: false,
                customers: payload,
                error: "",
            };

        case CustomersActionTypes.GET_CUSTOMERS_FAILURE:
            return {
                isLoading: false,
                customers: [],
                error: payload,
            };

        case CustomersActionTypes.GET_CUSTOMER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CustomersActionTypes.GET_CUSTOMER_BY_ID_SUCCESS:
            return {
                loading: false,
                customer: payload,
                error: "",
            };

        case CustomersActionTypes.GET_CCUSTOMER_BY_ID_FAILURE:
            return {
                loading: false,
                customer: {},
                error: payload,
            };

        default:
            return state;
    }
};
