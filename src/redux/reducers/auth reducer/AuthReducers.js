import { AuthActionTypes } from "../../actions/auth actions/constants";

const initialState = {
    user: {},
    isLoading: false,
};

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AuthActionTypes.USER_SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case AuthActionTypes.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload,
                error: "",
            };

        case AuthActionTypes.USER_SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                user: {},
                error: payload,
            };

        default:
            return state;
    }
};
