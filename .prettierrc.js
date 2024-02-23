module.exports = {
  trailingComma: "all",
  printWidth: 96,
  useTabs: true,
  arrowParens: "avoid",
  singleQuote: true,
  overrides: [
    {
      files: "*.css",
      options: {
        parser: "css",
      },
    },
  ],
};
