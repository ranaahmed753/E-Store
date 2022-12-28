import React from "react";
import "./TextField.css";
import { useQuery } from "../../custom hooks/useQuery/useQuery";

function TextField() {
    const { query, setQuery } = useQuery();
    return (
        <div className="textField">
            <input
                placeholder="Search"
                style={{
                    backgroundColor: "transparent",
                    fontFamily: "Poppins",
                    outline: 0,
                    border: 0,
                }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}

export default TextField;
