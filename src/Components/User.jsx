import React, { useState, useEffect } from "react";
import classes from "../Modules/LandingPage.module.css";
import UserCard from "../Components/UserCard";
import { Link, NavLink, useLocation } from "react-router-dom";

const User = (props) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setTimeout(setCurrentPage(currentPage + 1), 500);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    fetch(`${props.url + currentPage}/16`)
      .then((response) => response.json())
      .then((prevData) => {
        setData([...data, ...prevData.list]);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  useEffect(() => {
    fetch(`${props.url + currentPage}/16`)
      .then((response) => response.json())
      .then((data) => setData(data.list));
  }, [location.pathname]);

  return (
    <div className={classes.users}>
      {data.map((user) => (
        <NavLink
          to={`/user/${user.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <UserCard
            key={user.id}
            name={user.name}
            lastName={user.lastName}
            prefix={user.prefix}
            title={user.title}
            imageUrl={`${user.imageUrl}?v=${user.id}`}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default User;
