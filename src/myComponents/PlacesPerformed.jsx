/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// styles copied
import { title } from "../assets/jss/material-kit-react.js";

const teamStyle = {
  section: {
    padding: "0px 0 50px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
};
const useStyles = makeStyles(teamStyle);

export default function VideoSection(props) {
  const classes = useStyles();

  const lugares = () => {
    return props.places.map((current, index) => {
      return (
        <h4 key={index}>
          {current}
        </h4>)
    }
    )
  }

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Places of Performance</h2>
      <div>
        {lugares()}
      </div>
    </div>
  );
}
