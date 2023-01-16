import { combineReducers } from "redux";
import { productReducers } from "../reducers/product reducers/productReducers";
import { cartReducers } from "../reducers/cart reducers/CartReducers";
import { headerReducer } from "../reducers/header reducers/HeaderReducer";
import { sidebarReducers } from "../admin/reducesrs/sidebar reducers/SidebarReducers";
import { submitProductReducers } from "../admin/reducesrs/submit product reducers/SubmitProductReducers";
import { getProductsReducer } from "../admin/reducesrs/get products reducer/GetProductsReducer";
import { customersReducer } from "../admin/reducesrs/customers reducer/CustomersReducer";
import { authReducer } from "../reducers/auth reducer/AuthReducers";

export const reducers = combineReducers({
    allProducts: productReducers,
    allCarts: cartReducers,
    headerReducer: headerReducer,
    sidebar: sidebarReducers,
    submitProductsReducer: submitProductReducers,
    getProductsReducer: getProductsReducer,
    customersReducer: customersReducer,
    authReducer: authReducer,
});
