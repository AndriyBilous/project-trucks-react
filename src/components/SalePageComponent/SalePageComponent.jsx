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
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [minYear, setMinYear] = useState(1990);
  const [maxYear, setMaxYear] = useState(2025);

  const handleOnClickFIlterAppearanceButton = () => {
    setFilterAppearance(() => !filterAppearance);
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
            <div className="truck-model__container">
              <p>Категорія</p>

              <label htmlFor="tractor_type">
                <input type="checkbox" id="tractor_type" />
                Тягач
              </label>

              <label htmlFor="semi-trailer_type">
                <input type="checkbox" id="semi-trailer_type" />
                Напівпричіп
              </label>

              <label htmlFor="trailer_type">
                <input type="checkbox" id="trailer_type" />
                Причіп
              </label>

              <label htmlFor="truck_type">
                <input type="checkbox" id="truck_type" />
                Вантажівка
              </label>

              <label htmlFor="special-machinery_type">
                <input type="checkbox" id="special-machinery_type" />
                Спецтехніка
              </label>

              <label htmlFor="spare-parts_type">
                <input type="checkbox" id="spare-parts_type" />
                Запчастини
              </label>
            </div>
            <div className="truck-model__container">
              <p>Модель</p>

              <label htmlFor="daf_model">
                <input type="checkbox" id="daf_model" />
                DAF
              </label>

              <label htmlFor="man_model">
                <input type="checkbox" id="man_model" />
                MAN
              </label>

              <label htmlFor="skania_model">
                <input type="checkbox" id="skania_model" />
                SKANIA
              </label>

              <label htmlFor="volvo_model">
                <input type="checkbox" id="volvo_model" />
                VOLVO
              </label>

              <label htmlFor="shmits_model">
                <input type="checkbox" id="shmits_model" />
                SHMITS
              </label>

              <label htmlFor="mb_model">
                <input type="checkbox" id="mb_model" />
                MB
              </label>
            </div>
            <div className="year__container">
              <p className="year-text">Ціна:</p>
              <input
                type="number"
                value={minYear}
                onChange={(e) => {
                  setMinYear(e.target.value);
                }}
                className="minYear"
              />
              <input
                type="number"
                value={maxYear}
                onChange={(e) => {
                  setMaxYear(e.target.value);
                }}
                className="maxYear"
              />
            </div>
            <div className="price__container">
              <p className="price-text">Ціна:</p>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                }}
                className="minPrice"
              />
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
                className="maxPrice"
              />
            </div>
            <div className="truck-model__container">
              <p>Осі</p>

              <label htmlFor="one_axle">
                <input type="checkbox" id="one_axle" />1
              </label>

              <label htmlFor="two_axle">
                <input type="checkbox" id="two_axle" />2
              </label>

              <label htmlFor="three_axle">
                <input type="checkbox" id="three_axle" />3
              </label>

              <label htmlFor="four_axle">
                <input type="checkbox" id="four_axle" />4
              </label>

              <label htmlFor="five_axle">
                <input type="checkbox" id="five_axle" />5
              </label>
            </div>
          </div>
          <div className="filter-button__container">
            <button
              onClick={handleOnClickFIlterAppearanceButton}
              className="filter-inner__button"
            >
              Згорнути
            </button>
          </div>
          <button className="filter-search__button">Пошук</button>
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
      <button className="more-positions__button">Більше позицій</button>
    </div>
  );
}

export default SalePageComponent;
