module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto", // This helps in resolving any conflicts with Webpack 5
      },
      // other loaders
    ],
  },
};
