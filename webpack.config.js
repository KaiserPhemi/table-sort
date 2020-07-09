// dependencies
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");

// main configuration
module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  entry: { app: "./src/index.tsx" },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Form Table",
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
      minify: true,
    }),
    new WebpackMd5Hash(),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.(scss|css)$/,
        loader: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
