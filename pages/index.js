import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import Header from "../widgets/Header";
import WhyUs from "../widgets/WhyUs";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#fff",
    fontFamily: "Nunito",
    fontSize: "4.5rem",
  },
  secondaryDarkColorText: {
    color: theme.palette.secondary.dark,
  },
  intro: {
    textAlign: "center",
    width: "50%",
    textAlign: "center",
    margin: "auto",
    fontSize: "2rem",
    fontFamily: "Rubik",
    color: "#757575",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      fontSize: "1.5rem",
    },
  },
}));

export default function Home() {
  const styles = useStyles();
  const renderTitle = () => {
    return (
      <h1 className={styles.title}>
        Solutions digitales plus <br />{" "}
        <span className={styles.secondaryDarkColorText}>competitives</span> et
        <span className={styles.secondaryDarkColorText}> innovantes</span>
      </h1>
    );
  };
  return (
    <>
      <Head>
        <title>
          Beindigital, meilleure agence de marketing digital en Algérie
        </title>
      </Head>
      <Header renderTitle={renderTitle} />
      <p className={styles.intro}>
        Agence BEIN DIGITAL AGENCY apporte des solutions de communication à tous
        les types d’entreprises ou institutions, grâce à notre large gamme
        d’action, nous pouvons assurer l’intégralité de vos projets, de leur
        conception à leur réalisation ...
      </p>
      <WhyUs />
    </>
  );
}
