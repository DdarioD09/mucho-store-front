import { useState } from "react";
import { Home } from "./pages/home/Home";
import { Navbar } from "./shared/Navbar";
import { LoginModal } from "./components/LoginModal/LoginModal";

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
      <Home />
    </>
  );
}

export default App
