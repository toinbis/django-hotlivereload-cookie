const merge = require("webpack-merge");
const common = require("./webpack.common.js");
var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
//var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./core/static/src/js/index.js"
  ],
  //devtool: "inline-source-map",
  //devServer: {
  //  contentBase: "./dist"
  //}
  output: {
    path: path.resolve("./assets/bundles/"),
    filename: "[name]-[hash].js",
    //filename: "[name].js",
    publicPath: "http://localhost:3000/assets/bundles/"
  },

  plugins: [
    new CleanWebpackPlugin("./assets/bundles/", {}),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new BundleTracker({ filename: "./webpack-stats.json" })
    // new MiniCssExtractPlugin({
    //   filename: "style-[hash].css"
    // })
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          //"MiniCssExtractPlugin.loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
});
