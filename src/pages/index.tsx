import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Title from "../images/the-oa-oliger-title.svg";
import Navigation from "../components/navigation";
import { votingOpen } from "../config";

const IndexPage = () => (
  <Layout zenMode={false}>
    <SEO
      title="The Oa Oliger"
      keywords={[`storytelling`, `elandrid`, `thomas tells`]}
    />
    <header>
      <Title />
      <div className="home-nav-wrapper">
        <Navigation home={true} />
      </div>
    </header>
    <div className="page">
      <h2>The last episode was published July 5th, 2022</h2>
      <p>
        Thomas Tells a Story was a long-form narrative podcast
        inspired by ancient traditions of storytelling.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
