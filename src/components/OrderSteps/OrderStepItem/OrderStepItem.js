import React from "react";
import classes from "./OrderStepItem.module.scss";

import { ReactComponent as StepIcon } from "../../../assets/img/svg/how_to_order_icon_1.svg";

const OrderStepItem = ({ icon, title, details, classesList }) => {
  return (
    <div className={`${classes["step-item"]} ${classesList}`}>
      <span className={classes.icon}> {icon} </span>
      <p className={classes.title}>{title}</p>
      <p className={classes.details}> {details} </p>
    </div>
  );
};

export default OrderStepItem;
