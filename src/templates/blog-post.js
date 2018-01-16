import GatsbyLink from "gatsby-link";
import Helmet from "react-helmet";
import React from "react";
import styled from "styled-components";

import NextPage from "../components/nextpage";
import theme from "../components/pixelstewTheme";
import TagList from "../components/tagList";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  const { next, prev } = pathContext;
  const SubHeading = styled.h4`
    margin-top: -2rem;
    font-weight: 500;
  `;
  return (
    <ReactCSSTransitionGroup
      transitionName="page-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      <div className="blog-post-container">
        <Helmet>
          <title>{`Pixesltew | ${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content="A website about websites. Words by Rob Gilbert who makes websites for people and companies in London."
          />
        </Helmet>
        <div className="blog-post">
          <h1 className="display">{post.frontmatter.title}</h1>
          <img src={post.frontmatter.image} alt="" />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <hr />
        <h3>{post.frontmatter.date}</h3>
        {post.frontmatter.tags && (
          <TagList list={post.frontmatter.tags || []} />
        )}
        <NextPage next={next} prev={prev} theme={theme} />
      </div>
    </ReactCSSTransitionGroup>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
        tags
      }
    }
  }
`;
