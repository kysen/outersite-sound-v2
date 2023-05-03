import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../../../components/Footer/Footer.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";

import { container, title } from "../../../assets/jss/material-kit-react.js";

import imagesStyle from "../../../assets/jss/material-kit-react/imagesStyles.js";

import profile from "../../../assets/img/outerSite/zenith/zenith-round-logo.jpg";

import ZenithBandMembers from "./ZenithSections/ZenithBandMembers.jsx";
import VideoSection from "../../../myComponents/VideoSection.jsx";
import PlacesPerformed from "../../../myComponents/PlacesPerformed.jsx";

import damek from "../../../assets/img/outerSite/zenith/band-members/damekSchool.jpg";
import eddie from "../../../assets/img/outerSite/zenith/band-members/longhair.jpg";
import ted from "../../../assets/img/outerSite/zenith/band-members/man2.jpg";
import jan from "../../../assets/img/outerSite/zenith/band-members/girl.jpg";
import man from "../../../assets/img/outerSite/zenith/band-members/man.jpg";

import landingImage from "../../../assets/img/outerSite/zenith/zenith-banner.jpg";

import axios from 'axios'

const useStyles = makeStyles({
  container,
  root: {
    overflowX: "hidden",
  },
  backImage: {
    height: "99vh",
    width: "99vw",
    maxWidth: "100vw",
    filter: "brightness(80%)",
  },
  profile: {
    textAlign: "center",
    position: "relative",
    marginTop: "110px",
  },
  zenithLogo: {
    transform: "translate3d(0, -50%, 0)",
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  paragraph: {
    fontSize: "30px",
    padding: "0px 0px 20px 0px",
    color: "black",
    lineHeight: 1.3,
  },
  name: {
    marginTop: "-80px",
  },
  ...imagesStyle,
  main: {
    background: "#FFFFF5",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "50px",
    color: "#999",
    cursor: "poiner",
    transition: ".3s ease-in-out",
    "&:hover": {
      color: "blue",
    },
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
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
  "@media (max-width: 500px)": {
    root: {
      overflowX: "hidden",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    backImage: {
      width: "900px",
      maxWidth: "10000px",
    },
  },
});

export default function ZenithPage() {

  const [snippet, setSnippet] = React.useState(0);

  React.useEffect(() => { }, [snippet]);
  if (snippet === 0) {
    axios
      .get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet",
          maxResults: 50,
          playlistId: "PLnmIjmEVVCoWm5eNj8WlYX7xNtehfhDAA",
          key: "AIzaSyDU9HU_OI90sHgoG0dmeZNDiMdeU7Zp6sU",
          enableJsApi: 1,
        },
      })
      .then(response => {
        setSnippet(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const places = [
    "White City Days at Bear Park",
    "Jordan Landing",
    "Gallivan Center",
    "Hogle Zoo",
    "Caesars Motocycle Back",
    "Human Society in West Valley",
    "Club 48 for a benefit for cancer",
    "Many clubs in Salt Lake city",
    "Weddings",
    "Kellogg Garden Products Corporate meeting",
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
  const handleLinkClick = link => {
    window.open(link, "_blank");
  };
  return (
    <div className={classes.root}>
      <img className={classes.backImage} src={landingImage} alt="background" />
      <div className={classNames(classes.main)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={profile}
                      alt="..."
                      className={`${imageClasses} ${classes.zenithLogo}`}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Zenith</h3>
                    <h4>Cover Band</h4>
                    <h4>Originals</h4>
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
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <a href={"mailto:jan@outersitesound.com"}>
                        <i className={classes.emails + " far fa-envelope"} />
                      </a>
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p className={classes.paragraph}>
                Zenith is a combination of generations brought together in the
                name of Classical Rock. Jeff Case the originator of Zenith and
                also the Drummer, said he named it because the songs we perform
                were in the Zenith time period from which they originate.{" "}
              </p>
              <p className={classes.paragraph}>
                Their retake on the songs they pick to perform catch your
                listening ear. You will enjoy this band. They love to play and
                it shows
              </p>
            </div>
            {/* TODO */}
            <ZenithBandMembers
              member5="Eddy"
              description5="The originator of Zenith and also the Drummer, said he named it because the songs we perform were in the Zenith time period from which they originate."
              image1={jan}
              member1="Janette"
              description1="On Vocals has a feel to bring the classic songs back to life. Loves to play Guitar and Keyboards."
              image2={ted}
              member2="Ted"
              description2="Plays Guitar and Vocals brings the band together with his energy."
              image3={eddie}
              member3="Eddie"
              description3="Is impeccable on the Bass and Keyboards."
              image4={damek}
              member4="Damek"
              description4="Is the newest addition. He is their Flutist. He has performed with the School of Rock, playing a great Jethro Tull, and other flute based songs."
              image5={man}
            />
            <VideoSection snippet={snippet} />
            <PlacesPerformed places={places} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
