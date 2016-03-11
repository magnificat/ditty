const test = require('ava');
const fs = require('fs');

const ditty = require('.');

const result = ditty(
  fs.readFileSync(`${__dirname}/test/fixtures/A weird song.ditty`, 'utf8')
);

test((assert) => {
  assert.is(
    result.number,
    '1.02'
  );

  assert.is(
    result.title,
    'My weird song'
  );
});
