import React from "react";
import "./Loading.css";

function Loading() {
    return (
        <div className="loading">
            <h1
                style={{
                    fontSize: 20,
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Poppins",
                    alignSelf: "auto",
                }}
            >
                Loading......
            </h1>
        </div>
    );
}

export default Loading;
