import { Link } from "gatsby";
import React from "react";
import style from "./navigation.module.scss";

const Navigation = () => (
  <nav className={style.root}>
    <Link to="/about">About</Link>
    <Link to="/credits">Credits</Link>
  </nav>
);

export default Navigation;
