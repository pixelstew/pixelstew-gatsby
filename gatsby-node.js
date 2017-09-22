const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? false : posts[index - 1];
      const next = index === posts.length - 1 ? false : posts[index + 1];
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev: prev.node,
          next: next.node
        } // additional data can be passed via context
      });
    });
  });
};
