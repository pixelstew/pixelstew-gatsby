import GatsbyLink from "gatsby-link";
import Helmet from "react-helmet";
import React from "react";
import styled from "styled-components";

import NextPage from "../components/nextpage";
import theme from "../components/pixelstewTheme";
import TagList from "../components/tagList";

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  const { next, prev } = pathContext;
  return (
    <div className="blog-post-container">
      <Helmet title={`Pixesltew - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <TagList list={post.frontmatter.tags || []} />
      <NextPage next={next} prev={prev} theme={theme} />
    </div>
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
        tags
      }
    }
  }
`;
