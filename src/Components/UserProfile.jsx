import React from "react";
import classes from "../Modules/ProfilePage.module.css";

const UserProfile = (props) => {
  return (
    <>
      <div className={classes.profile}>
        <img
          src={`${props.user.imageUrl}?v=${props.user.id}`}
          alt={`${props.user.name} ${props.user.lastName}`}
        />
        <fieldset className={classes.mainInfo}>
          <legend>Info</legend>
          <div className={classes.userInfo}>
            <strong>{`${props.user.prefix} ${props.user.name} ${props.user.lastName}`}</strong>
            <em>{props.user.title}</em>
            <br />
            <span>Email: {props.user.email}</span>
            <span>Ip Address: {props.user.ip}</span>
            <span>Job Area: {props.user.jobArea}</span>
            <span>Job Type: {props.user.jobType}</span>
          </div>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <div className={classes.userAddress}>
            <strong>
              {props.user.company?.name + props.user.company?.suffix}
            </strong>
            <span>City: {props.user.address?.city}</span>
            <span>Country: {props.user.address?.country}</span>
            <span>State: {props.user.address?.state}</span>
            <span>Street Address: {props.user.address?.streetAddress}</span>
            <span>ZIP: {props.user.address?.zipCode}</span>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default UserProfile;
