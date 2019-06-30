module.exports = ({ config, mode }) => {
  // remove Storybooks default CSS rules and replace with functioning CSS modules setup
  config.module.rules.splice(2, 1, {
    test: /\.css$/,
    use: [
      {
        loader: "style-loader",
        options: { sourceMap: true }
      },
      {
        loader: "css-modules-typescript-loader",
        options: {
          mode: process.env.CI ? "verify" : "emit"
        }
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: {
            mode: "local",
            localIdentName: "[name]__[local]--[hash:base64:5]"
          }
        }
      }
    ]
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
