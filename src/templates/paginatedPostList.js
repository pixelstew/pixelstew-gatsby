import React from "react";
import GatsbyLink from "gatsby-link";
import PostPreview from "../components/PostPreview";
import TagList from "../components/tagList";
import Theme from "../components/pixelstewTheme";
import Config from "../../gatsby-config";
import styled from "styled-components"

export default function PaginatedPostList({ pathContext }) {
  const Link = styled(GatsbyLink) `
    text-decoration-skip: ink;
    margin: 3rem 0;
    color: ${Theme.secondary};
    &.prev {
      float: left;
    }
    &.next {
      float: right;
    }
  `;
  const { group, index, first, last } = pathContext;
  const config = config;
  return (
    <div>
      {first ?
        <h1>
          A website about websites.<br />Words by Rob Gilbert who makes websites for people and companies in London.
        </h1> :
        <h1>More posts...</h1>
      }

      <hr />
      <div className="blog-posts">
        {group.map(({ node: post }) => {
          return <PostPreview post={post} key={post.id} />;
        })}
      </div>
      {!first && <Link className="prev" to={`/${index > 2 ? index - 1 : ""}`}>&larr; Previous</Link>}
      {!last && <Link className="next" to={`/${index + 1}`}>Next &rarr;</Link>}
    </div>
  );
}
