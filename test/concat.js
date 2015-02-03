var test = require('tape');
var lib = require('../index');

test('simple example', function(t) {
  t.plan(2);

  t.equal(lib.concat(['A', 'B', 'C']), 'A B C');
  t.equal(lib.concat(['bip', 'bop', 'boop']), 'bip bop boop');
});

test('only first and last', function(t) {
  t.plan(2);

  t.equal(lib.concat(['A', undefined, 'C']), 'A C');
  t.equal(lib.concat(['bip', null, 'boop']), 'bip boop');
});

test('crazy whitespace', function(t) {
  t.plan(1);

  t.equal(lib.concat(['   .', '...', ' .   ']), '. ... .');
});

test('default', function(t) {
  t.plan(2);

  t.equal(lib.concat([null, null, null, 'Default']), 'Default');
  t.equal(lib.concat(['', null, undefined, 'Default']), 'Default');
});

test('empty', function(t) {
  t.plan(3);

  t.equal(lib.concat(), '');
  t.equal(lib.concat([]), '');
  t.equal(lib.concat([null, '', undefined]), '');
});

test('multiple middle names', function(t) {
  t.plan(1);

  t.equal(lib.concat(['one', 'two  three', 'four']), 'one two three four');
});
