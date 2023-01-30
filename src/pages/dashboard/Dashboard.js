import React from "react";
import "./Dashboard.css";
import Avatar from "@mui/material/Avatar";
import SidebarItem from "./components/sidebar items/SidebarItem";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    switchToOverview,
    switchToProductsLists,
    switchToCustomerLists,
    switchToAddProducts,
    switchToUpdateProducts,
} from "../../redux/admin/actions/sidebar actions/SidebarActions";

function Dashboard() {
    const dispatch = useDispatch();
    const { sidebar } = useSelector((state) => state);
    const {
        isOverView,
        isProductLists,
        isCustomerLists,
        isAddProductLists,
        isProductUpdate,
    } = sidebar;
    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        style={{
                            cursor: "pointer",
                        }}
                    />
                    <h3
                        style={{
                            fontSize: 15,
                            fontFamily: "Poppins",
                            marginLeft: 10,
                        }}
                    >
                        Ashley Zamberg
                    </h3>
                </div>
                <SidebarItem
                    text="Overview"
                    link="overview"
                    onPress={() => dispatch(switchToOverview())}
                    isCollapsed={isOverView}
                />
                <SidebarItem
                    text="Products"
                    link="productlists"
                    onPress={() => dispatch(switchToProductsLists())}
                    isCollapsed={isProductLists}
                />
                <SidebarItem
                    text="Customers"
                    link="customerlists"
                    onPress={() => dispatch(switchToCustomerLists())}
                    isCollapsed={isCustomerLists}
                />
                <SidebarItem
                    text="Add Products"
                    link="add_products"
                    onPress={() => dispatch(switchToAddProducts())}
                    isCollapsed={isAddProductLists}
                />
                <SidebarItem
                    text="Update Products"
                    link="update_products"
                    onPress={() => dispatch(switchToUpdateProducts())}
                    isCollapsed={isProductUpdate}
                />
            </div>
            <div className="dashboard__right">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
