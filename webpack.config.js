const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {

  resolve: {
    extensions: [".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
  },

  output: {
    uniqueName: 'remoteApp',
    publicPath: 'auto'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  optimization: { runtimeChunk: false },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry-legacy.js",
      remotes: {},
      library: { type: 'var', name: 'remoteApp' },
      exposes: {
        "./Header": "./src/Header.vue",
      },
      shared: require('./package.json').dependencies
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
