import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Logo from "../components/logo";
import Theme from "../components/pixelstewTheme";
import Twitter from "../components/twitter";
import GitHub from "../components/github";
import Header from "../components/header"
import Footer from "../components/footer"

import "./index.css";
import "prism-themes/themes/prism-duotone-space.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Pixesltew"
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
    <Footer title='Pixelstew' />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
