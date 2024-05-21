const fs = require('fs');

function parseJson(filePath) {
    try {

        const jsonString = fs.readFileSync(filePath, 'utf-8');

        // Parse the JSON string into a JavaScript object
        const jsonObject = JSON.parse(jsonString);

        return {
            "android": jsonObject.android ?? null,
            "ios": jsonObject.ios ?? null,
            "version": jsonObject.version ?? null
        };
    } catch (error) {
        console.error('Error reading or parsing JSON file:', error);
        return null;
    }
}

module.exports = parseJson;