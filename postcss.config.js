module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 16,
      unitPrecision: 6,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 4,
      exclude: /node_modules/i,
    },
  },
};
