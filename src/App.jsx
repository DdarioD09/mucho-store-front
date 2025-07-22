import { useState } from "react";
import { Home } from "./pages/home/Home";
import { Navbar } from "./shared/Navbar";
import { LoginModal } from "./components/LoginModal/LoginModal";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  function openLoginModal() {
    setShowLogin(true);
  }

  function closeLoginModal() {
    setShowLogin(false);
  }

  return (
    <>
      {showLogin && <LoginModal onCloseModal={closeLoginModal} />}
      <Navbar onClickLogin={openLoginModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App
