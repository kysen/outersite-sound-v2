import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";

import team2 from "../../../assets/img/outerSite/moose-canoe/stage-frontal.jpg";
import team3 from "../../../assets/img/outerSite/zenith/fam-pic.jpg";

import { cardTitle, title } from "../../../assets/jss/material-kit-react.js";
const useStyles = makeStyles({
  section: {
    padding: "70px 0 0 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  seventyWidth: {
    width: "70vw",
  },
  gridItem: {
    transition: ".3s ease-in-out",
    borderRadius: "5px",
  },
  gridItemShadowed: {},
  cardShadow: {
    cursor: "pointer",
    transition: ".3s ease-in-out",
    paddingTop: "20px",
    "&:hover": {
      boxShadow: "5px 5px 12px black",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  itemGrid: {},
  roundedImage: {
    borderRadius: "50%",
    height: "300px",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    color: "#999",
    fontSize: "1.8em",
    lineHeight: "1.2",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  emails: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
    cursor: "poiner",
    transition: ".3s ease-in-out",
    "&:hover": {
      color: "red",
    },
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "80px",
    color: "#999",
    transition: ".3s ease-in-out",
    "&:hover": {
      color: "blue",
    },
  },
  margin5: {
    margin: "5px",
    padding: "none",
  },
  "@media (max-width: 500px)": {},
});

export default function MeetTheBands() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const classes = useStyles();

  const handleLinkClick = link => {
    window.open(link, "_blank");
  };
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Meet the Bands!</h2>
      <div className={classes.seventyWidth}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} className={classes.gridItemShadowed}>
            {/* <Link to="zenith"> */}
            <Card plain className={classes.cardShadow}>
              <div className={classes.itemGrid}>
                <img src={team3} alt="..." className={classes.roundedImage} />
              </div>
              <h3 className={classes.cardTitle}>
                Zenith
                <br />
                {/* <small className={classes.smallTitle}>Designer</small> */}
              </h3>
              <CardBody>
                <p className={classes.description}>
                  Zenith is a combination of generations brought together in
                  the name of Classical Rock. Jeff Case the originator of
                  Zenith and also the Drummer, said he named it because the
                  songs we perform were in the Zenith time period from which
                  they originate.
                </p>
              </CardBody>
            </Card>
            {/* </Link> */}
            <CardFooter className={classes.justifyCenter}>
              <Button
                justIcon
                color="transparent"
                className={classes.margin5}
                onClick={() =>
                  handleLinkClick(
                    "https://www.facebook.com/profile.php?id=100011745003253",
                  )
                }
              >
                <i className={classes.socials + " fab fa-facebook-f"} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <a href={"mailto:jan@outersitesound.com"}>
                  <i className={classes.emails + " far fa-envelope"} />
                </a>
              </Button>
            </CardFooter>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.gridItemShadowed}>
            {/* <Link to="moose-canoe"> */}
            <Card plain className={classes.cardShadow}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={classes.roundedImage} />
              </GridItem>
              <h3 className={classes.cardTitle}>Moose Canoe</h3>
              <CardBody>
                <p className={classes.description}>
                  “Moose Canoe” don’t let the name fool you. It’s a fun name
                  that you can scream out loud at a Rock Concert. The band
                  `MOOSE CANOE` is a widely versatile and very seasoned group.
                  They take you back to the days you loved.
                </p>
              </CardBody>
            </Card>
            {/* </Link> */}
            <CardFooter className={classes.justifyCenter}>
              <Button
                justIcon
                color="transparent"
                className={classes.margin5}
                onClick={() =>
                  handleLinkClick(
                    "https://www.facebook.com/moose.canoe/timeline?lst=100042823572604%3A100000708717440%3A1578696221",
                  )
                }
              >
                <i className={classes.socials + " fab fa-facebook-f"} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <a href={"mailto:jan@outersitesound.com"}>
                  <i className={classes.emails + " far fa-envelope"} />
                </a>
              </Button>
            </CardFooter>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
