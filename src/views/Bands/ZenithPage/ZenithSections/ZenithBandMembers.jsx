/* eslint-disable react/prop-types */
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.jsx";
import styles from "../../../../assets/jss/material-kit-react/views/outersiteSoundPageSections/meetTheBands.js";

import BandMember from "../../../../myComponents/BandMember.jsx";

const useStyles = makeStyles(styles);

export default function ZenithBandMembers(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgBlackWhite
  );

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Band Members</h2>
      <div>
        <GridContainer>
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={props.description5}
            member={props.member5}
            image={props.image5}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={props.description1}
            member={props.member1}
            image={props.image1}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={props.description2}
            member={props.member2}
            image={props.image2}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={props.description3}
            member={props.member3}
            image={props.image3}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={props.description4}
            member={props.member4}
            image={props.image4}
          />
        </GridContainer>
      </div>
    </div>
  );
}
