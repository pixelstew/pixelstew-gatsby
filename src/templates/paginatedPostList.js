import React from "react";
import GatsbyLink from "gatsby-link";
import PostPreview from "../components/PostPreview";
import TagList from "../components/tagList";
import Theme from "../components/pixelstewTheme";
import Link from "gatsby-link";
import Config from "../../gatsby-config";

export default function PaginatedPostList({ pathContext }) {
  const { group, index, first, last } = pathContext;
  const config = config;
  return (
    <div>
      {first ?
        <h1>
          A website about websites. Posts by Rob Gilbert who makes yep... websites in foggy London town.
        </h1> :
        <h1>More posts...</h1>
      }

      <hr />
      <div className="blog-posts">
        {group.map(({ node: post }) => {
          return <PostPreview post={post} key={post.id} />;
        })}
      </div>
      {!first && <Link to={`/${index > 2 ? index - 1 : ""}`}>&larr; Previous</Link>}
      {!last && <Link to={`/${index + 1}`}>Next &rarr;</Link>}
    </div>
  );
}
