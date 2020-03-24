import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOut from "../components/CallOut"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tech and creative professionals: The world needs your help.</h1>
    <CallOut>Last updated: 24nd March 2020</CallOut>

    <p>
      There isn’t a person in the world that hasn’t been affected by the spread
      of the COVID-19 known as the coronavirus. It has resulted in the World
      Health Organization classifying it as a global pandemic, having a
      devastating social and economic impact.
    </p>
    <p>
      Governments and health services around the world are struggling to cope
      with the spread of the disease. This has led to complete lock-down in some
      countries and others have introduced social distancing and self-isolation
      measures, all in an attempt to "flatten the curve".
    </p>
    <h2>The sobering reality</h2>
    <p>
      According to the{" "}
      <a href="https://www.nytimes.com/article/coronavirus-timeline.html">
        New York Times
      </a>{" "}
      the first publicly reported death was on the 1st March 2020 and at the
      time of writing the death toll has since risen to{" "}
      <a href="https://www.worldometers.info/coronavirus/coronavirus-death-toll/">
        17,147
      </a>{" "}
      with over{" "}
      <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
        300,000 confirmed cases and it is only accelerating.
      </a>
    </p>
    <hr />

    <h2>What is Hack COVID-19?</h2>
    <p>
      This is the first time in our history we’re able to use technology to not
      only slow, but also stop and even eradicate a virus that has caused a
      worldwide pandemic. By using technology to work from home, hold virtual
      meetings, access remote servers, facilitate distribution of supplies to
      name a few, we’re in a strong position to fight back against the virus,
      stopping it in it’s tracks and contributing to its demise.
    </p>
    <p>
      Hack COVID-19 has been created to bring developers across the world
      together to collaborate and create solutions that can help support the
      global community in our fight against the coronavirus. In China, it’s been
      reported that tech has been at the forefront of the fight and emerging
      technologies have been making a valuable impact.
    </p>
    <p>
      The medical community is doing their part to support the sick and
      vulnerable, and we in the tech industry need to do ours. We have the power
      to not only build solutions that can help people in need, but really make
      a difference in peoples lives.
    </p>
    <p>
      The fact is our communities need us. A nurse, a doctor, a vulnerable
      person or a person in self-isolation – everyone is affected by this and
      mental and physical wellbeing can be adversely affected too. We can
      develop solutions that can solve problems that, until COVID-19, weren’t
      even on the radar.
    </p>
    <hr />
    <h2>How can I get involved?</h2>
    <h3>Events</h3>
    <p>
      We are holding online events in the coming weeks that will give
      contributors the opportunity to work together and build solutions that
      help support the world in its time of need. For the most up to date
      information check out the <Link to="/events/">events</Link> pages.
    </p>
    <h3>Join the conversation</h3>
    <p>
      If you'd like to share ideas and discuss what you're working on please
      join the{" "}
      <a href="https://join.slack.com/t/hackcovid-19/shared_invite/zt-ctt76nqr-dX2e2j6~f1o4aIBQq9tJPw">
        slack channel
      </a>
      . We will be holding a weekly meeting at 14:00 - 15:00 where contributers
      can discuss the current situation and things they are working on.
    </p>
    <h2>Want to see what's been built?</h2>
    <p>
      As more and more projects are released they will be added to the{" "}
      <Link to="/resources/">resources</Link>
    </p>
  </Layout>
)

export default IndexPage
