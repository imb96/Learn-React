import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <p>This page is First Page</p>
      <Link to="/about">Introduce</Link>
    </div>
  );
};

export default Home;
