/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = [
  {
    entry: "./src/index.tsx",
    mode: "development",
    target: "web",
    output: {
      path: path.resolve(__dirname, "build/"),
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv({
        systemvars: true,
      }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".jsx"],
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, use: "ts-loader", exclude: /node_modules/ },
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: ["babel-plugin-styled-components"],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|ttf|woff2)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
  },
];
