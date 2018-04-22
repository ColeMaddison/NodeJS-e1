'use strict';
const os = require('os');
const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));
const { name } = require('./module1');
const { add, world } = require('./module2');
require('./module3');

console.log("Hello");

console.log(chalk.red(world) + " " + chalk.yellow(name));
console.log(chalk.blue(NONONO));
console.log(chalk.blue(process.env));

console.dir(process.argv.slice(2));
