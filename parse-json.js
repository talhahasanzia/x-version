const fs = require('fs');

function parseJson(filePath) {

    try {
        // Read the contents of the JSON file
        const jsonString = fs.readFileSync(filePath, 'utf-8');

        // Parse the JSON string into a JavaScript object
        const jsonObject = JSON.parse(jsonString);

        return {
            "android": jsonObject.android,
            "ios": jsonObject.ios,
            "version":jsonObject.version
        };
    } catch (error) {
        console.error('Error reading or parsing JSON file:', error);
        return null;
    }
}

module.exports = parseJson