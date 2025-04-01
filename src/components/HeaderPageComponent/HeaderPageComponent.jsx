import "./HeaderPageComponent.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import logo from "../../assets/logo.svg";
import viber from "../../assets/viber.svg";
import telephone from "../../assets/telephone.svg";
import mail from "../../assets/mail.svg";
import useResize from "../hooks/useResize";

function HeaderPageComponent({
  setNavBackgroundVisibility,
  navBackgroundVisibility,
  navBarVisibility,
  setNavBarVisibility,
}) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  // const [navBarVisibility, setNavBarVisibility] = useState(false);

  const size = useResize();

  const headerDropdownRef = useRef();
  const dropdownContentRef = useRef();
  const navigationBarMobileRef = useRef();

  useEffect(() => {
    if (size[0] >= 800 && navBarVisibility) {
      setNavBarVisibility(false);
      setNavBackgroundVisibility(false);
    }

    if (!navBarVisibility && size[0] < 800) {
      console.log(navBarVisibility + "  handleMouseOnClickNavBarButton");
      navigationBarMobileRef.current.style.display = "none";
    }
  }, [size[0], navBarVisibility]);

  // useEffect(() => {}), [navBarVisibility];

  const handleMouseEnter = () => {
    headerDropdownRef.current.style.overflow = "visible";
  };

  const handleMouseLeave = () => {
    headerDropdownRef.current.style.overflow = "hidden";
  };

  const handleMouseOnClickNavBarButton = () => {
    setNavBarVisibility(() => !navBarVisibility);
    setNavBackgroundVisibility(!navBackgroundVisibility);

    if (navBarVisibility) {
      console.log(navBarVisibility + "  handleMouseOnClickNavBarButton");
      navigationBarMobileRef.current.style.display = "none";
    } else {
      console.log(navBarVisibility + " handleMouseOnClickNavBarButton");
      navigationBarMobileRef.current.style.display = "flex";
    }
  };

  const handleMouseOnClickNavBar = () => {
    setDropdownVisibility(() => !dropdownVisibility);

    if (dropdownVisibility) {
      console.log(dropdownVisibility);
      dropdownContentRef.current.style.display = "none";
    } else {
      console.log(dropdownVisibility);
      dropdownContentRef.current.style.display = "flex";
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        {size[0] < "800" && (
          <>
            <button
              className="header__panel__nav__button"
              onClick={handleMouseOnClickNavBarButton}
            >
              <hr />
              <hr />
              <hr />
            </button>
            <div className="navigation__container" ref={navigationBarMobileRef}>
              <nav className="header__panel__nav">
                <button className="header__button">
                  <p>Головна</p>
                </button>
                <button className="header__button">
                  <p>Продаж техніки</p>
                </button>
                <button
                  // className="header__button dropdown__button"
                  className={
                    dropdownVisibility
                      ? "header__button dropdown__button dropdown__button-active"
                      : "header__button dropdown__button"
                  }
                  onClick={handleMouseOnClickNavBar}
                >
                  <div>
                    Послуги
                    <i className="arrow down"></i>
                  </div>
                </button>

                <div className="dropdown__content" ref={dropdownContentRef}>
                  <a href="#" className="dropdown__link">
                    <p>Довідка рахунок</p>
                  </a>
                  <a href="#" className="dropdown__link">
                    <p>Продаж Т/П</p>
                  </a>
                </div>

                <button className="header__button">
                  <p>Контакти</p>
                </button>
              </nav>
            </div>
            {/* <div className="navigation__background"></div> */}
          </>
        )}
        <div className="left-side__container">
          <div className="logo__container">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="right-side__container">
          {size[0] < "800" ? (
            <>
              {/* <div className="header__panel__nav__button">
              <br />
              <br />
              <br />
            </div> */}
              {/* <div className="navigation__container" ref={navigationBarMobileRef}>
              <nav className="header__panel__nav">
                <button className="header__button">
                  <p>Головна</p>
                </button>
                <button className="header__button">
                  <p>Продаж техніки</p>
                </button>
                <button
                  className="header__button dropdown__button"
                  onClick={handleMouseOnClickNavBar}
                >
                  <div>
                    Послуги
                    <i className="arrow down"></i>
                  </div>
                </button>

                <div className="dropdown__content" ref={dropdownContentRef}>
                  <a href="#" className="dropdown__link">
                    <p>Довідка рахунок</p>
                  </a>
                  <a href="#" className="dropdown__link">
                    <p>Продаж Т/П</p>
                  </a>
                </div>

                <button className="header__button">
                  <p>Контакти</p>
                </button>
              </nav>
            </div> */}
            </>
          ) : (
            <>
              <div className="contacts__container">
                <div className="contacts__item__container">
                  <a href="mailto:mail.example.com" className="contacts__item">
                    {/* <i className="fa-solid fa-envelope-open-text"></i> */}
                    <img src={mail} alt="mail_logo" className="contacts_icon" />
                    <p>mail.example.com</p>
                  </a>
                </div>
                <div className="contacts__item__container">
                  <a href="viber://chat?number=%2B4" className="contacts__item">
                    {/* <i className=""></i> */}
                    <img
                      src={viber}
                      alt="viber_logo"
                      className="contacts_icon"
                    />
                    <p>Viber</p>
                  </a>
                </div>
                <div className="contacts__item__container">
                  <a href="tel:+380503333333" className="contacts__item">
                    {/* <i className=""></i> */}
                    <img src={telephone} alt="telephone_logo" />
                    <p>+38(050) 333 33 33</p>
                  </a>
                </div>
              </div>
              <div className="adress__container">
                <p>
                  Наша адреса: Село Гавронщина, Київська область <br />
                  вулиця Шевченка 18 {size[0]} {size[1]}
                </p>
              </div>
              <div className="navigation__container">
                <nav className="header__panel__nav">
                  <button className="header__button header__button-first">
                    <p>Головна</p>
                  </button>
                  <button className="header__button">
                    <p>Продаж техніки</p>
                  </button>
                  <div
                    className="header__dropdown"
                    ref={headerDropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="header__button dropdown__button">
                      <div>
                        Послуги<i className="arrow down"></i>
                      </div>
                    </button>
                    <div className="dropdown__content">
                      <a href="#" className="dropdown__link">
                        <p>Довідка рахунок</p>
                      </a>
                      <a href="#" className="dropdown__link">
                        <p>Продаж Т/П</p>
                      </a>
                    </div>
                  </div>
                  <button className="header__button header__button-last">
                    <p>Контакти</p>
                  </button>
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderPageComponent;
