const generate = require('../generate.js');

const input = [
  {type: 'input', name: 'name', message: 'App name?'},
];

module.exports = () => generate('default', input);