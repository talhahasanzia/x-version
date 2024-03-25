const { program } = require('commander');

program
  .version('1.0.0')
  .description('A program that takes two optional arguments')
  .option('-a, --argument1 [value]', 'First optional argument')
  .option('-b, --argument2 [value]', 'Second optional argument')
  .parse(process.argv);

const { argument1, argument2 } = program;

console.log('First argument:', argument1 || 'Not provided');
console.log('Second argument:', argument2 || 'Not provided');
