const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:8000/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        exposes: {
          './HelloWorld': './src/components/HelloWorld',
        },
      }),
    ],
  },
  devServer: {
    port: 8000,
  },
};
