import theme from "../../src/theme";
import Hero from "../Hero";

const Communication = () => {
  return (
    <Hero
      renderTitle={() => {
        return <img src="assets/img/Communication.png" width="60%" />;
      }}
      bg="img/communication/4.jpg"
    />
  );
};

export default Communication;
