import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0 0 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  gridItem: {
    transition: ".3s ease-in-out",
    // cursor: "pointer",
    borderRadius: "5px"
    // "&:hover": {
    //   boxShadow: "5px 5px 12px black"
    // }
  },
  gridItemShadowed: {
    transition: ".3s ease-in-out",
    cursor: "pointer",
    borderRadius: "5px",
    "&:hover": {
      boxShadow: "5px 5px 12px black"
    }
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999",
    fontSize: "1.8em",
    lineHeight: "1.2"
  },
  justifyCenter: {
    justifyContent: "center !important"
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
      color: "blue"
    }
  },
  margin5: {
    margin: "5px",
    padding: "none"
  }
};

export default teamStyle;
