module.exports = {
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
    production: {
      plugins: ["transform-remove-console"],
    },
  },
};
