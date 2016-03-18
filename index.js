const mainPattern = new RegExp(
  '^' +
    '(?:([\\d.]*\\d) *\\| *)?' +  // Optional number, followed by a pipe,
    '(.+) *' +                    // followed by a title,
  '\\n=+\\n' +                    // followed by a line of `=` signs.
  '\\n+' +                        // At least one blank line.
    '([^]*?)' +                   // The song’s body,
  '\\n*$'                         // trimmed of trailing newlines.
);

module.exports = (input) => {
  const match = input.match(mainPattern);

  const body = match[3];
  const rawParts = body.split(/\n{3,}/);
  const blocks = rawParts.map(partString => {
    const lines = partString.split(/\n{2,}/);
    const rawLyricsLines = lines.map((line) => (
      `${
        line.replace(/[^]*\n/, '')
      }\n`
    ));
    const lyricsLines = rawLyricsLines.map(line => line.replace(/^ */, ''));
    const lyrics = lyricsLines.join('');

    const firstLineIndent = rawLyricsLines[0].match(/^ */)[0];
    const type = (firstLineIndent.length >= 4 ?
      'refrain' :
      'stanza'
    );

    return { type, lyrics };
  });

  return {
    number: match[1],
    title: match[2],
    blocks,
    parts: blocks,  // deprecated!
  };
};
