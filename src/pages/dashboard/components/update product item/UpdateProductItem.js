import React from "react";
import "./UpdateProductItem.css";

function UpdateProductItem({ name, type, placeholder, setSomething }) {
    return (
        <div className="updateProduct__item">
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 13,
                    textAlign: "start",
                    flex: 0.2,
                    alignItems: "center",
                }}
            >
                {name}
            </h3>
            {type === "description" ? (
                <textarea
                    placeholder={placeholder}
                    style={{
                        outline: 0,
                        border: "1px solid lightgray",
                        padding: 8,
                        fontFamily: "Poppins",
                        fontSize: 13,
                        flex: 0.8,
                        marginRight: 20,
                        height: 120,
                        marginBottom: 15,
                        backgroundColor: "transparent",
                    }}
                    onChange={(e) => setSomething(e.target.value)}
                />
            ) : (
                <input
                    style={{
                        outline: 0,
                        border: "1px solid lightgray",
                        padding: 8,
                        fontFamily: "Poppins",
                        fontSize: 13,
                        marginRight: 20,
                        flex: 0.8,
                        backgroundColor: "transparent",
                    }}
                    placeholder={
                        name === "Product Price"
                            ? "$" + placeholder
                            : placeholder
                    }
                    onChange={(e) => setSomething(e.target.value)}
                />
            )}
        </div>
    );
}

export default UpdateProductItem;
