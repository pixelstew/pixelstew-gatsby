const path = require("path");

const createPostPages = (createPage, edges) => {
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? false : posts[index - 1];
    const next = index === posts.length - 1 ? false : posts[index + 1];
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        prev: prev.node,
        next: next.node
      }
    });
  });
}

const createPaginationPages = (createPage, edges) => {
  const paginationTemplate = path.resolve(`src/templates/paginatedPostList.js`);
  const paginateSize = 1;

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
    // create route '/' for homepage and incremented route for subsequent pages
    const pageIndex = index === 0 ? '' : index + 1
    const paginationRoute = `/${pageIndex}`
    // Avoid showing 'Previous' link on first page - passed to context
    const first = index === 0 ? true : false;
    // Avoid showing 'Next' link if this is the last page - passed to context
    const last = index === groups.length - 1 && !first ? true : false;
    return createPage({
      path: paginationRoute,
      component: paginationTemplate,
      context: {
        group,
        first,
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
      createPaginationPages(createPage, posts);
      createPostPages(createPage, posts);
    });
};
