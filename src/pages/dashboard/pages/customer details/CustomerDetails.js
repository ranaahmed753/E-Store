import React, { useEffect } from "react";
import "./CustomerDetails.css";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../../../../redux/admin/actions/customer actions/CustomersActions";
import { useDispatch, useSelector } from "react-redux";

function CustomerDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { customersReducer } = useSelector((state) => state);
    const { loading, customer, error } = customersReducer;
    useEffect(() => {
        dispatch(getCustomerById(id));
    }, [dispatch, id]);

    return !loading ? (
        <div className="customer__details">
            <div className="customerDetails__header">
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 16,
                    }}
                >
                    Customer Details
                </h3>
            </div>
            <div className="customerDetails__body">
                <img
                    src={customer !== undefined && customer.avatar}
                    style={{
                        height: 400,
                        width: 350,
                        flex: 0.3,
                        borderRight: "1px solid lightgray",
                        position: "relative",
                    }}
                />

                <div className="customerDetailsBody__right">
                    <h3
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 20,
                            margin: 0,
                            padding: 0,
                            fontWeight: 400,
                        }}
                    >
                        Name:
                        {customer !== undefined &&
                            customer.first_name + " " + customer.last_name}
                    </h3>
                    <h3
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 15,
                            textAlign: "start",
                            fontWeight: 300,
                        }}
                    >
                        Email: {customer !== undefined && customer.email}
                    </h3>
                    <h3
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 15,
                            marginTop: -5,
                            textAlign: "start",
                            fontWeight: 300,
                        }}
                    >
                        Phone:01536444259
                    </h3>
                    <h3
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 15,
                            marginTop: -5,
                            textAlign: "start",
                            fontWeight: 300,
                        }}
                    >
                        Location: Dhaka
                    </h3>
                    <p
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 15,
                            marginTop: -10,
                            textAlign: "start",
                        }}
                    >
                        About: In publishing and graphic design, Lorem ipsum is
                        a placeholder text commonly used to demonstrate the
                        visual form of a document or a typeface without relying
                        on meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available.
                    </p>
                </div>

                {error && (
                    <div
                        style={{
                            maxHeight: "100%",
                            minHeight: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "Poppins",
                                fontSize: 20,
                                textAlign: "center",
                            }}
                        >
                            {error}
                        </h3>
                    </div>
                )}
            </div>
        </div>
    ) : (
        <div
            style={{
                maxHeight: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: 20,
                    textAlign: "center",
                }}
            >
                Loading.....
            </h3>
        </div>
    );
}

export default CustomerDetails;
