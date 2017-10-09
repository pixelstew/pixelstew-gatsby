import React from "react";
import Helmet from "react-helmet";
import PostPreview from "../components/PostPreview";
import Link from "gatsby-link";
import config from "../config";

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const paginate = 5;
  return (
    <div>
      <h1>
        A website about websites. Posts by Rob Gilbert who makes yep... websites
        in foggy London town.
      </h1>
      <hr />
      <div className="blog-posts">
        {posts.map(({ node: post }, index) => {
          return index < paginate ? (
            <PostPreview post={post} key={post.id} />
          ) : null;
        })}
      </div>
      {posts.length > paginate && <Link to="/2">Next &rarr;</Link>}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
