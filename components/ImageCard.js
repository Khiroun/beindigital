import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, Collapse } from "@material-ui/core";
import Link from "next/link";
import theme from "../src/theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    backgroundColor: "rgba(0,0,0,0.3)",
    margin: "20px",
  },
  media: {
    height: 440,
    [theme.breakpoints.down("md")]: {
      height: 300,
    },
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      fontSize: '1rem',
    },
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down("md")]: {
      fontSize: '0.8rem'
    },
  },
});

export default function ImageCard({ data, checked, href }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={data.image.url}
          title={data.image.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {data.description}
            <Link href={href}>
              <Button>Details</Button>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
