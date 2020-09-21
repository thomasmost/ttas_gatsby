import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";

const formStyles = {
  display: 'block',
  marginTop: '20px',
  maxWidth: '600px',
  margin: 'auto'
}

const questionStyles = {
  marginBottom: '20px'
}
const promptStyles = {
  display: 'block',
  fontWeight: 600,
  marginBottom: '20px'
}

const NextPage = () => (
  <Layout zenMode={false}>
    <SEO
      title="Success"
    />
    <Navigation />
    <div className="page">
      <div className="page-contents">
        <h2
          style={{
            margin: "0 0 2em 0"
          }}
        >
          Your choices have been recorded...
        </h2>
        <Link to="/">
          Return to Oa?
        </Link>
      </div>
    </div>
  </Layout>
);

export default NextPage;
