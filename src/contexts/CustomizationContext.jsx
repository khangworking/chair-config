import React, { createContext, useState, useContext } from "react";

export const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

export const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

// Create the context
const CustomizationContext = createContext();

// Create a provider component
export const CustomizationProvider = ({ children }) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState("Leg1");
  const [chairColor, setChairColor] = useState(chairColors[0].color);
  const [cushionColor, setCushionColor] = useState(cushionColors[0].color);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

// Create a custom hook to use the CustomizationContext
export const useCustomization = () => {
  return useContext(CustomizationContext);
};
