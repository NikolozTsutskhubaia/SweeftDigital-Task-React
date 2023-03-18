import React, { useState, useEffect } from "react";
import classes from "../Modules/ProfilePage.module.css";
import { useParams } from "react-router-dom";
import User from "../Components/User";
import UserProfile from "../Components/UserProfile";

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div className={classes.container}>
      <UserProfile user={user} />
      <h1 className={classes.friendsTitle}>Friends:</h1>
      <div className={classes.friendsList}>
        <User
          url={`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/`}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
