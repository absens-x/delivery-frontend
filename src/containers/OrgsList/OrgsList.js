import React from "react";

import classes from "./OrgsList.module.scss";
import OrgItem from "../../components/OrgItem/OrgItem";

const fakeArr = [1, 2, 3, 4, 5, 6];

const OrgsList = () => {
  return (
    <div className="container">
      <h4>Новые рестораны</h4>
      <div className="row">
        {fakeArr.map((item, i) => {
          return <OrgItem key={i} classesList={classes["list-item"]} />;
        })}
      </div>
    </div>
  );
};

export default OrgsList;
