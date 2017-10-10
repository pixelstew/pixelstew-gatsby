import React from "react"
import styled from "styled-components"
import Theme from './pixelstewTheme'
import GitHub from "./github"
import Twitter from "./twitter"

const Footer = (props) => {
  return (
    <div className={props.className}>
      <div className="container">
        <p>&copy; {props.title} - a website about websites.</p>
        <GitHub theme={Theme} container="footer" />
        <Twitter theme={Theme} container="footer" />
      </div>
    </div>
  )
}

const MasterFooter = styled(Footer) `
  background-color: ${Theme.primary};
  padding: 2.5rem 0 2rem;
  .container{
    position: relative;
    max-width: ${Theme.row};
    margin: 0 auto;
    color: #fff;
  }
  svg{
    fill: #fff;
  }
`

export default MasterFooter