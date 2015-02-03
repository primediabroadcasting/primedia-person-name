var test = require('tape');
var lib = require('../index');

test('shorthand', function(t) {
  t.plan(3);

  t.equal(lib({first_name: 'Foo'}), 'Foo');
  t.equal(lib({first_name: 'Foo', last_name: 'Bar'}), 'Foo Bar');
  t.equal(lib({}), '');
});
