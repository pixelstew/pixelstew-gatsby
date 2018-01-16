import React from "react";
import GatsbyLink from "gatsby-link";
import PostPreview from "../components/PostPreview";
import TagList from "../components/tagList";
import Theme from "../components/pixelstewTheme";
import Helmet from "react-helmet";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <ReactCSSTransitionGroup
        transitionName="page-transition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <Helmet>
          <title>{`Pixesltew | tags - ${tag}`}</title>
          <meta
            name="description"
            content="A website about websites. Words by Rob Gilbert who makes websites for people and companies in London."
          />
        </Helmet>
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
      </ReactCSSTransitionGroup>
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
