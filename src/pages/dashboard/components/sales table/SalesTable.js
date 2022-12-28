import React from "react";
import "./SalesTable.css";

function SalesTable() {
    const recentSales = [
        {
            date: "02 jan 2021",
            customer: "Alex Doe",
            sales: "Delivered",
            total: "$204.96",
        },
        {
            date: "02 jan 2021",
            customer: "David Mart",
            sales: "Pending",
            total: "$24.55",
        },
        {
            date: "02 jan 2021",
            customer: "Roe Parter",
            sales: "Returned",
            total: "$25.86",
        },
        {
            date: "02 jan 2021",
            customer: "Diana Penty",
            sales: "Delivered",
            total: "$20.86",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
        {
            date: "02 jan 2021",
            customer: "Parter Harry",
            sales: "Pending",
            total: "$255.10",
        },
    ];
    return (
        <table width="100%" style={{ marginLeft: 15 }}>
            <tbody>
                <tr>
                    <td
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 13,
                        }}
                    >
                        Date
                    </td>
                    <td
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 13,
                        }}
                    >
                        Customer
                    </td>
                    <td
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 13,
                        }}
                    >
                        Sales
                    </td>
                    <td
                        style={{
                            fontFamily: "Poppins",
                            fontSize: 13,
                        }}
                    >
                        Total
                    </td>
                </tr>
                {recentSales.map((recentSale, index) => (
                    <tr key={index}>
                        <td
                            style={{
                                fontFamily: "Poppins",
                                fontSize: 13,
                            }}
                        >
                            {recentSale.date}
                        </td>
                        <td
                            style={{
                                fontFamily: "Poppins",
                                fontSize: 13,
                            }}
                        >
                            {recentSale.customer}
                        </td>
                        <td
                            style={{
                                fontFamily: "Poppins",
                                fontSize: 13,
                            }}
                        >
                            {recentSale.sales}
                        </td>
                        <td
                            style={{
                                fontFamily: "Poppins",
                                fontSize: 13,
                            }}
                        >
                            {recentSale.total}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SalesTable;
