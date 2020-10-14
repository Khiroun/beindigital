import React from "react";
import Hero from "../Hero";

const Formation = () => {
  return (
    <Hero
      renderTitle={() => {
        return <img src="assets/img/Formation.png" width="60%" />;
      }}
      bg="img/formation/4.jpg"
    />
  );
};

export default Formation;
