import React from "react";
import "./AddProductInput.css";

function AddProductInput({
    name,
    inputType,
    fileType,
    something,
    setSomething,
}) {
    return (
        <div
            style={{
                flex: 1,
                width: "70%",
                display: "flex",
                flexDirection: "column",
                margin: "auto",
            }}
        >
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 13,
                    textAlign: "start",
                    alignItems: "center",
                }}
            >
                {name}
            </h3>
            {fileType === "file" && inputType === "file" ? (
                <input
                    value={something}
                    type="file"
                    style={{
                        cursor: "pointer",
                        marginBottom: 10,
                    }}
                    onChange={(e) => setSomething(e.target.value)}
                />
            ) : inputType === "input" && fileType === "input" ? (
                <input
                    value={something}
                    style={{
                        border: "1px solid lightgray",
                        outline: 0,
                        padding: 8,
                        backgroundColor: "transparent",
                        marginTop: 5,
                        fontFamily: "Poppins",
                    }}
                    onChange={(e) => setSomething(e.target.value)}
                />
            ) : (
                <textarea
                    style={{
                        outline: 0,
                        border: "1px solid lightgray",
                        padding: 8,
                        fontFamily: "Poppins",
                        fontSize: 13,
                        height: 120,
                        marginBottom: 15,
                        backgroundColor: "transparent",
                    }}
                    value={something}
                    onChange={(e) => setSomething(e.target.value)}
                />
            )}
        </div>
    );
}

export default AddProductInput;
