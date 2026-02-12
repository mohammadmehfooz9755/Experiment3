import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import About from "./pages/About";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="app-wrapper">
      <AppNavbar cartCount={cartCount} />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products setCartCount={setCartCount} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cartCount={cartCount} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <AppFooter />
    </div>
  );
}

export default App;