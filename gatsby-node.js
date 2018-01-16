const path = require("path");
const paginate = require("gatsby-paginate");

const createPostPages = (createPage, edges) => {
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  edges.forEach(({ node }, index) => {
    const prev = index === 0 ? false : edges[index - 1];
    const next = index === edges.length - 1 ? false : edges[index + 1];
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        prev: prev.node,
        next: next.node
      }
    });
  });
};

const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = [];
        }
        posts[tag].push(node);
      });
    }
  });

  createPage({
    path: "/tags",
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts).forEach(tagName => {
    const post = posts[tagName];
    createPage({
      path: `/tags/${tagName}`,
      component: tagTemplate,
      context: {
        posts,
        post,
        tag: tagName
      }
    });
  });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 200)
            html
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              tags
              image
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

    createTagPages(createPage, posts);
    paginate({
      edges: posts,
      createPage,
      pageTemplate: "./src/templates/paginatedPostList.js"
    });
    createPostPages(createPage, posts);
  });
};
