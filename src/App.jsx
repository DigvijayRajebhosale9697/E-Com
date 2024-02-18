import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Product_Details from "./Components/Product_Details";
// import Search_Items from "./Components/Search_Items";
import Cart from "./Components/Cart";
import { items } from "./Components/Data";
import { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";

import Contact from './Components/Contact'


const App = () => {
  const [data, setdata] = useState([...items]);
  const [cart, setcart] = useState([])
  return (
    <>
      <Router>
        <Navbar setdata={setdata} cart={cart} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product cart={cart} setcart={setcart} items={data} setdata={setdata} />}></Route>
          <Route path="/product/:id" element={<Product_Details cart={cart} setcart={setcart} />}></Route>
          {/* <Route path="Cart" element={<Search_Items />}></Route> */}
          <Route path="cart" element={<Cart cart={cart} setcart={setcart} />}></Route>
        </Routes>

      </Router>
    </>
  );
};

export default App;
