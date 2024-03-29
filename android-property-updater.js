const fs = require('fs');
const path = require('path');

function updateAndroidBuildFileProperty(property, value) {

    const filePath = path.join(__dirname, 'android', 'app', 'build.gradle');


    // Read the file line by line
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Split the file content into lines
        const lines = data.split('\n');

        // Iterate through each line to find and replace the versionName
        const updatedContent = lines.map(line => {
            if (line.includes('property')) {
                // Replace the version number with the new version
                return line.replace(new RegExp(`${property}\\s+"[^"]+"`), `${property} "${value}"`);
            }
            return line;
        });

        // Join the lines back into a single string
        const updatedFileContent = updatedContent.join('\n');

        // Write the updated content back to the file
        fs.writeFile(filePath, updatedFileContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log(`File ${filePath} updated successfully -  ${property} = ${value}`);
        });
    });

}

module.exports = updateAndroidBuildFileProperty