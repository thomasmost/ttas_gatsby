import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../components/navigation";
import { votingOpen } from "../config";

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
  marginBottom: '20px',
  lineHeight: '1.5em',
}

const renderVotingForm = () => (
  <div className="page-contents">
  <h2>What happens next?</h2>
  <p>
    Voting is now open for Episode 7 of <em>The Oa Oliger</em>. Choose carefully... lives may hang in the balance.
  </p>
  <form name="rmm_episode_6" netlify method="POST" data-netlify="true" style={formStyles} action="/success">
    <input type="hidden" name="rmm_episode_6" value="rmm_episode_6" />
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Enter your email:</label>
      <p>
        <label>
          <input style={{fontFamily: '"Tienne", serif', fontSize: '1em', width: '100%', padding: '5px'}} required type="email" name="email" placeholder="(We won't spam you, we promise)"/>
        </label>
      </p>
    </div>
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Should Yochi kill Gemujin?</label>
      <p>
        <label>
          <input type="radio" value="yes1" name="e7_kill"/>
          Yes
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="yes2" name="e7_kill"/>
          Yes
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="yes3" name="e7_kill"/>
          Yes
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="yes4" name="e7_kill"/>
          Yes
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="yes5" name="e7_kill"/>
          Yes
        </label>
      </p>
    </div>
    <p>
      <button style={{fontFamily: '"Tienne", serif', fontSize: '1em', cursor: 'pointer'}} type="submit">Submit</button>
    </p>
  </form>
</div>
)

const renderVotingClosed = () => (
  <div className="page-contents">
  <h2>What happens next?</h2>
  <p>
    Voting is now closed for Episode 7 of <em>The Oa Oliger</em>.
  </p>
  <p>
    The light still shines. The wind still blows.
    Come back after next month's episode and make your voice known.
  </p>
</div>
)

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
      {votingOpen ? renderVotingForm() : renderVotingClosed()}
    </div>
  </Layout>
);

export default NextPage;
