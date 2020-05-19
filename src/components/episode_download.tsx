import React from "react";
import style from "./episode_download.module.scss";

function goTo(link: string) {
  location.href = link;
}

const EpisodeDownload = ({ image, link, title }) => (
  <a className={style.root} onClick={() => goTo(link)}>
    <div className={style.imgContainer}>
      <img src={image} className={style.img} />
    </div>
    <div className={style.title}>{title}</div>
    <div className={style.clearfix} />
  </a>
);

export default EpisodeDownload;
