// webpack.config.js
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin-next')

module.exports = {
  // other options...
  module: {
    rules: [
      // ... other rules omitted
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    // ... Vue Loader plugin omitted
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new PrerenderSPAPlugin({
      // Required - Routes to render.
      routes: [ '/' ],
      headless: false,
      postProcess(context) {
        console.log("hi");
        // Remove /index.html from the output path if the dir name ends with a .html file extension.
        // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
        context.outputPath = path.join(__dirname, 'dist', "hi.html")
      }
      
      
    })

  ],
};
