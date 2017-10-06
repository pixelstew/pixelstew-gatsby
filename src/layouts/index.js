import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Logo from "../components/logo";
import Theme from "../components/pixelstewTheme";
import Twitter from "../components/twitter";
import GitHub from "../components/github";

import "./index.css";
import "prism-themes/themes/prism-duotone-space.css";

const Header = () => (
  <div
    style={{
      margin: "0 auto",
      padding: ".5rem 1.0875rem",
      maxWidth: "900px",
      position: "relative"
    }}
  >
    <Link to="/">
      <Logo theme={Theme} />
    </Link>
    <GitHub theme={Theme} />
    <Twitter theme={Theme} />
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <article
      style={{
        margin: "0 auto",
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </article>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
