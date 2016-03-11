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

  assert.same(
    song.parts[0].lyrics,
    'This is a stanza\n' +
    'without any chords.'
  );

  assert.same(
    song.parts[1].lyrics,
    'This is a refrain\n' +
    'Tralalalalala'
  );

  assert.same(
    song.parts[2].lyrics,
    'This stanza is indented\n' +
    'and has some wild chords around'
  );

  assert.same(
    song.parts[3].lyrics,
    'This is a refrain\n' +
    'ridiculously indented, hey!'
  );
});
