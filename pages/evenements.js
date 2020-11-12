import EventHero from "../widgets/HeroItem/Event";
import Nav from "../widgets/Header/Nav";
import ServiceSection from "../widgets/ServiceSection";
import Head from "next/head";
import { Container } from "@material-ui/core";

const Evenements = () => {
  return (
    <Container>
      <Head>
        <title>
          Evènements - Beindigital, meilleure agence de marketing digital en
          Algérie
        </title>
      </Head>
      <Nav />
      <EventHero />
      <div id="main">
        <ServiceSection>
          <div>
            <p>
              Il y a toujours une bonne raison pour créer un événement avec vos
              équipes et/ou vos clients.
            </p>
            <p>
              Peu importe le format de votre événement, l'équipe{" "}
              <b>BEIN DIGITAL EVENTS</b> est là pour vous.
            </p>
            <p>
              Nous Organisons des événements professionnels : formation,
              conférence, congrès, convention d’entreprise, incentives,
              roadshow, salon, séminaire, soirée d'entreprise, team building,
              voyages d’affaires... ( une prestation complète de A à Z ou
              partielle)
            </p>
            <p>Et les évènements personnels : mariage, fiançailles, etc</p>
          </div>
        </ServiceSection>
      </div>
    </Container>
  );
};

export default Evenements;
