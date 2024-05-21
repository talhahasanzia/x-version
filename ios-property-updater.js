const fs = require('fs');
const path = require('path');
const findPbxFile = require('./pbx-search')

var marketingRegex = /MARKETING_VERSION = [^;]+;/g;
var projectRegex = /CURRENT_PROJECT_VERSION = [^;]+;/g;


function updateIosBuildFileProperty(shortVersion, bundleVersion) {

    var filePath = findPbxFile(path.join(process.cwd(), 'ios'));

    if (!fs.existsSync(filePath)) {
        return;
    }
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        var updatedContent = data
        if (shortVersion) {
            updatedContent = updatedContent.replaceAll(
                marketingRegex,
                `MARKETING_VERSION = ${shortVersion};`
            );
        }

        if (bundleVersion) {
            updatedContent = updatedContent.replaceAll(
                projectRegex,
                `CURRENT_PROJECT_VERSION = ${bundleVersion};`
            );
        }


        // Write the updated content back to the file
        fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log(`File ${filePath} updated successfully -  MARKETING_VERSION=${shortVersion}, PROJECT_VERSION=${bundleVersion}`);
        });
    });
}

module.exports = updateIosBuildFileProperty