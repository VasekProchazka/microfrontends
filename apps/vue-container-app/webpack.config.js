const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
  },

  resolve: {
    extensions: [".vue", ".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "vuehost",
      filename: "remoteEntry.js",
      remotes: {
        app1: "app1@http://localhost:8083/remoteEntry.js",
      },
      exposes: {},
      // shared: {
      //   ...deps,
      //   vue: {
      //     eager: true,
      //     singleton: true,
      //     requiredVersion: deps.vue,
      //     strictVersion: true,
      //   },
      // },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
