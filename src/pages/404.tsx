import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout zenMode={false}>
    <SEO title="404: Not found" />
    <div className="page">
      <h2
        style={{
          margin: "0 0 2em 0"
        }}
      >
        In space, no one can hear you 404...
      </h2>
      <h3
        style={{
          textAlign: "center",
          lineHeight: "1.5em"
        }}
      >
        There's nothing here. Well, nothing besides dark matter and cosmic
        radiation.
      </h3>
    </div>
  </Layout>
);

export default NotFoundPage;
