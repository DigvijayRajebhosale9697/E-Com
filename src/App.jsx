import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Product_Details from "./Components/Product_Details";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import ProtectedRoute from "./Components/ProtrectedRoutes/ProtectedRoute";
import { fetchProductData } from "./services/productService";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const productData = await fetchProductData();
        setData(productData);
        setFilteredData(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    getData();
  }, []);

  console.log("Fetched Data:", data);

  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((product) => product.category === category);
      setFilteredData(filtered);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<Signup />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Navbar cart={cart} />
                <Home />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/About"
          element={
            <ProtectedRoute>
              <>
                <Navbar cart={cart} />
                <About />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Contact"
          element={
            <ProtectedRoute>
              <>
                <Navbar cart={cart} />
                <Contact />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <>
                <Navbar cart={cart} />
                <Product
                  cart={cart}
                  setCart={setCart}
                  items={filteredData}
                  filterByCategory={filterByCategory}
                />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <>
                <Navbar cart={cart} />
                <Product_Details
                  cart={cart}
                  setCart={setCart}
                  items={filteredData}
                />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <>
                <Navbar cart={cart} />
                <Cart cart={cart} setCart={setCart} />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
