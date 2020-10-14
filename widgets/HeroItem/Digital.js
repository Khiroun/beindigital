import Hero from "../Hero";

const Digital = () => {
  return (
    <Hero
      renderTitle={() => {
        return <img src="assets/img/Digital.png" width="60%" />;
      }}
      bg="img/digital/1.jpg"
    />
  );
};

export default Digital;
