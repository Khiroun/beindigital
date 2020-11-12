import { Card, CardMedia, Container, makeStyles } from "@material-ui/core";
import DigitalHero from "../widgets/HeroItem/Digital";
import Nav from "../widgets/Header/Nav";
import ServiceSection from "../widgets/ServiceSection";
import UL from "../components/UList";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  firstText: {
    color: theme.palette.secondary.dark,
    fontSize: "1.2rem",
    fontFamily: "Rubik",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  list: {
    color: theme.palette.secondary.main,
    fontSize: "1rem",
    marginLeft: "2rem",
    fontFamily: "Rubik",
  },
  media: {
    height: "100%",
  },
  cardContainer: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
}));

const Digital = () => {
  const styles = useStyles();
  return (
    <Container>
      <DigitalHero />
      <div className={styles.container}>
        <Main />
        <SideCard />
      </div>
    </Container>
  );
};

const SideCard = () => {
  const styles = useStyles();

  return (
    <Card elevation={3} className={styles.cardContainer}>
      <CardMedia
        image="assets/img/digital/5.jpg"
        title="Digital"
        className={styles.media}
      />
    </Card>
  );
};

const Main = () => {
  const styles = useStyles();

  return (
    <div id="main" className={styles.main}>
      <Head>
        <title>
          Digital - Beindigital, meilleure agence de marketing digital en
          Algérie
        </title>
      </Head>
      <Nav />
      <ServiceSection>
        <div>
          <p>
            En ce qui concerne le digital, vous aurez besoin d'une agence de
            marketing qui dispose d'une expertise dans tous les domaines.
          </p>
          <p>
            L'objectif est de promouvoir vos services, fidéliser votre clientèle
            et d'augmenter vos ventes grâce aux operations de marketing
            numérique.
          </p>
        </div>

        <div>
          <p>Nous vous offrons:</p>
          <UL>
            <li>La conception et la réalisation d'applications mobiles</li>
            <li>
              La conception de sites web: sites vitrines, sites pro, site
              e-commerce
            </li>
            <li>
              Boost sur les réseaux sociaux: Facebook, Instagram, LinkedIn
            </li>
            <li>Les rapports de données</li>
            <li>La rédaction et animation des contenus</li>
            <li>La recherche de clients potentiels + mailing</li>
            <li>L'élaboration de stratégies</li>
            <li>Marketing en ligne</li>
          </UL>
          <p>Nous vous proposons aussi le service de community manager.</p>
        </div>
      </ServiceSection>
    </div>
  );
};

export default Digital;
