import "./InfoPageComponent.css";
import sliderImg1 from "../../assets/slider-images/main_page_slider_screen-01.jpg";
import sliderImg2 from "../../assets/slider-images/main_page_slider_screen-05.jpg";
import sliderImg3 from "../../assets/slider-images/main_page_slider_screen-06.jpg";
import sliderImg4 from "../../assets/slider-images/main_page_slider_screen-07.jpg";
import SliderComponent from "../SliderComponent/SliderComponent";
// import { useState } from "react";
// import { useEffect } from "react";

const imgContainer = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

function InfoPageComponent() {
  // const [imgContainer, setImgContainer] = useState([]);

  // const imgContainer = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

  return (
    <div className="infoPage__container">
      {/* <div className="slider__container"> */}
      {/* {imgContainer.map((image, index) => {
          return (
            <img
              src={image}
              alt="slider-img"
              key={index}
              className="slider-img"
            />
          );
        })} */}
      <div className="slider__container">
        <SliderComponent imgArray={imgContainer} />
      </div>
      <hr />
      {/* </div> */}
      <div className="bloks green">InfoBlock</div>
      <hr />
      <div className="bloks yellow">InfoBlock</div>
    </div>
  );
}

export default InfoPageComponent;
