import "./InfoPageComponent.css";
import sliderImg1 from "../../assets/slider-images/main_page_slider_screen-01.jpg";
import sliderImg2 from "../../assets/slider-images/main_page_slider_screen-05.jpg";
import sliderImg3 from "../../assets/slider-images/main_page_slider_screen-06.jpg";
import sliderImg4 from "../../assets/slider-images/main_page_slider_screen-07.jpg";
import aboutUsImg from "../../assets/about_us_01.jpg";
import serviseItemImg from "../../assets/1.png";
import SliderComponent from "../SliderComponent/SliderComponent";
// import { useState } from "react";
// import { useEffect } from "react";

const imgContainer = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

function InfoPageComponent() {
  // const [imgContainer, setImgContainer] = useState([]);

  // const imgContainer = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

  return (
    <div className="infoPage__container">
      <div className="slider__container green">
        <SliderComponent imgArray={imgContainer} />
      </div>
      <hr />
      <div className="aboutUs__container">
        <div className="aboutUs__leftSide__container">
          <h2 className="aboutUs__leftSide-title">Про нас</h2>
          <p className="aboutUs__leftSide-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            ipsa provident hic soluta adipisci, quasi laudantium corporis
            tempora sequi cumque, enim voluptatem autem natus dicta libero,
            culpa omnis est nulla.
          </p>
        </div>
        <div className="aboutUs__rightSide__container">
          <img src={aboutUsImg} alt="aboutUsImg" className="aboutUsImg" />
        </div>
      </div>
      <hr />
      <div className="servises__container yellow">
        <h2 className="servises-label">Сервіси</h2>
        <p className="servises-text">
          Наша компанія надає різноманітні сервіси пов'язані з покупкою або з
          обслуговуванням техніки
        </p>
        <div className="servises-list__container">
          {/* TODO
          Make servises-item__container component instead of div list
          */}
          <div className="servises-item__container">
            <img
              src={serviseItemImg}
              alt="itemImg"
              className="servises-item__img"
            />
            <div className="servises-item-text__container">
              <h3 className="servises-item-label">item label</h3>
              <div className="servises-item-text">item text</div>
            </div>
          </div>
          <div className="servises-item__container">
            <img
              src={serviseItemImg}
              alt="itemImg"
              className="servises-item__img"
            />
            <div className="servises-item-text__container">
              <h3 className="servises-item-label">item label</h3>
              <div className="servises-item-text">item text</div>
            </div>
          </div>
          <div className="servises-item__container">
            <img
              src={serviseItemImg}
              alt="itemImg"
              className="servises-item__img"
            />
            <div className="servises-item-text__container">
              <h3 className="servises-item-label">item label</h3>
              <div className="servises-item-text">item text</div>
            </div>
          </div>
          <div className="servises-item__container">
            <img
              src={serviseItemImg}
              alt="itemImg"
              className="servises-item__img"
            />
            <div className="servises-item-text__container">
              <h3 className="servises-item-label">item label</h3>
              <div className="servises-item-text">item text</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPageComponent;
