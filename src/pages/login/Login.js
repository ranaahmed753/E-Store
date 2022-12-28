import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        if (email === "" || password === "") {
            toast.warn("some fields are empty!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 1000,
            });
        } else {
            toast.success("api calling here", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 1000,
            });
        }
    };
    return (
        <div className="login">
            <div className="login__card">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <h3
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 15,
                        }}
                    >
                        Please fill the form and continiue to login
                    </h3>
                </div>

                <input
                    placeholder="email"
                    style={{
                        border: 0,
                        outline: 0,
                        padding: 15,
                        borderRadius: 10,
                        backgroundColor: "#f1f3f4",
                        flex: 1,
                        width: "80%",
                        marginTop: 20,
                        fontFamily: "Poppins",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    style={{
                        border: 0,
                        outline: 0,
                        padding: 15,
                        borderRadius: 10,
                        backgroundColor: "#f1f3f4",
                        flex: 1,
                        width: "80%",
                        marginTop: 20,
                        fontFamily: "Poppins",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    style={{
                        width: "80%",
                        outline: 0,
                        border: 0,
                        cursor: "pointer",
                        padding: 10,
                        borderRadius: 10,
                        backgroundColor: "black",
                        fontFamily: "Poppins",
                        color: "white",
                        fontSize: 15,
                        marginTop: 20,
                        flex: 1,
                    }}
                    onClick={() => login()}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
