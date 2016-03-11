const mainPattern = new RegExp(
  '^' +
    '(?:([\\d.]*\\d) *\\| *)?' +   // Optional number, followed by a pipe,
    '(.+) *' +                     // followed by a title,
  '\\n=+'                          // followed by a line of `=` signs.
);

module.exports = (input) => {
  const match = input.match(mainPattern);

  return {
    number: match[1],
    title: match[2],
  };
};
