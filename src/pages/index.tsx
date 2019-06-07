import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import ElandridTitle from "../images/elandrid-title.svg";

const IndexPage = () => (
  <Layout zenMode={false}>
  <SEO title="The Elandrid" keywords={[`storytelling`, `elandrid`, `thomas tells`]} />
    <header>
      <ElandridTitle />
    </header>
    <div className="page">
      <h2>New episodes released Tuesdays at 8pm</h2>
      <iframe
        title="Thomas Tells a Story"
        id="multi_iframe"
        src="https://www.podbean.com/media/player/multi?playlist=http%3A%2F%2Fplaylist.podbean.com%2F5158479%2Fplaylist_multi.xml&vjs=1&kdsowie31j4k1jlf913=372203c227412f100e43ef6448879c6f1b0a3716&size=430&skin=10&episode_list_bg=%23ffffff&bg_left=%23000000&bg_mid=%23470909&bg_right=%232a1844&auto=0&download=1&show_playlist_recent_number=10&pbad=1"
        scrolling="no"
        width="100%"
        height="430"
      />
    </div>
  </Layout>
);

export default IndexPage;
