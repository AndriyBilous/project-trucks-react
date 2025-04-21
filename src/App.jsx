import "./App.css";

import HeaderPageComponent from "./components/HeaderPageComponent/HeaderPageComponent";
import InfoPageComponent from "./components/InfoPageComponent/InfoPageComponent";
import FooterPageComponent from "./components/FooterPageComponent/FooterPageComponent";
import { useEffect, useRef, useState } from "react";
import ProductsPageComponent from "./components/ProductsPageComponent/ProductPageComponent";
import SalePageComponent from "./components/SalePageComponent/SalePageComponent";
import { Route, Routes } from "react-router";

function App() {
  const [navBackgroundVisibility, setNavBackgroundVisibility] = useState(false);
  const [navBarVisibility, setNavBarVisibility] = useState(false);

  const navBackgroundRef = useRef();

  useEffect(() => {
    if (!navBackgroundVisibility) {
      navBackgroundRef.current.style.display = "none";
    } else {
      navBackgroundRef.current.style.display = "flex";
    }
  }, [navBackgroundVisibility]);

  const handleMouseOnClickNavBarBackground = () => {
    setNavBackgroundVisibility(() => !navBackgroundVisibility);

    if (navBackgroundVisibility === true) {
      setNavBarVisibility(false);
    }
  };

  return (
    <div className="main__container">
      <div
        className="navigation__background"
        ref={navBackgroundRef}
        onClick={handleMouseOnClickNavBarBackground}
      ></div>
      <HeaderPageComponent
        setNavBackgroundVisibility={setNavBackgroundVisibility}
        navBackgroundVisibility={navBackgroundVisibility}
        navBarVisibility={navBarVisibility}
        setNavBarVisibility={setNavBarVisibility}
      />

      <Routes>
        <Route path="*" element={<InfoPageComponent />} />
        <Route path="/salePage" element={<SalePageComponent />} />
      </Routes>

      <FooterPageComponent />
    </div>
  );
}

export default App;
