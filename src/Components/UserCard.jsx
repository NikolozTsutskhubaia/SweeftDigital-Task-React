import React, { useState, useEffect } from "react";
import classes from "../Modules/UserCard.module.css";

const UserCard = (props) => {
  return (
    <>
      <div key={props.id} className={classes.userInfo}>
        <img src={props.imageUrl} alt={props.name + " " + props.lastName} />
        <div className={classes.userInfo}>
          <strong>
            {props.prefix + " " + props.name + " " + props.lastName}
          </strong>
          <span>{props.title}</span>
        </div>
      </div>
    </>
  );
};

export default UserCard;
