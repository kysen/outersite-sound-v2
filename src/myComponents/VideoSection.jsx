/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";

// styles copied
import { title } from "../assets/jss/material-kit-react.js";
import imagesStyle from "../assets/jss/material-kit-react/imagesStyles.js";

import ReactPlayer from "react-player";

const teamStyle = {
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
  ...imagesStyle,
  gridItem: {
    width: "100%",
    height: "100%",
    padding: "50px 0px",
  },
  video: {
    height: "100%",
  },
  vidSubtitle: {
    padding: "20px",
    fontSize: "25px",
  },
};
const useStyles = makeStyles(teamStyle);

export default function VideoSection(props) {
  const classes = useStyles();

  const displayVideos = () => {
    if (props.snippet === 0) {
      return <div>Loading...</div>;
    } else {
      return props.snippet.map((current, id) => {
        return (
          <GridItem xs={12} key={id} className={classes.gridItem}>
            <GridItem xs={12} className={classes.video}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${current.snippet.resourceId.videoId}`}
                width="100%"
                height="30vw"
                config={{
                  youtube: {
                    enableJsApi: 1,
                  },
                }}
              />
            </GridItem>
            <div className={classes.vidSubtitle}>{current.snippet.title}</div>
          </GridItem>
        );
      });
    }
  };
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Past Gigs</h2>
      {/* add videos here */}

      <GridContainer justify="center">{displayVideos()}</GridContainer>
    </div>
  );
}
