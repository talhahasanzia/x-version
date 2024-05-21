const fs = require('fs');
const path = require('path');
const findModuleBuildGradle = require('./build-gradle-search');

function getAndroidBuildFileProperty() {

    const filePath = findModuleBuildGradle(path.join(process.cwd(), 'android'));
    var versionName = '';

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const versionNameRegex = /versionName\s+"([^"]+)"/;
        const match = data.match(versionNameRegex);
        const result = match ? match[1] : null;
        return result;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }

}

module.exports = getAndroidBuildFileProperty