import React from "react";
import "./SidebarItem.css";
import { NavLink, useNavigate } from "react-router-dom";
import ForwardIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SidebarItem({ text, link, isCollapsed, onPress }) {
    return (
        <NavLink
            to={link}
            style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                marginLeft: 10,
                marginRight: 10,
            }}
            onClick={() => onPress()}
        >
            <h3
                style={
                    isCollapsed
                        ? {
                              fontFamily: "Poppins",
                              fontSize: 15,
                              color: "black",
                          }
                        : {
                              fontFamily: "Poppins",
                              fontSize: 15,
                              color: "lightgray",
                          }
                }
            >
                {text}
            </h3>
            {isCollapsed ? (
                <ArrowDownIcon
                    fontSize="medium"
                    style={{
                        color: "black",
                    }}
                />
            ) : (
                <ForwardIcon
                    style={{
                        width: 15,
                        height: 15,
                        color: "lightgray",
                    }}
                />
            )}
        </NavLink>
    );
}

export default SidebarItem;
