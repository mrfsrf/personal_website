/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.CreatePages = ({ action : { createPage }}) => {
    createPage({
        path: "/no-data/",
        component: require.resolve("./src/components/no-data.js"),
    })
}