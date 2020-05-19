import React from "react";
import style from "./episode_download.module.scss";

const EpisodeDownload = ({ image, link, title, artist, artistLink }) => (
  <div className={style.root}>
    <a href={link}>
      <div className={style.imgContainer}>
        <img src={image} className={style.img} />
      </div>
      <div className={style.title}>{title}</div>
    </a>
    <div className={style.artist}>Cover art by <a href={artistLink}>{artist}</a></div>
    <div className={style.clearfix} />
  </div>
);

export default EpisodeDownload;
