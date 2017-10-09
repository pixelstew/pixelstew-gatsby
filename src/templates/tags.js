import React from "react";
import GatsbyLink from "gatsby-link";
import PostPreview from "../components/PostPreview";
import TagList from "../components/tagList";
import Theme from "../components/pixelstewTheme";

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;
  //const Tags = posts.forEach;
  if (tag) {
    return (
      <div>
        <h1>
          {post.length} post{post.length === 1 ? "" : "s"} tagged with{" "}
          <span style={{ color: Theme.secondary }}>{tag}</span>
        </h1>
        {post.map(post => {
          return <PostPreview post={post} key={post.id} />;
        })}
        <GatsbyLink to="/tags">All tags</GatsbyLink>
      </div>
    );
  }
  return (
    <div>
      <h1>Tags</h1>
      <TagList list={Object.keys(posts) || []} />
      <GatsbyLink to="/">All posts</GatsbyLink>
    </div>
  );
}
