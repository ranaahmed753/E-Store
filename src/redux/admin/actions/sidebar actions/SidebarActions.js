import { SidebarActionTypes } from "../../actions/sidebar actions/constants";
export const switchToOverview = () => {
    return {
        type: SidebarActionTypes.SWITCH_TO_OVERVIEW,
    };
};

export const switchToProductsLists = () => {
    return {
        type: SidebarActionTypes.SWITCH_TO_PRODUCTS_LISTS,
    };
};

export const switchToCustomerLists = () => {
    return {
        type: SidebarActionTypes.SWITCH_TO_CUSTOMERS_LISTS,
    };
};

export const switchToAddProducts = () => {
    return {
        type: SidebarActionTypes.SWITCH_TO_ADD_PRODUCTS,
    };
};

export const switchToUpdateProducts = () => {
    return {
        type: SidebarActionTypes.SWITCH_TO_UPDATE_PRODUCTS,
    };
};
