import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/auth";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />;
          <Route exact path="/marketplace" element={<Marketplace />} />;
          <Route exact path="/product/:prodId" element={<Product />} />;
          <Route exact path="/cart" element={<Cart />} />;
          <Route exact path="/order" element={<Order />} />;
          <Route exact path="/login" element={<Login />} />;
          <Route exact path="/register" element={<Register />} />;
          <Route exact path="/profile" element={<Profile />} />;
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
