// import { container, title } from "assets/jss/material-kit-react.js";
import { container } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
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
    textAlign: "center"
  },
  subtitle: {
    color: "#F7CA00",

    fontSize: "1.8rem",
    maxWidth: "500px",
    margin: "10px auto 0",
    textAlign: "center"
  },
  main: {
    background: "#FFFFF5",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
