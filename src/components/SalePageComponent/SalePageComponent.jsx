import "./SalePageComponent.css";
import trackImg from "../../assets/Daf-truck.png";
import { useState } from "react";

const data = [
  {
    name: "track_1",
    model: "DAF",
    mileage: "150000",
  },
  {
    name: "track_2",
    model: "DAF",
    mileage: "250000",
  },
  {
    name: "track_3",
    model: "DAF",
    mileage: "230000",
  },
  {
    name: "track_4",
    model: "VOLVO",
    mileage: "300000",
  },
  {
    name: "track_5",
    model: "VOLVO",
    mileage: "235000",
  },
  {
    name: "track_6",
    model: "MERSEDES",
    mileage: "227000",
  },
  {
    name: "track_7",
    model: "DAF",
    mileage: "280000",
  },
  {
    name: "track_8",
    model: "DAF",
    mileage: "187000",
  },
  {
    name: "track_9",
    model: "DAF",
    mileage: "210000",
  },
];

function SalePageComponent() {
  const [filterAppearance, setFilterAppearance] = useState(false);
  console.log(filterAppearance);
  const handleOnClickFIlterAppearanceButton = () => {
    setFilterAppearance(() => !filterAppearance);
    console.log(filterAppearance);
  };

  return (
    <div className="salesPage__container">
      {!filterAppearance && (
        <button
          onClick={handleOnClickFIlterAppearanceButton}
          className="filter-button"
        >
          Фільтр
        </button>
      )}
      {filterAppearance && (
        <div className="filter__container">
          <div className="filter-categories__container">
            <ul>
              <li>фильтр 1</li>
              <li>фильтр 2</li>
              <li>фильтр 3</li>
              <li>фильтр 4</li>
              <li>фильтр 5</li>
              <li>фильтр 6</li>
              <li>фильтр 7</li>
              <li>фильтр 8</li>
            </ul>
          </div>
          <button
            onClick={handleOnClickFIlterAppearanceButton}
            className="filter-button__inner"
          >
            Згорнути
          </button>
        </div>
      )}
      {data.map((el, i) => {
        return (
          <div className="product__container" key={i}>
            <img src={trackImg} alt="product-img" className="product-img" />
            <div className="product-name">{el.name}</div>
            <div className="product-model">{el.model}</div>
            <div className="product-mileage">{el.mileage}</div>
          </div>
        );
      })}
    </div>
  );
}

export default SalePageComponent;
