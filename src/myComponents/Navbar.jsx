/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";


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
    cursor: 'pointer',
    '&:hover': {
      color: 'purple'
    }
  },
});

export default function Navbar({ tab, setTab }) {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div onClick={() => setTab('outersite')} className={classes.tab}>
        HOME
      </div>
      <div onClick={() => setTab('zenith')} className={classes.tab}>
        ZENITH
      </div>
      <div onClick={() => setTab(newLocal)} className={classes.tab}>
        MOOSE CANOE
      </div>
    </div>
  );
}
