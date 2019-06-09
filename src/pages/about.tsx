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
        `thomas tells`
      ]}
    />
    <Navigation />
    <div className="page">
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
        Season 1 tells the story of Elandra Ramirez, a young First
        Arcanist of the United Star Systems Alliance. Sent across the galaxy to
        learn the truth about a household android that has purportedly begun
        practicing magic, she soon finds herself ensnared in a cultural and
        political upheaval that stretches to the furthest reaches of colonized
        space.
      </p>
      <p>
        "There's a state of mind that you enter when you're listening to
        a story; it's a state of passive acceptance, where you sit there and you
        get to make your own exciting movie. You get to watch it be built for
        you in front of you."
      </p>
      <p>
        This story is called{" "}
        <em>The Elandrid.</em>
      </p>
    </div>
  </Layout>
);

export default AboutPage;