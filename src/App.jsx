import "./App.css";

import HeaderPageComponent from "./components/HeaderPageComponent/HeaderPageComponent";
import InfoPageComponent from "./components/InfoPageComponent/InfoPageComponent";
import FooterPageComponent from "./components/FooterPageComponent/FooterPageComponent";
import { useEffect, useRef, useState } from "react";

function App() {
  const [navBackgroundVisibility, setNavBackgroundVisibility] = useState(false);
  const [navBarVisibility, setNavBarVisibility] = useState(false);

  const navBackgroundRef = useRef();

  useEffect(() => {
    if (!navBackgroundVisibility) {
      navBackgroundRef.current.style.display = "none";
      // setNavBarVisibility(false);
      console.log("background1: " + navBackgroundVisibility);
      console.log("navBarVisibility: " + navBarVisibility);
    } else {
      navBackgroundRef.current.style.display = "flex";
      console.log("background2: " + navBackgroundVisibility);
    }
  }, [navBackgroundVisibility]);

  const handleMouseOnClickNavBarBackground = () => {
    setNavBackgroundVisibility(() => !navBackgroundVisibility);

    if (navBackgroundVisibility === true) {
      setNavBarVisibility(false);
      console.log("click on background: " + navBarVisibility);
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
      <InfoPageComponent />
      <FooterPageComponent />
    </div>
  );
}

export default App;
