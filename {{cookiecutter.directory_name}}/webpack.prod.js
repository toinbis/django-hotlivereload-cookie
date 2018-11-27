const merge = require("webpack-merge");
const common = require("./webpack.common.js");
var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: ["./core/static/src/js/index.js"],
  output: {
    //path: path.resolve("./assets/bundles/"),
    path: path.resolve("./core/static/bundles/"),
    filename: "prod-[name]-[hash].js"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("./assets/bundles/", {}),
    //new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new BundleTracker({ filename: "./webpack-stats-prod.json" }),
    new MiniCssExtractPlugin({
      filename: "prod-style-[hash].css"
    })
  ]
});
