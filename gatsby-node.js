const path = require("path");

const createPagination = (createPage, edges) => {
  const paginationTemplate = path.resolve(`src/templates/paginatedPostList.js`);
  const paginateSize = 5;

  //Split posts into arrays of length equal to number posts on each page/paginateSize
  const groupedPages = edges
    .map((edge, index) => {
      return index % paginateSize === 0
        ? edges.slice(index, index + paginateSize)
        : null;
    })
    .filter(item => item);

  //Create new indexed route for each array
  groupedPages.forEach((group, index, groups) => {
    const last = index === groups.length - 1 ? true : false;
    return index === 0
      ? false
      : createPage({
          path: `/${index + 1}`,
          component: paginationTemplate,
          context: {
            group,
            // Avoid showing 'Next' link if this is the last page
            last,
            index: index + 1
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
              tags
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
    createPagination(createPage, posts);

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
