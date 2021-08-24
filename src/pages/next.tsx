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
    Voting is now open for Episode 6 of <em>The Oa Oliger</em>. Choose carefully... lives may hang in the balance.
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
      <label className="rmm_question_prompt" style={promptStyles}>Should Yochi arm himself with a sword or a spear?</label>
      <p>
        <label>
          <input type="radio" value="A sword" name="e6_weapon"/>
          A sword
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="A spear" name="e6_weapon"/>
          A spear
        </label>
      </p>
    </div>
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Should Yochi show the strange rock to Gatazar or dispose of it?</label>
      <p>
        <label>
          <input type="radio" value="Gatazar" name="e6_rock"/>
          Show it to Gatazar
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="Waterfall" name="e6_rock"/>
          Throw it into the waterfall
        </label>
      </p>
    </div>
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Should Gemujin face the Red Mouthed Man?</label>
      <p>
        <label>
          <input type="radio" value="Face him" name="e6_gemujin_rmm"/>
          Face him
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="Flee from him" name="e6_gemujin_rmm"/>
          Flee from him
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
    Voting is now closed for Episode 6 of <em>The Oa Oliger</em>.
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
