import "./HeaderPageComponent.css";
import logo from "../../assets/logo.svg";

function HeaderPageComponent() {
  return (
    <div className="header__container">
      <div className="left-side__container">
        <div className="logo__container">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="right-side__container">
        <div className="contacts__container">
          <div className="contacts__item">
            <a href="mailto:mail.example.com">
              <i className="fa-solid fa-envelope-open-text"></i>mail.example.com
            </a>
          </div>
          <div className="contacts__item">
            <a href="viber://chat?number=%2B4">
              <i className=""></i>Viber
            </a>
          </div>
          <div className="contacts__item">
            <a href="tel:+380503333333">
              <i className=""></i>+38(050) 333 33 33
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
            <button className="header__button button">
              <p>Головна</p>
            </button>
            <button className="header__button button">
              <p>Продаж техніки</p>
            </button>
            <div className="header__dropdown">
              <button className="header__button dropdown__button button button__menu">
                <p>
                  Послуги<i className="arrow down"></i>
                </p>
              </button>
              {/* <div className="dropdown__content">
                <a href="#">
                  <p>Довідка рахунок</p>
                </a>
                <a href="#">
                  <p>Продаж Т/П</p>
                </a>
              </div> */}
            </div>
            <button className="header__button header__button-last button">
              <p>Контакти</p>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderPageComponent;
