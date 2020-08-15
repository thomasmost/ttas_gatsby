import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Title from "../images/the-oa-oliger-title.svg";
import Navigation from "../components/navigation";

const IndexPage = () => (
  <Layout zenMode={false}>
    <SEO
      title="The Elandrid"
      keywords={[`storytelling`, `elandrid`, `thomas tells`]}
    />
    <header>
      <Title />
      <div className="home-nav-wrapper">
        <Navigation home={true} />
      </div>
    </header>
    <div className="page">
      <h2>Season 2 arriving September 15th...</h2>
      <p>
        Thomas Tells a Story is a long-form narrative podcast
        inspired by ancient traditions of storytelling.
      </p>
      <p>
        Season 2 will be a claustrophobic middle fantasy, following five adventurers on a quest to find the lost gods of their world:
        Gemujin, an itinerant preacher, mountaineer, and a True Believer...
        Katu, a clerical field researcher and skeptic...
        Narrasset, a Thar warrior and scout sent to accompany the party from the nearest city...
        the Cartographer, a mysterious and taciturn mapmaker who has paid his way...
        and Yochi the Wagon Boy, a peasant ox groom who soon discovers how profoundly out of his depth he is.
      </p>
      <h2>Available wherever you get your podcasts...</h2>
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
