var condense = require('condense-whitespace');

/**
 * @param {Array} strings
 * @return {string}
 */
var concat = function(strings) {
  if (typeof strings === 'undefined') {
    return '';
  }

  if (typeof strings !== 'object') {
    throw new TypeError();
  }

  if (typeof strings.map !== 'function') {
    throw new TypeError();
  }

  return condense(strings.map(function(str) {
    return str || '';
  }).join(' ')) || '';
};

/**
 * @param {object} object
 * @return {string}
 */
var build = function(object) {
  return concat([
    object.honorific_prefix,
    object.first_name,
    object.middle_names,
    object.last_name,
    object.honorific_suffix
  ]);
};

/**
 * Takes a full name string and attempts to split it into first, middle and
 * last names.
 *
 * @param {string} input
 * @return {object}
 */
var parse = function(input) {
  if (typeof input !== 'string') {
    throw new TypeError();
  }

  var names = condense(input).split(' ');
  var first_name = names.shift();
  var last_name = names.pop();
  var middle_names = names.length > 0 ? names.join(' ') : '';

  return {
    first_name: first_name,
    middle_names: middle_names,
    last_name: last_name
  };
};

module.exports = build;
module.exports.name = build;
module.exports.parse = parse;
module.exports.concat = concat;
