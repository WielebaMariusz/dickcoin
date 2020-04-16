#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');

program
  .version(package.version)
  .command('key', 'Manage Api key - https://nomics.com')
  .command('check', 'Check coin price info')
  .command('watch', 'Watch coin price info')
  .parse(process.argv)
