import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";

const AboutPage = () => (
  <Layout zenMode={false}>
    <SEO
      title="About"
      keywords={[
        `about`,
        `podcast`,
        `storytelling`,
        `elandrid`,
        `thomas tells`,
      ]}
    />
    <Navigation />
    <div className="page">
      <div className="page-contents">
        <h2>About</h2>
        <p>
          <em>Thomas Tells a Story</em> is a minimalist, long-form storytelling
          podcast.
        </p>
        <p>
          There is no music, and there are no sound effects. Instead, the show
          invites you to engage more fully in the 'shared hallucination' of the
          words.
        </p>
        <p>
          Season 2 is a claustrophobic fantasy about five adventurers seeking out
          a previously undiscovered holy site belonging to the lost gods of their world.
          Abandoned for centuries, they find it a haunted place. Their noble mission
          fast dissolving into a desperate game of survival, they search for answers
          in a mystic vale, removed from civilization by miles of icy tundra.
        </p>
        <p>
          Season 1 tells the story of Elandra Ramirez, a young First Arcanist of
          the United Star Systems Alliance. Sent across the galaxy to learn the
          truth about a household android that has purportedly begun practicing
          magic, she soon finds herself ensnared in a cultural and political
          upheaval that stretches to the furthest reaches of colonized space.
        </p>
        <p>
          "There's a state of mind that you enter when you're listening to a
          story; it's a state of passive acceptance, where you sit there and you
          get to make your own exciting movie. You get to watch it be built for
          you in front of you."
        </p>
        <p>
          The current story is called <em>The Oa Oliger.</em>
        </p>
        <h2>Credits</h2>
        <p>
          <em>Thomas Tells a Story</em> is written and created by Thomas
          Constantine Moore, and recorded live with a small 'studio audience' in
          his Brooklyn apartment.
        </p>
        <p>
          <em>The Oa Oliger</em> will feature the voice talents of five actors in the lead roles.
          The trailer was recorded with Harron Atkins, Molly Griggs, and Jeff Omura.
        </p>
        <p>This show exists today thanks to the following wonderful people.</p>
        <h3>Producers</h3>
        <p>Jaanelle Yee and Toro Adeyemi</p>
        <h3>Editing</h3>
        <p>Max Bernstein</p>
        <h3>Theme Music</h3>
        <p>Joe Mendick</p>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
