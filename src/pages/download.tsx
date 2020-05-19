import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";
import EpisodeDownload from "../components/episode_download";

// import { useStaticQuery, graphql } from "gatsby";

const DonatePage = () => {
  // const data = useStaticQuery(graphql`
  //   query CloudinaryImage {
  //     allCloudinaryMedia {
  //       edges {
  //         node {
  //           secure_url
  //         }
  //       }
  //     }
  //   }
  // `);

  // console.log(JSON.stringify(data));
  // const coverE01 = data.cloudinaryMedia.secure_url;

  const episodes=[];
  // const episodes = data.allCloudinaryMedia.edges.map((img, i) => (
  //   console.log(img.node.tags) &&
  //   <EpisodeDownload
  //     key={i}
  //     image={img.node.secure_url}
  //     link={img.node.secure_url}
  //     title={"Episode 1: Promises"}
  //   />
  // ))

  return (
    <Layout zenMode={false}>
      <SEO
        title="About"
        keywords={[
          `donate`,
          `podcast`,
          `storytelling`,
          `elandrid`,
          `thomas tells`,
        ]}
      />
      <Navigation />
      <div className="page">
        <div className="page-contents">
          <h2>Download</h2>
          <p>
            Thank you for supporting our work by being a listener! Without you,
            this podcast would be altogether without purpose.
          </p>
          <p>
            If you would like to go above and beyond to support the show, you
            can leave a rating or a review, share it with your friends, and
            engage with us on Twitter or Reddit!
          </p>
          <p>
            If you're more of a reader, happen to be hearing-impaired, or simply
            want to immerse yourself in the story through a different medium, we
            are releasing the episodes as PDFs as well! We ask that you pay what
            you can to support commissioning cover art and producing more
            episodes of the podcast.
          </p>
          <p>
            You can to the project by visiting
            <a href="https://www.buymeacoffee.com/thomastells">
              {" "}
              buymeacoffee.com/thomastells
            </a>
            , or Paypal us directly at
            <a href="https://www.paypal.me/thomastells">
              {" "}
              paypal.me/thomastells
            </a>
            . Thanks!
          </p>
          <h2>
            <em>The Elandrid</em>
          </h2>
          <div style={{ display: "flex" }}>
            {episodes}
          </div>
          <div style={{ clear: "both" }} />
        </div>
      </div>
    </Layout>
  );
};

export default DonatePage;
