import CommunicationHero from "../widgets/HeroItem/Communication";
import Nav from "../widgets/Header/Nav";
import ServiceSection from "../widgets/ServiceSection";
import UL from "../components/UList";
import Head from "next/head";

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
          <p>Nous vous proposons aussi le service de community manager</p>
        </div>
      </ServiceSection>
    </div>
  );
};

const Communication = () => {
  return (
    <div>
      <Nav />

      <CommunicationHero />
      <Main />
    </div>
  );
};

export default Communication;
