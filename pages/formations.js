import {
  Card,
  CardMedia,
  Container,
  makeStyles,
  Slide,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import FormationHero from "../widgets/HeroItem/Formation";
import Nav from "../widgets/Header/Nav";
import ServiceSection from "../widgets/ServiceSection";
import UL from "../components/UL";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  firstText: {
    color: theme.palette.secondary.dark,
    fontSize: "1.2rem",
  },
  list: {
    color: theme.palette.secondary.main,
    fontSize: "1rem",
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

const Formation = () => {
  return (
    <Container>
      <Head>
        <title>
          Formations - Being digital, meilleure agence de marketing digital en
          Algérie
        </title>
      </Head>
      <Nav />
      <FormationHero />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Main />
        <SideCard />
      </div>
    </Container>
  );
};

const SideCard = () => {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });
  return (
    <Card elevation={3} className={styles.cardContainer}>
      <Slide
        direction="up"
        in={checked}
        mountOnEnter
        unmountOnExit
        timeout={1500}
      >
        <CardMedia
          image="assets/img/formation/5.jpg"
          title="Contemplative Reptile"
          className={styles.media}
        />
      </Slide>
    </Card>
  );
};

const Main = () => {
  const styles = useStyles();

  return (
    <div id="main" className={styles.main}>
      <ServiceSection>
        <div>
          <p>
            Puisque nous connaissons l’importance de la formation au sein de
            l’entreprise. Pour les employés, une formation du personnel est une
            occasion d’acquérir de nouvelles compétences. Se contenter de son
            expérience peut être un blocage personnel.
          </p>
        </div>
        <div>
          <p>Pour cela nous vous proposons des forma tions ans le cadre B2B:</p>
          <UL>
            <li>Cours de langues</li>
            <li>Community manager</li>
            <li>Vente B2B</li>
            <li>Les clés de la vente réussie</li>
            <li>Formations PNL, PMP, GRH</li>
            <li>Gestion de stress</li>
            <li>Formation Word, Excel, Access</li>
            <li>Création d’entreprise</li>
            <li>Formation Marketing digital</li>
            <li>Formation e-commerce</li>
            <li>Formation workshop management des projets</li>
          </UL>
          <p>Nous vous proposons aussi le service de community manager</p>
        </div>
      </ServiceSection>
    </div>
  );
};

export default Formation;
