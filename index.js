const mainPattern = new RegExp(
  '^' +
    '(?:([\\d.]*\\d) *\\| *)?' +  // Optional number, followed by a pipe,
    '(.+) *' +                    // followed by a title,
  '\\n=+\\n' +                    // followed by a line of `=` signs.
  '\\n+' +                        // At least one blank line.
    '([^]*)' +                    // The song’s body,
  '\\n*$'                         // trimmed of trailing newlines.
);

module.exports = (input) => {
  const match = input.match(mainPattern);

  const body = match[3];
  const rawParts = body.split(/\n{3,}/);

  return {
    number: match[1],
    title: match[2],
    parts: rawParts,
  };
};
