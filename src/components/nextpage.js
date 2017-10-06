import React from "react";
import GatsbyLink from "gatsby-link";
import styled from "styled-components";

const NextPage = props => {
  const Link = styled(GatsbyLink)`
    text-decoration-skip: ink;
    margin: 3rem 0;
    color: ${props.theme.secondary};
    &.prev {
      float: left;
    }
    &.next {
      float: right;
    }
  `;

  return (
    <div className="navigation">
      {props.prev && (
        <Link className="link prev" to={props.prev.frontmatter.path}>
          &larr; Previous post
        </Link>
      )}
      {props.next && (
        <Link className="link next" to={props.next.frontmatter.path}>
          Next post &rarr;
        </Link>
      )}
    </div>
  );
};

export default NextPage;
