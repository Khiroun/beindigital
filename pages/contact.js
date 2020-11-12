import Nav from "../widgets/Header/Nav";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import { useState } from "react";
import emailJs from "emailjs-com";

const contact = () => {
  return (
    <div className="container-contact1">
      <Head>
        <title>
          Contactez Beindigital, meilleure agence de marketing digital en
          Algérie
        </title>
      </Head>
      <Nav />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <ContactForm />
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  contactInfo: {
    display: "flex",
    flexDirection: "column",
  },
  contactInfoItem: {
    margin: "2rem 0",
    display: "flex",
    color: theme.palette.secondary.main,
    fontFamily: "Rubik",
    alignItems: "center",
  },
  icon: {
    marginRight: "2rem",
    color: theme.palette.primary.main,
  },
}));

const ContactInfoItem = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.contactInfoItem}>{children}</div>;
};

const ContactInfo = () => {
  const styles = useStyles();
  return (
    <article className={styles.contactInfo}>
      <ContactInfoItem>
        <PhoneIcon className={styles.icon} />
        <div>
          <h2>0770 10 74 18</h2>
          <h2>0770 10 76 34</h2>
          <h2>023 23 00 73</h2>
        </div>
      </ContactInfoItem>
      <ContactInfoItem>
        <EmailIcon className={styles.icon} />
        <div>
          <h2>beindigital.dz@gmail.com</h2>
          <h2>contact@beindigital.agency</h2>
        </div>
      </ContactInfoItem>
      <ContactInfoItem>
        <RoomIcon className={styles.icon} />
        <div>
          <h2>Bein Digital</h2>
          <p>Lot N° 40, 42 Rue de la Madeleine, Hydra</p>
        </div>
      </ContactInfoItem>
    </article>
  );
};

const ContactMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.841384332595!2d3.018835251045038!3d36.75037817986044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3a4303d544d%3A0x308e868ec69de3a1!2sBein%20Digital!5e0!3m2!1sen!2sdz!4v1602601501765!5m2!1sen!2sdz"
      height={450}
      frameBorder={0}
      style={{ border: 0, width: "90%" }}
      allowFullScreen
      aria-hidden="false"
      tabIndex={0}
    />
  );
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      to_name: "Bein Digital",
      subject,
      message,
      email,
    };
    setLoading(true);
    emailJs
      .send(
        "contact_service",
        "contact_form",
        templateParams,
        "user_KCBjWbuFT2bfNs9rDOtXa"
      )
      .then((res) => {
        console.log("Email Sent");
        setLoading(false);
      });
  };
  return (
    <form
      className="contact1-form validate-form"
      style={{ width: "90%" }}
      onSubmit={handleSubmit}
    >
      <span className="contact1-form-title">Contactez Nous</span>
      {loading && <span>Envoie en cours ...</span>}
      <div
        className="wrap-input1 validate-input"
        data-validate="Name is required"
      >
        <input
          className="input1"
          type="text"
          name="name"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="shadow-input1" />
      </div>
      <div
        className="wrap-input1 validate-input"
        data-validate="Valid email is required: ex@abc.xyz"
      >
        <input
          className="input1"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="shadow-input1" />
      </div>
      <div
        className="wrap-input1 validate-input"
        data-validate="Subject is required"
      >
        <input
          className="input1"
          type="text"
          name="subject"
          placeholder="Objet"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <span className="shadow-input1" />
      </div>
      <div
        className="wrap-input1 validate-input"
        data-validate="Message is required"
      >
        <textarea
          className="input1"
          name="message"
          placeholder="Message"
          defaultValue={""}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <span className="shadow-input1" />
      </div>
      <div className="container-contact1-form-btn">
        <button className="contact1-form-btn">
          <span>
            Envoyer
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default contact;
