const path = require("path");
// const faviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /index\.html/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "index.html",
            },
          },
        ],
      },
      {
        test: /favicon*/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "favicon.ico",
            },
          },
        ],
      },
    ],
  },
  // plugins: [
  //   new faviconsWebpackPlugin(path.join(__dirname, "src", "favicon.png")),
  // ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    compress: true,
    port: 3000,
  },
};
