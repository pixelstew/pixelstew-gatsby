import React from "react"
import Twitter from "../components/twitter";
import GitHub from "../components/github";
import Theme from "../components/pixelstewTheme"
import Link from "gatsby-link"
import Logo from "../components/logo"

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

export default Header