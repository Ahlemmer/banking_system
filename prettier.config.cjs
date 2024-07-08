/** @type {import("prettier").Config} */

const prettierConfig = require('../.prettierrc.js');

module.exports = {
  ...prettierConfig,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
