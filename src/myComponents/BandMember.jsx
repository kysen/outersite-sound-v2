/* eslint-disable react/prop-types */
import React from "react";

import Card from "../components/Card/Card.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import GridItem from "../components/Grid/GridItem.jsx";

const BandMember = props => {
  return (
    <GridItem xs={12} sm={6} md={4} className={props.classes.gridItem}>
      <Card plain>
        <GridItem xs={12} sm={12} md={12} className={props.classes.itemGrid}>
          <img src={props.image} alt="..." className={props.imageClasses} />
        </GridItem>
        <h3 className={props.classes.cardTitle}>
          {props.member}
          <br />
        </h3>
        <CardBody>
          <p className={props.classes.description}>{props.content}</p>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default BandMember;
