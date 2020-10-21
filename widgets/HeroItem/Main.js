import { makeStyles } from "@material-ui/core";
import Hero from "../Hero";

const useStyles = makeStyles(theme=>({
  title:{
    fontFamily: "Nunito",
    fontSize: "4.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: '2rem'
    },
  }
}))

const Main = () => {
  const styles = useStyles()
  return (
    <Hero
      renderTitle={() => {
        return (
          <h1 className={styles.title}>
            Solutions de communication digitales
          </h1>
        );
      }}
      bg="s2.jpg"
    />
  );
};

export default Main;
