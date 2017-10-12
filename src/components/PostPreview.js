import React from "react";
import GatsbyLink from "gatsby-link";
import styled from "styled-components";
import Link from "gatsby-link";

const Preview = props => {
  return (
    <div className={props.className}>
      <div className="flex-container">
        <div className="post-image">
          <Link to={props.post.frontmatter.path}>
            <picture className="intrinsic intrinsic--16x9">
              <source
                media="(min-width: 550px)"
                srcSet={props.post.frontmatter.image}
              />
              <img
                className="intrinsic-item"
                srcSet={props.post.frontmatter.image}
                alt={props.post.frontmatter.title}
              />
            </picture>
          </Link>
        </div>
        <div className="post-title">
          <h2>
            <Link to={props.post.frontmatter.path}>
              {props.post.frontmatter.title}
            </Link>
          </h2>
          <h4>{props.post.frontmatter.date}</h4>
        </div>
      </div>
      <p>
        {props.post.excerpt}
        <Link to={props.post.frontmatter.path}>read more</Link>
      </p>
    </div>
  );
};

const PostPreview = styled(Preview)`
  margin-bottom: 5rem;
  .flex-container {
    display: flex;
    margin-bottom: 1rem;
  }
  h2 {
    margin: -0.8rem 0 -1em;
  }
  h4 {
    margin-top: 1rem;
  }
  .post-image {
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 110px;
    &:hover {
      opacity: 0.7;
    }
  }
  .post-title {
    flex-grow: 3;
    padding-left: 0.5rem;
  }
  .intrinsic {
    display: block;

    position: relative;
    height: 0;
    width: 100%;
    padding-top: 100%;

    background: #f0f0f0;

    &.intrinsic--square {
      padding-top: 100%;
    }

    &.intrinsic--4x3 {
      padding-top: 75%;
    }

    &.intrinsic--16x9 {
      padding-top: 56.25%;
    }

    .intrinsic-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default PostPreview;
