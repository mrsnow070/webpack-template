const path = require("path");
const HTMLWebpackPluging = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  context: path.resolve(__dirname, "src"),
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", "json"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HTMLWebpackPluging({
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,

          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
      ,
      {
        test: /\.(png|jpg|gif|svg)$/gi,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/gi,
        use: ["file-loader"],
      },
      {
        test: /\.xml$/,
        use: [],
      },
    ],
  },
  devServer: {
    port: 3000,
    overlay: true,
    open: true,
  },
};
