import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {
    padding: 20,
    position: "absolute",
    zIndex: "2",
    display: "flex",
  },
  tab: {
    transition: ".2s ease-in-out",
    color: "#F7CA00",
    padding: 20,
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <Link to="outersite" className={classes.tab}>
        HOME
      </Link>
      <Link to="zenith" className={classes.tab}>
        ZENITH
      </Link>
      <Link to="moose-canoe" className={classes.tab}>
        MOOSE CANOE
      </Link>
    </div>
  );
}
