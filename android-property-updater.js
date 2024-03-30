const fs = require('fs');
const path = require('path');

function updateAndroidBuildFileProperty(versionCode, versionName) {

    const filePath = path.join(process.cwd(), 'android', 'app', 'build.gradle');


    // Read the file line by line
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        var updatedFileContent = data;

        if(versionCode){
           updatedFileContent = updatedFileContent.replace(/versionCode\s+\d+/, `versionCode ${versionCode}`);
        }

        if(versionName){
            updatedFileContent = updatedFileContent.replace(/versionName\s+"[^"]*"/, `versionName "${versionName}"`);
        }

      
        // Write the updated content back to the file
        fs.writeFile(filePath, updatedFileContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log(`File ${filePath} updated successfully -versionCode=${versionCode}, versionName=${versionName}`);
        });
    });

}

module.exports = updateAndroidBuildFileProperty