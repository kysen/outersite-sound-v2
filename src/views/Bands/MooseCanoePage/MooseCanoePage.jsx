import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../../../components/Footer/Footer.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";

import { container, title } from "../../../assets/jss/material-kit-react.js";

import imagesStyle from "../../../assets/jss/material-kit-react/imagesStyles.js";

import VideoSection from "../../../myComponents/VideoSection";
import PlacesPerformed from "../../../myComponents/PlacesPerformed";

import landingImage from "../../../assets/img/outerSite/moose-canoe/moose-canoe-backdrop.png";
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
    filter: "brightness(60%)",
  },
  profile: {
    textAlign: "center",
    position: "relative",
    marginTop: "70px",
    transform: "translate3d(0, 0, 0)",
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  paragraph: {
    fontSize: "20px",
    padding: "0px 0px 20px 0px",
    color: "black",
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
    fontSize: "3em",
  },
  subTitle: {
    fontSize: "1.3em",
  },
  socials: {
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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    backImage: {
      width: "700px",
      maxWidth: "10000px",
    },
  },
});

export default function MooseCanoePage() {
  const [snippet, setSnippet] = React.useState(0);

  React.useEffect(() => { }, [snippet]);
  if (snippet === 0) {
    axios
      .get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet",
          maxResults: 50,
          playlistId: "PLnmIjmEVVCoWUZBcosKDgCGtiVI3zPDg3",
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
    "Layton Festival",
    "Utah State Fair",
    "Jordan Landing",
    "Hogle Zoo",
    "Caesars Motorcycle Bash",
    "Pinedale Wyoming",
    "Stockmans Layton Utah",
    "Many clubs around the Salt Lake City area",
    "Park Silly Days",
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const classes = useStyles();
  const handleLinkClick = link => {
    window.open(link, "_blank");
  };

  return (
    <div className={classes.root}>
      <img className={classes.backImage} src={landingImage} alt="limage" />
      <div className={classNames(classes.main)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  {/* <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div> */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Moose Canoe</h3>
                    <h4 className={classes.subTitle}>Cover Band</h4>
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
                “Moose Canoe” don’t let the name fool you. It’s a fun name that
                you can scream out loud at a Rock Concert. The band `MOOSE
                CANOE` is a widely versatile and very seasoned group. They take
                you back to the days you loved.
              </p>
              <p className={classes.paragraph}>
                The band members come from all over the United States. They play
                the Classic Rock era to a genuine remembrance. The range of
                music can be from Heart to Patsy Cline, to Lynard Skynard to
                Stevie Ray Vaughn
              </p>
              <p className={classes.paragraph}>
                They love their audience. They get you involved, and the
                children in the audience have the opportunity to grab something
                from the percussion box and rock with the band. Janette loves to
                go out into the audience and sing to them personally and make
                them smile and blush.{" "}
              </p>
              <p className={classes.paragraph}>
                Moose Canoe has performed for old and young alike at local Clubs
                and throughout the U.S., Concerts, Car Shows, State Fair, Las
                Vegas, USO Tours, Weddings, Jordan Landing, Park City Silly
                Days, about every possible event you can imagine, and they love
                every minute of it and it shows in their Concerts.{" "}
              </p>
              <p className={classes.paragraph}>
                Weddings, Jordan Landing, Park City Silly Days, about every
                possible event you can imagine, and they love every minute of it
                and it shows in their Concerts.{" "}
              </p>
              <p className={classes.paragraph}>
                {" "}
                Moose Canoe is High energy, with good vibes – that take you back
                to the days of true rock n’ roll. People in the audience always
                comments on “this brought back great memories. I could close my
                eyes and Moose Canoe was so great you would believe you were
                listening to the real band but better of the songs they would
                perform. Wonderful. Fun. Real!
              </p>
            </div>
            {/* <ZenithBandMembers /> */}
            <VideoSection snippet={snippet} />
            <PlacesPerformed places={places} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
