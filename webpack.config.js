const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
// const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = ({ development }) => ({
  mode: development ? "development" : "production",
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].[contenthash].js",
    assetModuleFilename: "asset/[hash][ext][query]",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: development && "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new ESLintPlugin({
      extensions: ["js"],
      exclude: ["/node_modules/", "/bower_components/", "/dist"],
      emitWarning: false,
    }),
    // new ImageminWebpWebpackPlugin({
    //   config: [
    //     {
    //       test: /\.(jpe?g|png)/,
    //       options: {
    //         quality: 75,
    //       },
    //     },
    //   ],
    //   overrideExtension: true,
    //   detailedLogs: false,
    //   silent: false,
    //   strict: true,
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          development ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      //   {
      //     test: /\.m?js$/,
      //     exclude: /(node_modules|bower_components)/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ["@babel/preset-env"],
      //       },
      //     },
      //   },
    ],
  },
  //   optimization: {
  //     splitChunks: {
  //       chunks: "all",
  //     },
  //   },
});
