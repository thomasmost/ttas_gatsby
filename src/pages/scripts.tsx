import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";

const ScriptsPage = () => (
  <Layout zenMode={false}>
    <SEO
      title="About"
      keywords={[
        `scripts`,
        `podcast`,
        `storytelling`,
        `elandrid`,
        `thomas tells`
      ]}
    />
    <Navigation />
    <div className="page">
      <h2>Scripts</h2>
      <p>
        <em>Thomas Tells a Story</em> is designed to be an auditory experience.
        However, this story is for everyone.
        So whether audio simply doesn't capture your attention, or you happen to be deaf or hard of hearing,
        we will release all the episodes in their script format here.
      </p>
      <p>
        While we offer these completely free (just like the podcast),
        I would like to take this opportunity to humbly ask two things:
      </p>
      <p>
         <strong>1) That these scripts not be widely distributed.</strong>
         If you want to share <em>The Elandrid</em> with a friend,
         please direct them to this page instead, or better yet,
         recommend they give the podcast a listen on Spotify, Apple Podcasts, or wherever they tune in.
      </p>
      <p>
         <strong>2) If you have the means, we hope you'll consider a recommended donation of $10 USD for the series.</strong>
         You can make donations directly to our BitCoin or Ethereum addresses (below),
         or on <a href="https://www.buymeacoffee.com/thomastells">Buy Me a Coffee</a> with a traditional online payment.
      </p>

    </div>
  </Layout>
);

export default ScriptsPage;
