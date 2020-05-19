import { Link } from "gatsby";
import React, { SFC } from "react";
import style from "./navigation.module.scss";

import TwitterIcon from "../images/icon-twitter.svg";
import RedditIcon from "../images/icon-reddit.svg";

type NavigationProps = {
  home?: boolean;
}

const Navigation: SFC<NavigationProps> = ({home}) => (
  <nav className={style.root}>
    {!home && <Link className={style.homeLink} to="/">
      Home
    </Link>}
    <Link className={style.textLink} to="/about">
      About
    </Link>
    <Link className={style.textLink} to="/download">
      Download
    </Link>
    <div className={style.social}>
      <a target="_blank" href="https://www.reddit.com/r/thomastells">
        <RedditIcon />
      </a>
      <a target="_blank" href="https://www.twitter.com/ttaspodcast">
        <TwitterIcon />
      </a>
    </div>
  </nav>
);

export default Navigation;
