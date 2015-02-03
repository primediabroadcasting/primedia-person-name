var test = require('tape');
var lib = require('../index');

test('simple example', function(t) {
  t.plan(3);

  var person = {
    first_name: 'Wayne',
    middle_names: 'Ashley',
    last_name: 'Berry'
  };

  t.equal(lib(person), 'Wayne Ashley Berry');

  person.middle_names = undefined;
  t.equal(lib(person), 'Wayne Berry');

  person.first_name = undefined;
  t.equal(lib(person), 'Berry');
});

test('with defaults', function(t) {
  t.plan(1);

  var person = {};

  t.equal(lib(person) || 'Foo', 'Foo');
});

test('empty', function(t) {
  t.plan(1);

  var person = {};

  t.equal(lib(person), '');
});

test('honorific_prefix', function(t) {
  t.plan(1);

  var person = {
    honorific_prefix: 'Mr.',
    first_name: 'Wayne',
    middle_names: 'Ashley',
    last_name: 'Berry'
  };

  t.equal(lib(person), 'Mr. Wayne Ashley Berry');
});

test('honorific_suffix', function(t) {
  t.plan(1);

  var person = {
    first_name: 'Shawn',
    last_name: 'Roos',
    honorific_suffix: 'PhD'
  };

  t.equal(lib(person), 'Shawn Roos PhD');
});
