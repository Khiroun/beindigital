import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

import { CssBaseline, makeStyles } from "@material-ui/core";

import Nav from "./Nav";
import Main from "../HeroItem/Main";
import Digital from "../HeroItem/Digital";
import Formation from "../HeroItem/Formation";
import Communication from "../HeroItem/Communication";
import Event from "../HeroItem/Event";

const NB_PAGES = 5;
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryDarkColorText: {
    color: theme.palette.secondary.dark,
  },
}));

const Header = () => {
  const styles = useStyles();
  const carouselRef = useRef(null);

  return (
    <>
      <Nav />

      <div className={styles.root} id="header">
        <CssBaseline />
        <Carousel
          ref={carouselRef}
          itemsToShow={1}
          disableArrowsOnEnd={false}
          enableAutoPlay={true}
          enableTilt={true}
          onNextEnd={({ index }) => {
            if (index + 1 === NB_PAGES) {
              setTimeout(() => {
                carouselRef.current && carouselRef.current.goTo(0);
              }, 2000);
            }
          }}
        >
          <Main />
          <Digital />
          <Formation />
          <Communication />
          <Event />
        </Carousel>
      </div>
    </>
  );
};

export default Header;
