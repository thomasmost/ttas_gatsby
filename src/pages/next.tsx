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
    Voting is now open for Episode 4 of <em>The Oa Oliger</em>. Choose carefully... lives may hang in the balance.
  </p>
  <form name="rmm_episode_4" netlify method="POST" data-netlify="true" style={formStyles} action="/success">
    <input type="hidden" name="rmm_episode_4" value="rmm_episode_4" />
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Enter your email:</label>
      <p>
        <label>
          <input style={{fontFamily: '"Tienne", serif', fontSize: '1em', width: '100%', padding: '5px'}} required type="email" name="email" placeholder="(We won't spam you, we promise)"/>
        </label>
      </p>
    </div>
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Should Yochi ask Gemujin, Katu, or The Cartographer for help?</label>
      <p>
        <label>
          <input type="radio" value="Gemujin" name="e4_help"/>
          Gemujin
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="Katu" name="e4_help"/>
          Katu
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="The Cartographer" name="e4_help"/>
          The Cartographer
        </label>
      </p>
    </div>
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Should Yochi tell everyone about the Red Mouthed Man, or just someone he trusts?</label>
      <p>
        <label>
          <input type="radio" value="Everyone" name="e4_tell"/>
          Everyone
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="Someone he trusts" name="e4_tell"/>
          Someone he trusts
        </label>
      </p>
    </div>
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>What should Yochi do with the strange rock he finds?</label>
      <p>
        <label>
          <input type="radio" value="Keep" name="e4_strange_rock"/>
          Keep it for himself
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="Keep" name="e4_strange_rock"/>
          Keep it for himself
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
    Voting is now closed for Episode 4 of <em>The Oa Oliger</em>.
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
