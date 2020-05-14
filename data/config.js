const knex = require('knex');
const knexfile = require('../knexfile');

// if you haven't done this before, you can lookup a value
// in an object using a variable as the key name if it's
// wrapped in square brackets
module.exports = knex(knexfile[process.env.NODE_ENV]);
