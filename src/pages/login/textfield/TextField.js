import React from "react";
import "./TextField.css";

function TextField({ name, placeholder }) {
    return (
        <div
            style={{
                margin: 10,
                width: "80%",
            }}
        >
            <input
                placeholder={placeholder}
                style={{
                    border: 0,
                    outline: 0,
                    padding: 15,
                    borderRadius: 10,
                    backgroundColor: "#f1f3f4",
                    flex: 1,
                    width: "80%",
                }}
            />
        </div>
    );
}

export default TextField;
