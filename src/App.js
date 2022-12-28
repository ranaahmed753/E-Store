import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/product details/ProductDetails";
import Header from "./components/header/Header";
import ProductList from "./pages/products/product lists/ProductList";
import CartList from "./pages/cart/cart list/CartList";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import OverView from "./pages/dashboard/pages/OverView/OverView";
import ProductLists from "./pages/dashboard/pages/ProductLists/ProductLists";
import CustomerLists from "./pages/dashboard/pages/CustomerLists/CustomerLists";
import AddProducts from "./pages/dashboard/pages/add products/AddProducts";
import UpdateProducts from "./pages/dashboard/pages/update products/UpdateProducts";
import CustomerDetails from "./pages/dashboard/pages/customer details/CustomerDetails";
import Register from "./pages/register/Register";

function App() {
    return (
        <div className="App">
            <ToastContainer hideProgressBar closeButton={false} />
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route exact path="/" element={<ProductList />} />
                    <Route
                        exact
                        path="/product_details/:id"
                        element={<ProductDetails />}
                    />
                    <Route exact path="/cart" element={<CartList />} />

                    <Route exact path="/dashboard/*" element={<Dashboard />}>
                        <Route exact path="overview" element={<OverView />} />
                        <Route
                            exact
                            path="productlists"
                            element={<ProductLists />}
                        />
                        <Route
                            exact
                            path="customerlists"
                            element={<CustomerLists />}
                        />

                        <Route
                            exact
                            path="add_products"
                            element={<AddProducts />}
                        />
                        <Route
                            exact
                            path="update_products/:id"
                            element={<UpdateProducts />}
                        />
                        <Route
                            exact
                            path="customer_details/:id"
                            element={<CustomerDetails />}
                        />
                    </Route>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
