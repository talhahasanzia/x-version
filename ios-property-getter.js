const fs = require('fs');
const path = require('path');
const findPbxFile = require('./pbx-search');


function getMarketingVersion() {

    var filePath =findPbxFile(path.join(process.cwd(), 'ios'));

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const marketingRegex = /MARKETING_VERSION = ([^;]+);/g;
        let match;
        let count = 0;
        let secondValue = null;

        while ((match = marketingRegex.exec(data)) !== null) {
            count++;
            if (count === 2) {
                secondValue = match[1];
                break;
            }
        }

        return secondValue;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

module.exports = getMarketingVersion;