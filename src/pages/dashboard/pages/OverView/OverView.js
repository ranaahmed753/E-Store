import React, { useState } from "react";
import OverViewItemCard from "../../components/overview item card/OverViewItemCard";
import SalesTable from "../../components/sales table/SalesTable";
import SellingProduct from "../../components/selling product/SellingProduct";
import "./OverView.css";

function OverView() {
    const [sellingProducts, setSellingProducts] = useState([
        {
            name: "Winter Clothing",
            image: "https://i.pinimg.com/474x/35/86/72/3586727cf4b120614210278808caeb0e.jpg",
            price: "$100",
        },
        {
            name: "Trendy Shoes",
            image: "https://static-01.daraz.com.bd/p/6bf05124c30f40b8b4a23694da2812a6.png",
            price: "$200",
        },
        {
            name: "Winter beanies",
            image: "https://ruperhat.com/wp-content/uploads/2020/12/Winter-Beanies-balaclava-Kn-1.jpg",
            price: "$100",
        },
        {
            name: "Winter Clothing",
            image: "https://i.pinimg.com/474x/35/86/72/3586727cf4b120614210278808caeb0e.jpg",
            price: "$100",
        },
        {
            name: "Mens Jacket",
            image: "https://static-01.daraz.com.bd/p/c83ef66a270d38f3a8a8f1ac867f9a7e.jpg",
            price: "$900",
        },
        {
            name: "Chair",
            image: "https://themify.me/demo/themes/ultra-ecommerce/files/2016/11/product-5.jpg",
            price: "$200",
        },
        {
            name: "Sunglass",
            image: "https://icche.cf/images/products/20201002193915468658148.jpg",
            price: "$30",
        },
        {
            name: "Head Phone",
            image: "https://i.postimg.cc/259swWhF/22723ede15755b068b7a355e0ad5d65e-headphone-clipart-beats-headphone-pencil-and-in-color-headphone-10.png",
            price: "$80",
        },
    ]);
    return (
        <div className="overview">
            <div className="overview__header">
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 16,
                    }}
                >
                    OverView
                </h3>
            </div>
            <div className="overview__body">
                <div className="overviewBody__Items">
                    <OverViewItemCard
                        title="Total Orders"
                        count="24362"
                        dateTitle="up from yesterday"
                    />
                    <OverViewItemCard
                        title="Total Sales"
                        count="82561"
                        dateTitle="up from yesterday"
                    />
                    <OverViewItemCard
                        title="Total Profit"
                        count="4908213"
                        dateTitle="up from yesterday"
                    />
                    <OverViewItemCard
                        title="Total Return"
                        count="620847"
                        dateTitle="down from yesterday"
                    />
                </div>
                <div className="overviewBody__feed">
                    <div className="overviewBodyFeed__left">
                        <h3
                            style={{
                                fontFamily: "Poppins",
                                fontSize: 13,
                                marginTop: 0,
                                marginLeft: 15,
                            }}
                        >
                            Recent Sales
                        </h3>
                        <SalesTable />
                    </div>
                    <div className="overviewBodyFeed__right">
                        <h3
                            style={{
                                fontFamily: "Poppins",
                                fontSize: 13,
                                marginLeft: 10,
                            }}
                        >
                            Top Selling Products
                        </h3>
                        {sellingProducts.map((sellingProduct, index) => (
                            <SellingProduct
                                key={index}
                                name={sellingProduct.name}
                                image={sellingProduct.image}
                                price={sellingProduct.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverView;
