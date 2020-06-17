const path = require('path');

module.exports = {
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
  ],
  "alias": {
    "@": path.resolve(__dirname, 'src/')
  }
}