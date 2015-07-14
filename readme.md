[![Next](http://www.wearenext.co.za/assets/images/logos/logo-next-dark-57x22.png)](http://www.wearenext.co.za)

# Primedia Person Name

[![npm](https://img.shields.io/npm/v/@primedia/person-name.svg?style=flat)](https://www.npmjs.com/package/primedia-person-name)
[![Dependency Status](https://david-dm.org/primediabroadcasting/primedia-person-name/status.svg?style=flat)](https://david-dm.org/primediabroadcasting/primedia-person-name#info=dependencies)
[![devDependency Status](https://david-dm.org/primediabroadcasting/primedia-person-name/dev-status.svg?style=flat)](https://david-dm.org/primediabroadcasting/primedia-person-name#info=devDependencies)

### Examples

```js
var ns = require('primedia-person-name');

var person = {
  first_name: 'Wayne',
  middle_names: 'Ashley',
  last_name: 'Berry'
}

var name = ns.name(person); // Wayne Ashley Berry
```

```js
var ns = require('primedia-person-name');

var name = ns.name({}) || 'Untitled'; // Untitled
```

```js
var ns = require('primedia-person-name');

var name = ns.concat(['Wayne', 'Ashley', 'Berry']); // Wayne Ashley Berry
```

You can also attempt to reverse the process and parse a full name string into
first, middle and last names.

```js
var ns = require('primedia-person-name');

ns.parse('Wayne Ashley Berry');
// {
//   first_name: 'Wayne',
//   middle_names: 'Ashley',
//   last_name: 'Berry'
// }
```

#### License

[MIT](http://opensource.org/licenses/MIT) © [Next](http://www.wearenext.co.za)
