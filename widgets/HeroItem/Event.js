import React from "react";
import Hero from "../Hero";

const Event = () => {
  return (
    <Hero
      renderTitle={() => {
        return <img src="assets/img/Events.png" width="60%" />;
      }}
      bg="img/events/3.jpg"
    />
  );
};

export default Event;
