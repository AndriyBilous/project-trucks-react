import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css";

function SliderComponent({ imgArray }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {imgArray.map((image, index) => {
        return (
          <div key={index}>
            <div className="slider-img__container">
              <img src={image} alt={"slide-" + index} className="slider-img" />
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default SliderComponent;
