import { CustomersActionTypes } from "./constants";
import axios from "axios";

//get all customers
export const getCustomersRequest = () => {
    return {
        type: CustomersActionTypes.GET_CUSTOMERS_REQUEST,
    };
};

export const getCustomersSuccess = (customers) => {
    return {
        type: CustomersActionTypes.GET_CUSTOMERS_SUCCESS,
        payload: customers,
    };
};

export const getCustomersFailure = (error) => {
    return {
        type: CustomersActionTypes.GET_CUSTOMERS_FAILURE,
        payload: error,
    };
};

export const getCustomers = () => {
    return (dispatch) => {
        dispatch(getCustomersRequest());
        axios
            .get("https://reqres.in/api/users")
            .then((res) => {
                console.log("data from customer actions" + res.data);
                dispatch(getCustomersSuccess(res.data.data));
            })
            .catch((err) => {
                dispatch(getCustomersFailure(err.message));
            });
    };
};

//get customer by id

export const getCustomerByIdRequest = () => {
    return {
        type: CustomersActionTypes.GET_CUSTOMER_BY_ID_REQUEST,
    };
};

export const getCustomerByIdSuccess = (customer) => {
    return {
        type: CustomersActionTypes.GET_CUSTOMER_BY_ID_SUCCESS,
        payload: customer,
    };
};

export const getCustomerByIdFailure = (error) => {
    return {
        type: CustomersActionTypes.GET_CCUSTOMER_BY_ID_FAILURE,
        payload: error,
    };
};
export const getCustomerById = (id) => {
    return (dispatch) => {
        dispatch(getCustomerByIdRequest());
        axios
            .get(`https://reqres.in/api/users/${id}`)
            .then((res) => {
                dispatch(getCustomerByIdSuccess(res.data.data));
            })
            .catch((err) => {
                dispatch(getCustomerByIdFailure(err.message));
            });
    };
};
