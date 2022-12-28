import { HeaderActionTypes } from "./constants";
export const switchToLogin = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_LOGIN_PAGE,
    };
};

export const switchToCart = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_CART_PAGE,
    };
};

export const switchToDashboard = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_DASHBOARD_PAGE,
    };
};

export const switchToRegister = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_REGISTER_PAGE,
    };
};

export const switchToHomePage = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_HOME_PAGE,
    };
};
