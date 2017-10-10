import React from "react"
import Twitter from "../components/twitter";
import GitHub from "../components/github";
import Theme from "../components/pixelstewTheme"
import Link from "gatsby-link"
import Logo from "../components/logo"
import styled from "styled-components"

const Header = props => (
  <div className={props.className}>
    <Link to="/">
      <Logo theme={Theme} />
    </Link>
    <GitHub theme={Theme} />
    <Twitter theme={Theme} />
  </div>
);

const MastHeader = styled(Header) `
  margin: 0 auto;
  padding: .5rem 1.0875rem;
  max-width: 900px;
  position: relative;
`

export default MastHeader