import React from "react";
// import { Link } from "gatsby";

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
      title="Next"
      keywords={[
        `vote`,
        `red mouthed man`,
        `podcast`,
        `storytelling`,
        `oa oliger`,
        `thomas tells`,
      ]}
    />
    <Navigation />
    <div className="page">
      <div className="page-contents">
        <h2>What happens next?</h2>
        <p>
          Voting is now open for Episode 2 of <em>The Oa Oliger</em>. Choose carefully... lives may hang in the balance.
        </p>
        <form name="rmm_episode_2" netlify style={formStyles}>
          <div className="rmm_question" style={questionStyles}>
            <label className="rmm_question_prompt" style={promptStyles}>Should Yochi go hunting with the Cartographer or with Gemujin?</label>
            <p>
              <label>
                <input type="radio" value="Cartographer" name="hunting"/>
                The Cartographer
              </label>
            </p>
            <p>
              <label>
                <input type="radio" value="Gemujin" name="hunting"/>
                Gemujin
              </label>
            </p>
          </div>
          <div className="rmm_question" style={questionStyles}>
            <label className="rmm_question_prompt" style={promptStyles}>Should Yochi steal a look at the Cartographer’s journal while he’s sleeping?</label>
            <p>
              <label>
                <input type="radio" value="Yes" name="cartographers_journal"/>
                Yes
              </label>
            </p>
            <p>
              <label>
                <input type="radio" value="No" name="cartographers_journal"/>
                No
              </label>
            </p>
          </div>
          <div className="rmm_question" style={questionStyles}>
            <label className="rmm_question_prompt" style={promptStyles}>Should Yochi ask Narrasset what happened to her herd?</label>
            <p>
              <label>
                <input type="radio" value="Yes" name="narrassets_herd"/>
                Yes
              </label>
            </p>
            <p>
              <label>
                <input type="radio" value="No" name="narrassets_herd"/>
                No
              </label>
            </p>
          </div>
          <p>
            <button style={{fontFamily: '"Tienne", serif', fontSize: '1em', cursor: 'pointer'}} type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </Layout>
);

export default NextPage;
