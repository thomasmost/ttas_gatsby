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
  marginBottom: '20px'
}

const renderVotingForm = () => (
  <div className="page-contents">
  <h2>What happens next?</h2>
  <p>
    Voting is now open for Episode 3 of <em>The Oa Oliger</em>. Choose carefully... lives may hang in the balance.
  </p>
  <form name="rmm_episode_3" netlify method="POST" data-netlify="true" style={formStyles} action="/success">
    <input type="hidden" name="rmm_episode_3" value="rmm_episode_3" />
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Enter your email:</label>
      <p>
        <label>
          <input style={{fontFamily: '"Tienne", serif', fontSize: '1em', width: '100%', padding: '5px'}} required type="email" name="email" placeholder="(We won't spam you, we promise)"/>
        </label>
      </p>
    </div>
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Should Yochi protect the horses or the oxen?</label>
      <p>
        <label>
          <input type="radio" value="Horses" name="e3_protect"/>
          Horses
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="Oxen" name="e3_protect"/>
          Oxen
        </label>
      </p>
    </div>
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Should Yochi sing a mournful song or a victory carol?</label>
      <p>
        <label>
          <input type="radio" value="Mournful" name="e3_song"/>
          Mournful Song
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="Victory" name="e3_song"/>
          Victory Carol
        </label>
      </p>
    </div>
    <div className="rmm_question" style={questionStyles}>
      <label className="rmm_question_prompt" style={promptStyles}>Should Yochi try to speak to the Red Mouthed Man, or attack him?</label>
      <p>
        <label>
          <input type="radio" value="Speak" name="e3_engage_rmm"/>
          Speak
        </label>
      </p>
      <p>
        <label>
          <input type="radio" value="Attack" name="e3_engage_rmm"/>
          Attack
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
    Voting is now closed for Episode 3 of <em>The Oa Oliger</em>.
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
