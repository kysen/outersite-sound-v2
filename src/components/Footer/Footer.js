import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
// import { container } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    float: "right!important",
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    // position: "relative",
  },
  footerWidth: {
    width: "70vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  a: {
    color: "inherit",
    fontSize: "1em",
    textDecoration: "none",
    backgroundColor: "transparent",
    transition: ".2s ease-in-out",
    "&:visited": {
      color: "inherit",
    },
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  // container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    // position: "relative",
    top: "3px",
  },
  "@media (max-width: 500px)": {
    footerWidth: {
      display: "flex",
      flexDirection: "column-reverse",
    },
    right: {
      alignItems: "center",
    },
  },
});

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;

  return (
    <div className={classes.root}>
      <div className={classes.footerWidth}>
        <div className={classes.left}>
          &copy; {1900 + new Date().getYear()} OutersiteSound
        </div>
        <div className={classes.right}>
          <a className={classes.a} target="blank_" href="tel:801-518-3964">
            (801) - 518 - 3964
          </a>
          <a
            className={classes.a}
            target="blank_"
            href="mailto:jan@outersitesound.com"
          >
            jan@outersitesound.com
          </a>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
