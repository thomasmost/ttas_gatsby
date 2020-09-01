import React from "react";
import style from "./episode_download.module.scss";

const EpisodeDownload = ({ image, link, title, artist = null, artistLink = null }) => (
  <div className={style.root}>
    <a className="download_1" target="_blank" href={link}>
      <div className={style.imgContainer}>
        <img src={image} className={style.img} />
      </div>
      <div className={style.title}>{title}</div>
    </a>
    {Boolean(artist) && <div className={style.artist}>Cover art by <a target="_blank" href={artistLink}>{artist}</a></div>}
    <div className={style.clearfix} />
  </div>
);

export default EpisodeDownload;
