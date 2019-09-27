const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/masiuciszek/web-dev/webProjects/StyledComponets-Library/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/masiuciszek/web-dev/webProjects/StyledComponets-Library/src/pages/index.js")))
}

