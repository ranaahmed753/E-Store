import { HeaderActionTypes } from "../../actions/header actions/constants";
const initialState = {
    isLoginPage: false,
    isCartPage: false,
    isDashboardPage: false,
    isRegisterPage: false,
    isHomePage: false,
};

export const headerReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case HeaderActionTypes.SWITCH_TO_LOGIN_PAGE:
            return {
                isLoginPage: true,
                isDashboardPage: false,
                isCartPage: false,
                isRegisterPage: false,
                isHomePage: false,
            };

        case HeaderActionTypes.SWITCH_TO_CART_PAGE:
            return {
                isLoginPage: false,
                isCartPage: true,
                isDashboardPage: false,
                isRegisterPage: false,
                isHomePage: false,
            };

        case HeaderActionTypes.SWITCH_TO_DASHBOARD_PAGE:
            return {
                isLoginPage: false,
                isCartPage: false,
                isDashboardPage: true,
                isRegisterPage: false,
                isHomePage: false,
            };

        case HeaderActionTypes.SWITCH_TO_REGISTER_PAGE:
            return {
                isLoginPage: false,
                isCartPage: false,
                isDashboardPage: false,
                isRegisterPage: true,
                isHomePage: false,
            };

        case HeaderActionTypes.SWITCH_TO_HOME_PAGE:
            return {
                isLoginPage: false,
                isCartPage: false,
                isDashboardPage: false,
                isRegisterPage: false,
                isHomePage: true,
            };

        default:
            return state;
    }
};
