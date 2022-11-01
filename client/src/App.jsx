import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
};

export default App;
