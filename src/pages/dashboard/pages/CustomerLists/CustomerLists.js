import React, { useEffect } from "react";
import Customer from "../../components/customer/Customer";
import "./CustomerLists.css";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../../redux/admin/actions/customer actions/CustomersActions";

function CustomerLists() {
    const dispatch = useDispatch();
    const { customersReducer } = useSelector((state) => state);
    const { customers, isLoading, error } = customersReducer;
    useEffect(() => {
        dispatch(getCustomers());
    }, [dispatch]);

    return !isLoading ? (
        <div className="customer__lists">
            <div className="customerList__header">
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 16,
                    }}
                >
                    Customer Lists
                </h3>
            </div>
            <div className="customerList__body">
                {customers !== undefined &&
                    customers.map((customer, index) => (
                        <Customer
                            key={index}
                            id={customer.id}
                            name={
                                customer.first_name + " " + customer.last_name
                            }
                            image={customer.avatar}
                            email={customer.email}
                        />
                    ))}
                {error !== "" && (
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
export default CustomerLists;
