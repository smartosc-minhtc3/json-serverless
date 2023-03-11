const moduleLoader = require('esm')(module);
module.exports = moduleLoader('./src/App.js');
