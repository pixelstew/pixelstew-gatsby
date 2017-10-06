import React from "react";
import Helmet from "react-helmet";
import PostPreview from "../components/PostPreview";

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1>
        A website about websites. Posts by Rob Gilbert who makes yep... websites
        in foggy London town.
      </h1>
      <hr />
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return <PostPreview post={post} key={post.id} />;
          })}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image
            tags
          }
        }
      }
    }
  }
`;
