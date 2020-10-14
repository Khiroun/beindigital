import { makeStyles } from "@material-ui/core";
import React from "react";
import ImageCard from "../components/ImageCard";
import whyUs from "../data/WhyUs";
import useWindowPosition from "../hooks/useWindowPosition";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  mytext: {
    color: theme.palette.primary.main,
  },
}));
const WhyUs = () => {
  const checked = useWindowPosition("header");
  const styles = useStyles();
  return (
    <div className={styles.root} id="main">
      {whyUs.map((w) => (
        <ImageCard data={w} checked={checked} key={w.title} href={w.href} />
      ))}
    </div>
  );
};

export default WhyUs;
