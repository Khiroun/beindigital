import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  appBar: {
    background: "none",
  },
  appBarWrapper: {
    width: "100%",
    margin: "0 auto",
    backgroundColor: "rgba(50,50,50,0.9)",
  },
  icon: {
    fontSize: "1.2rem",
    fontFamily: "Rubik",
    fontWeight: "1000",
    color: theme.palette.secondary.main,
  },
  appTitle: {
    flexGrow: 1,
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    display: "flex",
  },
}));

export default function Nav() {
  const styles = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <AppBar className={styles.appBar} elevation={0}>
      <Toolbar className={styles.appBarWrapper}>
        <span>
          <Link href="/">
            <img
              src="assets/img/Logo.png"
              alt="bein-digital meilleure agence do communication digitale en Algérie logo"
              width="10%"
            />
          </Link>
        </span>
        <span className={styles.menu}>
          <Link href="/">
            <Button className={styles.icon}>Accueil</Button>
          </Link>
          <Link href="digital">
            <Button className={styles.icon}>Digital</Button>
          </Link>
          <Link href="formations">
            <Button className={styles.icon}>Formation</Button>
          </Link>
          <Link href="communication">
            <Button className={styles.icon}>Communication</Button>
          </Link>
          <Link href="evenements">
            <Button className={styles.icon}>Evenements</Button>
          </Link>
          <Link href="contact">
            <Button className={styles.icon}>Contact</Button>
          </Link>
        </span>
      </Toolbar>
    </AppBar>
  );
}
