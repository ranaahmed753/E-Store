import { SidebarActionTypes } from "../../actions/sidebar actions/constants";
const initialState = {
    isOverView: false,
    isProductLists: false,
    isCustomerLists: false,
    isAddProductLists: false,
    isProductUpdate: false,
};

export const sidebarReducers = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case SidebarActionTypes.SWITCH_TO_OVERVIEW:
            return {
                isOverView: true,
                isProductLists: false,
                isCustomerLists: false,
                isAddProductLists: false,
                isProductUpdate: false,
            };

        case SidebarActionTypes.SWITCH_TO_PRODUCTS_LISTS:
            return {
                isOverView: false,
                isProductLists: true,
                isCustomerLists: false,
                isAddProductLists: false,
                isProductUpdate: false,
            };

        case SidebarActionTypes.SWITCH_TO_CUSTOMERS_LISTS:
            return {
                isOverView: false,
                isProductLists: false,
                isCustomerLists: true,
                isAddProductLists: false,
                isProductUpdate: false,
            };

        case SidebarActionTypes.SWITCH_TO_ADD_PRODUCTS:
            return {
                isOverView: false,
                isProductLists: false,
                isCustomerLists: false,
                isAddProductLists: true,
                isProductUpdate: false,
            };
        case SidebarActionTypes.SWITCH_TO_UPDATE_PRODUCTS:
            return {
                isOverView: false,
                isProductLists: false,
                isCustomerLists: false,
                isAddProductLists: false,
                isProductUpdate: true,
            };

        default:
            return state;
    }
};
