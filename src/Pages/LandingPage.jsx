import React, { useState, useEffect } from "react";
import User from "../Components/User";

const LandingPage = () => {
  return (
    <User
      url={
        "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/"
      }
    />
  );
};

export default LandingPage;
