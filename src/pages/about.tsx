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
          Constantine Moore.
        </p>
        <p>
          <em>The Oa Oliger</em> features the following voice talents:
        </p>
        <p>
        <h3>Yochi</h3>
        <p>Harron Atkins</p>
        <h3>Gemujin</h3>
        <p>Molly Griggs</p>
        <h3>Katu</h3>
        <p>Jeffrey Omura</p>
        <h3>Narrasset</h3>
        <p>Alexis Floyd</p>
        <h3>The Cartographer</h3>
        <p>Heath Saunders</p>
        </p>
        <p>Our theme music is by Joe Mendick. You can listen to his solo work on his <a target="_blank" href="https://soundcloud.com/joemendick">Soundcloud</a>.</p>
        <p>Season 1 was recorded live with a small 'studio audience' in
          Thomas's Brooklyn apartment, produced by Jaanelle Yee and Toro Adeyemi, and edited by Max Bernstein.</p>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
