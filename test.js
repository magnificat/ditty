const test = require('ava');
const fs = require('fs');

const ditty = require('.');

const song = ditty(
  fs.readFileSync(`${__dirname}/test/fixtures/A weird song.ditty`, 'utf8')
);

test((assert) => {
  assert.is(
    song.number,
    '1.02'
  );

  assert.is(
    song.title,
    'My weird song'
  );

  assert.true(
    Array.isArray(song.parts)
  );

  assert.is(
    song.parts.length,
    4
  );

  assert.same(
    song.parts.map(part => part.type),
    ['stanza', 'refrain', 'stanza', 'refrain']
  );
});
