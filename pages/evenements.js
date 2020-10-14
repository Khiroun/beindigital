import EventHero from "../widgets/HeroItem/Event";
import Nav from "../widgets/Header/Nav";
import ServiceSection from "../widgets/ServiceSection";
import Head from "next/head";

const Evenements = () => {
  return (
    <div>
      <Head>
        <title>
          Evènements - Being digital, meilleure agence de marketing digital en
          Algérie
        </title>
      </Head>
      <Nav />
      <EventHero />
      <div id="main">
        <ServiceSection>
          <div>
            <p>
              Organisation des évènements professionnels : formation,
              conférence, congrès, convention d’entreprise, incentives,
              roadshow, salon, séminaire, soirée d'entreprise, team building,
              voyages d’affaires... ( une prestation complète de A à Z ou
              partielle) * Et les évènements personnels : mariage, fiançailles,
              etc
            </p>
          </div>
        </ServiceSection>
      </div>
    </div>
  );
};

export default Evenements;
