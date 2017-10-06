import React from "react";
import styled from "styled-components";
import Theme from "./pixelstewTheme";
import Link from "gatsby-link";

const Tag = props => {
  return (
    <Link to={`/tags/${props.tag}`} className={props.className}>
      {props.tag}
    </Link>
  );
};

const ThisTag = styled(Tag)`
  transition: background ${Theme.transition} ease;
  background: ${Theme.secondary};
  text-decoration: none;
  font-weight: 300;
  padding: 11px 15px;
  border: 2px solid ${Theme.secondary};
  border-radius: 15px;
  display: inline-block;
  color: #fff;
  font-size: 0.8rem;
  margin: 0 0.5rem 0.5rem 0;
  &:hover,
  &:active {
    background: none;
    color: ${Theme.secondary};
  }
  &:active {
    transform: ${Theme.scale};
  }
`;

export default ThisTag;
