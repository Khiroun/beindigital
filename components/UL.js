import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    color: theme.palette.secondary.main,
    fontSize: "1rem",
    marginLeft: "2rem",
    fontFamily: "Rubik",
  },
}));

const UL = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.list}>{children}</div>;
};

export default UL;
