// Importing the 'process' module to access command-line arguments
const process = require('process');

// Function to parse the two arguments
function parseArguments() {
  const argsData = {};
  var tempArgKey = ''
  
  for (let i = 2; i < process.argv.length; i++) {

    if(process.argv[i].startsWith('--')){

      tempArgKey = process.argv[i].replace('--','')
      argsData[tempArgKey.toString()] = ''
      continue

    }

    if(process.argv[i].startsWith('-')){

      tempArgKey = process.argv[i].replace('-','')
      argsData[tempArgKey.toString()] = ''
      continue

    }

    argsData[tempArgKey.toString()] = process.argv[i].toString();

  }

  return argsData;

}

module.exports = parseArguments;
