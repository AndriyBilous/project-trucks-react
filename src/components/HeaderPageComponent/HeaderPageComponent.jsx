import "./HeaderPageComponent.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import logo from "../../assets/logo.svg";
import viber from "../../assets/viber.svg";
import telephone from "../../assets/telephone.svg";
import mail from "../../assets/mail.svg";

function HeaderPageComponent() {
  const [navigationHover, setNavigationHover] = useState("");
  const boxRef = useRef();

  useEffect(() => {}, [navigationHover, setNavigationHover]);

  const handleMouseEnter = () => {
    boxRef.current.style.overflow = "visible";
  };

  const handleMouseLeave = () => {
    boxRef.current.style.overflow = "hidden";
  };

  return (
    <div className="header__container">
      <div className="left-side__container">
        <div className="logo__container">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="right-side__container">
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
              <img src={viber} alt="viber_logo" className="contacts_icon" />
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
            вулиця Шевченка 18
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
              ref={boxRef}
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
      </div>
    </div>
  );
}

export default HeaderPageComponent;
