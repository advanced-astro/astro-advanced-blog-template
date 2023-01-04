const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
      minimumVendorImplementations: 0,
    }),
    require("autoprefixer"),
  ],
};
