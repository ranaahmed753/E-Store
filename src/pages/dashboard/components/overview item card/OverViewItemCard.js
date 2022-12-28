import React from "react";
import "./OverViewItemCard.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function OverViewItemCard({ title, count, dateTitle }) {
    return (
        <div className="overviewItemCard">
            <h1
                style={{
                    fontFamily: "Poppins",
                    fontSize: 13,
                    textAlign: "center",
                }}
            >
                {title}
            </h1>
            <h1
                style={{
                    fontFamily: "Poppins",
                    fontSize: 13,
                    textAlign: "center",
                    marginTop: -5,
                }}
            >
                {count}
            </h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: -10,
                }}
            >
                {dateTitle === "up from yesterday" ? (
                    <ArrowUpwardIcon
                        style={{
                            backgroundColor: "#9CDBCB",
                            color: "white",
                            borderRadius: 999,
                            padding: 1,
                        }}
                        fontSize="small"
                    />
                ) : (
                    <ArrowDownwardIcon
                        style={{
                            backgroundColor: "#D48A97",
                            color: "white",
                            borderRadius: 999,
                            padding: 1,
                        }}
                        fontSize="small"
                    />
                )}
                <h1
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 10,
                        marginLeft: 2,
                    }}
                >
                    {dateTitle}
                </h1>
            </div>
        </div>
    );
}

export default OverViewItemCard;
