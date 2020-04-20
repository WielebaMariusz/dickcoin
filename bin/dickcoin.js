#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');

program
  .version(package.version)
  .command('check', 'Check coin price info')
  .command('watch', 'Watch real time coin price')
  .command('watch-list', 'Manage your cryptocurrency watch-list')
  .parse(process.argv)
