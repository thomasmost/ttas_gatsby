import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";

const AboutPage = () => (
  <Layout zenMode={false}>
    <SEO
      title="Credits"
      keywords={[
        `credits`,
        `podcast`,
        `storytelling`,
        `elandrid`,
        `thomas tells`
      ]}
    />
    <Navigation />
    <div className="page">
      <h2>Credits</h2>
      <p>
        <em>Thomas Tells a Story</em> is written and created by Thomas
        Constantine Moore, and recorded live with a small 'studio audience' in
        his Brooklyn apartment.
      </p>
      <p>This show exists today thanks to the following wonderful people.</p>
      <h3>Producers</h3>
      <p>Jaanelle Yee and Toro Adeyemi</p>
      <h3>Editing</h3>
      <p>Max Bernstein</p>
      <h3>Theme Music</h3>
      <p>Joe Mendick</p>
      <h3>Special Thanks</h3>
      <p>Camille Sojit, Chris Garber, Olivia Vadnais</p>
    </div>
  </Layout>
);

export default AboutPage;
