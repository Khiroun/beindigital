import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  firstText: {
    color: theme.palette.secondary.dark,
    fontSize: "1.2rem",
    fontFamily: "Rubik",
  },
}));

const ServiceSection = ({ children }) => {
  const styles = useStyles();
  return <section className={styles.firstText}>{children}</section>;
};

export default ServiceSection;
