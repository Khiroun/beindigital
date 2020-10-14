import CommunicationHero from "../widgets/HeroItem/Communication";
import Nav from "../widgets/Header/Nav";
import ServiceSection from "../widgets/ServiceSection";
import UL from "../components/UList";
import Head from "next/head";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));
const Main = () => {
  return (
    <div id="main">
      <Head>
        <title>
          Communication - Being digital, meilleure agence de marketing digital
          en Algérie
        </title>
      </Head>
      <ServiceSection>
        <p>
          Aider chaque entreprise à marquer son territoire face à la
          concurrence, comprendre son marché, convaincre les professionnels des
          qualités de l’offre, séduire le public par l’attrait de la marque,
          motiver l’interne sur le projet d’entreprise ...
        </p>
        <p>
          Nous nous inscrivons en droite ligne de l’écoute, du conseil et de
          l’analyse des besoins, judicieusement coordonnés et subtilement dosés,
          des forces minimes suffisent à faire levier et à déclencher la
          réussite.
        </p>
        <p>
          L’Agence conseil en communication BEIN DIGITAL AGENCY vous guidera
          pour que vos actions soient visibles et accessibles sur tous les
          écrans et sur tous les nouveaux supports numériques, optez pour une
          communication créative et interactive qui caractérise notre époque.
          Grâce entre autres aux réseaux sociaux, vous allez entrer en contact
          direct avec vos utilisateurs finaux, on parle, on parle ... de vous.
        </p>
        <div>
          <UL>
            <h2 style={{ margin: "1rem 0" }}>Studio Graphique</h2>
            <h3 style={{ margin: "0.5rem 0" }}>Création de Logos</h3>
          </UL>
          <p>
            A partir d’un brief précis sur la vocation et les valeurs véhiculées
            par votre entreprise, nos créatifs vont alors saisir les éléments
            clés à la construction de votre identité et opter pour les meilleurs
            choix visuels au travers d’une démarche créative pour vous proposer
            une réalisation originale, sur mesure et pérenne.
          </p>
          <UL>
            <h3 style={{ margin: "0.5rem 0" }}>CRÉATION CHARTE GRAPHIQUE</h3>
          </UL>
          <p>
            Afin de vous apporter une cohérence visuelle et contribuer au fil du
            temps à créer l'identité de votre marque dans l'esprit de votre
            public, nous vous accompagnons dans la mise en place de votre charte
            graphique qui découle de votre logo.
          </p>
          <p>
            Nous serons alors en mesure de décliner votre identité sur tous vos
            outils de communication:
          </p>
          <UL>
            <li>Documents commerciaux</li>
            <li>Enveloppe</li>
            <li>Carte commerciale</li>
            <li>Chemise documentation</li>
            <li>Port-document</li>
          </UL>
          <UL>
            <h3 style={{ margin: "0.5rem 0" }}>WEBDESIGN</h3>
          </UL>
          <p>
            Notre agence sait allier ergonomie et créativité. Le design de votre
            site web est étudié pour pouvoir être à la fois facile d’utilisation
            mais aussi accrocheur parmi les millions de sites présent sur la
            toile. En veille permanente sur les nouvelles tendances en termes de
            design digital, nous vous proposons une interface adaptée à votre
            identité et à votre projet.
          </p>
          <UL>
            <h3 style={{ margin: "0.5rem 0" }}>
              IMPRESSION SUPPORTS PUBLICITAIRES
            </h3>
          </UL>
          <p>
            Nous vous apportons des solutions d’impression de qualité, des devis
            clairs et rapides, et optimisons vos solutions d’impression au
            meilleur prix pour tous vos documents & supports (du plus simple au
            plus créatif).
          </p>
        </div>
      </ServiceSection>
    </div>
  );
};

const communication = () => {
  return (
    <Container>
      <Nav />

      <CommunicationHero />
      <Main />
    </Container>
  );
};

export default communication;
