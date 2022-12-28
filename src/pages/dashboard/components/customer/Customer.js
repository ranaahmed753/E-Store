import React from "react";
import "./Customer.css";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

function Customer({ id, name, image, email }) {
    return (
        <NavLink className="customer" to={`/dashboard/customer_details/${id}`}>
            <Avatar src={image} />
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 11,
                    textAlign: "center",
                    color: "black",
                }}
            >
                {name}
            </h3>
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 10,
                    textAlign: "center",
                    color: "gray",
                    marginTop: -10,
                }}
            >
                {email}
            </h3>
        </NavLink>
    );
}

export default Customer;
