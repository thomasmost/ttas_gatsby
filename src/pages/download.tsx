import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";
import EpisodeDownload from "../components/episode_download";
import PaypalIcon from "../images/paypal.png";


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

  const episodes=[
    (
      <EpisodeDownload
        key={1}
        title="Episode 1: Promises"
        image="https://res.cloudinary.com/thomas-moore/image/upload/v1589909540/gatsby-source-ttas/TheElandrid_S1E01_yeryui.png"
        link="https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/Elandrid/TheElandrid_S1E01.pdf"
        artist="Jabari Weathers"
        artistLink="http://jmwillustration.com/"
        />
    ),
    (
      <EpisodeDownload
        key={2}
        title="Episode 2: Komensorcas"
        image="https://res.cloudinary.com/thomas-moore/image/upload/v1589909540/gatsby-source-ttas/TheElandrid_S1E02_au0tw4.png"
        link="https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/Elandrid/TheElandrid_S1E02.pdf"
        artist="Jay Bendt"
        artistLink="http://jaybendt.com/"
        />
    )
  ];
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
        title="Download"
        keywords={[
          `download`,
          `pdf`,
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
            If you're more of a reader, happen to be hearing-impaired, or simply
            want to immerse yourself in the story through a different medium, we
            have started releasing the episodes as PDFs! We ask that you pay what
            you can to support commissioning cover art and producing more
            episodes of the podcast.
          </p>
          <p>
            <strong>
              We suggest a donation of $5,
            </strong>
            <span> but if you're not in a position to make a donation, please read them anyway!</span>
          </p>
          <p>
            You can download the latest 'print editions' with the latest (amazing!) original art below. And you can donate to the project by visiting our
            <a href="https://www.buymeacoffee.com/thomastells">
              {" "}
              BMC
            </a>
            , Paypal us directly at
            <a href="https://www.paypal.me/thomastells">
              {" "}
              paypal.me/thomastells
            </a>
            , or Venmo @tcmoore with a note that says, "Elandrid Donation." Thanks!
          </p>
          <div className="badges">
            <div className="bmc" dangerouslySetInnerHTML={{__html: `
              <style>.bmc-button img{height: 34px !important;width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 15px 7px 10px !important;line-height: 35px !important;height:51px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#5F7FFF !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 15px 7px 10px !important;font-size: 22px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/thomastells"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px;font-size:28px !important;">Buy me a coffee</span></a>
              `}} 
            />
            <div className="paypal">
              <a href="https://www.paypal.me/thomastells">
                <img src={PaypalIcon} />
              </a>
            </div>
          </div>
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
