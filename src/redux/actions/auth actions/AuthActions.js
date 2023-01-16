import { AuthActionTypes } from "../auth actions/constants";
import axios from "axios";

export const signupRequest = () => {
    return {
        type: AuthActionTypes.USER_SIGNUP_REQUEST,
    };
};

export const signupSuccess = (user) => {
    return {
        type: AuthActionTypes.USER_SIGNUP_SUCCESS,
        payload: user,
    };
};

export const signupFailure = (error) => {
    return {
        type: AuthActionTypes.USER_SIGNUP_FAILURE,
        payload: error,
    };
};

export const signup = (user) => {
    // const config = {
    //     headers: {
    //         "Content-type": "application/json",
    //         Authorization: `Bearer ${Cookies.get("jwt")}`,
    //     },
    // };
    return (dispatch) => {
        dispatch(signupRequest());
        axios
            .post("https://estore-p28w.onrender.com/api/v1/users/signup", user)
            .then((res) => {
                dispatch(signupSuccess(res.data.user));
            })
            .catch((err) => {
                dispatch(signupFailure(err.message));
            });
    };
};
