var test = require('tape');
var lib = require('../index');

test('simple example', function(t) {
  t.plan(3);

  var person = lib.parse('Wayne Ashley Berry');

  t.equal(person.first_name, 'Wayne');
  t.equal(person.middle_names, 'Ashley');
  t.equal(person.last_name, 'Berry');
});

test('no middle name', function(t) {
  t.plan(3);

  var person = lib.parse('Drew Murphy');

  t.equal(person.first_name, 'Drew');
  t.equal(person.middle_names, '');
  t.equal(person.last_name, 'Murphy');
});

test('multiple middle names', function(t) {
  t.plan(3);

  var person = lib.parse('Shawn Anne Frank Roos');

  t.equal(person.first_name, 'Shawn');
  t.equal(person.middle_names, 'Anne Frank');
  t.equal(person.last_name, 'Roos');
});

test('horrible whitespace should be normalize', function(t) {
  t.plan(3);

  var person = lib.parse('   Shawn Anne    Frank  Roos ');

  t.equal(person.first_name, 'Shawn');
  t.equal(person.middle_names, 'Anne Frank');
  t.equal(person.last_name, 'Roos');
});
