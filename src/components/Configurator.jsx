import React from "react";
import {
  chairColors,
  cushionColors,
  useCustomization,
} from "../contexts/CustomizationContext";

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor,
  } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair Material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item__label">Fabric</div>
          </div>
        </div>
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title">Chair Legs</div>
        <div className="configurator__section__values">
          <div
            className={`item ${legs === "Leg1" ? "item--active" : ""}`}
            onClick={() => setLegs("Leg1")}
          >
            <div className="item__label">Modern</div>
          </div>
          <div
            className={`item ${legs === "Leg2" ? "item--active" : ""}`}
            onClick={() => setLegs("Leg2")}
          >
            <div className="item__label">Classic</div>
          </div>
        </div>
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title">Chair Colour</div>
        <div className="configurator__section__values">
          {chairColors.map(({ color, name }) => (
            <div
              key={color}
              className={`item ${chairColor === color ? "item--active" : ""}`}
              onClick={() => setChairColor(color)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: color }}
              ></div>
              <div className="item__label">{name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title">Cushion Colour</div>
        <div className="configurator__section__values">
          {cushionColors.map(({ color, name }) => (
            <div
              key={color}
              className={`item ${cushionColor === color ? "item--active" : ""}`}
              onClick={() => setCushionColor(color)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: color }}
              ></div>
              <div className="item__label">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
