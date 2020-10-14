import Hero from "../Hero";

const Main = () => {
  return (
    <Hero
      renderTitle={() => {
        return (
          <h1
            style={{
              //color: "#fff",
              fontFamily: "Nunito",
              fontSize: "4.5rem",
            }}
          >
            Solutions de communication digitales
          </h1>
        );
      }}
      bg="s2.jpg"
    />
  );
};

export default Main;
