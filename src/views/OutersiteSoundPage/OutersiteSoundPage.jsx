import React from "react";

// import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";

import MeetTheBands from "./Sections/MeetTheBands.jsx";

import landingImage from "../../assets/img/a-purple-space-background.jpg";

const useStyles = makeStyles({
  container: {
    overflowX: "hidden",
    zIndex: "12",
    color: "#FFFFFF",
    width: "99vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wasParallax: {
    background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2) ), url(${landingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "99vw 99vh",

    height: "99vh",
    width: "99vw",
    maxWidth: "100vw",
  },
  headerContainer: {
    zIndex: "12",
    color: "#FFFFFF",
    width: "99vw",
    height: "99vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    // ...title,
    fontSize: "8rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#F7CA00",
    textDecoration: "none",
    width: "100%",
    textAlign: "center",
  },
  subtitle: {
    color: "#F7CA00",

    fontSize: "1.8rem",
    maxWidth: "500px",
    margin: "10px auto 0",
    textAlign: "center",
  },
  main: {
    background: "#FFFFF5",
    position: "relative",
    zIndex: "3",
  },

  "@media (max-width: 500px)": {
    container: {
      width: "100vw",
    },
    wasParallax: {
      backgroundSize: "1000px 99vh",
    },
    title: {
      // ...title,
      fontSize: "2rem",
    },
    subtitle: {
      fontSize: "1rem",
    },
  },
});

export default function OutersiteSoundPage(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wasParallax}>
        <div className={classes.headerContainer}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Outersite Sound</h1>
                <h3 className={classes.subtitle}>
                  Production of Music at its Finest
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.container}>
          <MeetTheBands />
        </div>
      </div>
      <Footer />
    </div>
  );
}
