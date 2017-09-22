import React from "react";
import Link from "gatsby-link";

const NextPage = () => {
  return (
    <div className="navigation">
      {prev && (
        <Link className="link prev" to={prev.frontmatter.path}>
          <BackIcon /> {prev.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link className="link next" to={next.frontmatter.path}>
          {next.frontmatter.title} <ForwardIcon />
        </Link>
      )}
    </div>
  );
};
