import React, { useState } from "react";
import "./Register.css";
import { toast } from "react-toastify";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [type, setType] = useState("");
    const createUser = () => {
        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === "" ||
            type === ""
        ) {
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
        <div className="register">
            <div className="register__card">
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
                        Admin/User??
                    </h3>
                    <select
                        style={{
                            outline: 0,
                            border: 0,
                            marginLeft: 10,
                            fontFamily: "Poppins",
                            fontSize: 15,
                        }}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                </div>

                <input
                    placeholder="name"
                    style={{
                        border: 0,
                        outline: 0,
                        padding: 15,
                        borderRadius: 10,
                        backgroundColor: "#f1f3f4",
                        flex: 1,
                        width: "80%",
                        marginTop: 10,
                        fontFamily: "Poppins",
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                        marginTop: 10,
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
                        marginTop: 10,
                        fontFamily: "Poppins",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    placeholder="confirm password"
                    type="password"
                    style={{
                        border: 0,
                        outline: 0,
                        padding: 15,
                        borderRadius: 10,
                        backgroundColor: "#f1f3f4",
                        flex: 1,
                        width: "80%",
                        marginTop: 10,
                        fontFamily: "Poppins",
                    }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                        margin: 10,
                    }}
                    onClick={() => createUser()}
                >
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register;
