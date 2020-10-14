import { Container, Link as MLink } from "@material-ui/core";
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer
      style={{
        color: "#fff",
        fontSize: "0.9rem",
        backgroundColor: "#3e4551",
        paddingTop: "1.5rem",
        fontWeight: 300,
        paddingBottom: "2.5rem",
        marginTop: "2rem",
      }}
    >
      <Container>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ flex: 1 }}>
            <ul>
              <li>
                <Link href="digital">
                  <MLink>Digital</MLink>
                </Link>
              </li>

              <li>
                <Link href="formations">
                  <MLink>Formation</MLink>
                </Link>
              </li>

              <li>
                <Link href="communication">
                  <MLink>Communication</MLink>
                </Link>
              </li>
              <li>
                <Link href="evenements">
                  <MLink>Evenements</MLink>
                </Link>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>A propos</div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </Container>
      {/* Social buttons */}
      {/* Copyright */}
      <div style={{ textAlign: "center" }}>
        © 2020 Copyright:
        <a href="https://bein-digital.com/"> bein-digital.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
