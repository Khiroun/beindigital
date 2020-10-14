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
          Being digital, meilleure agence de marketing digital en Algérie
        </title>
      </Head>
      <Header renderTitle={renderTitle} />

      <WhyUs />
    </>
  );
}
