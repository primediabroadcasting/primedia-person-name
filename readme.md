[![Next](http://www.wearenext.co.za/assets/images/logos/logo-next-dark-57x22.png)](http://www.wearenext.co.za)

# Primedia Person Name

[![npm](https://img.shields.io/npm/v/name-string.svg?style=flat)](https://www.npmjs.com/package/name-string)
[![Build Status](https://travis-ci.org/wayneashleyberry/name-string.svg?branch=master)](https://travis-ci.org/wayneashleyberry/name-string)
[![Dependency Status](https://david-dm.org/wayneashleyberry/name-string/status.svg?style=flat)](https://david-dm.org/wayneashleyberry/name-string#info=dependencies)
[![devDependency Status](https://david-dm.org/wayneashleyberry/name-string/dev-status.svg?style=flat)](https://david-dm.org/wayneashleyberry/name-string#info=devDependencies)

This is a tiny little module I wrote for very specific use cases. There's
a good chance you wont find this of any use at all :)

### Examples

```js
var ns = require('name-string');

var person = {
  first_name: 'Wayne',
  middle_names: 'Ashley',
  last_name: 'Berry'
}

var name = ns.name(person); // Wayne Ashley Berry
```

```js
var ns = require('name-string');

var name = ns.name({}) || 'Untitled'; // Untitled
```

```js
var ns = require('name-string');

var name = ns.concat(['Wayne', 'Ashley', 'Berry']); // Wayne Ashley Berry
```

You can also attempt to parse a full name string into first, middle and last
names.

```js
var ns = require('name-string');

ns.parse('Wayne Ashley Berry');
// {
//   first_name: 'Wayne',
//   middle_names: 'Ashley',
//   last_name: 'Berry'
// }
```

#### License

[MIT](http://opensource.org/licenses/MIT) © [Next](http://www.wearenext.co.za)
