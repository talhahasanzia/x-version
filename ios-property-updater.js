const fs = require('fs');
const path = require('path');
const findInfoPlist =require('./plist-search')


function updateIosBuildFileProperty(shortVersion, bundleVersion) {
    var filePath = path.join(process.cwd(), 'ios', 'App', 'App', 'Info.plist');

    if(!fs.existsSync(filePath)){
        filePath = findInfoPlist(path.join(process.cwd(), 'ios'))
    }
    

     // Read the file line by line
     fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        var updatedContent = data 

        // If CFBundleShortVersionString is present, update its value
        if (shortVersion) {
             updatedContent = updatedContent.replace(
                /<key>CFBundleShortVersionString<\/key>\s*<string>[^<]+<\/string>/,
                `<key>CFBundleShortVersionString</key>\n\t<string>${shortVersion}</string>`
            );
        }

        if (bundleVersion) {
            updatedContent = updatedContent.replace(
                /<key>CFBundleVersion<\/key>\s*<string>[^<]+<\/string>/,
                `<key>CFBundleVersion</key>\n\t<string>${bundleVersion}</string>`
            );
       }
    

        // Write the updated content back to the file
        fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log(`File ${filePath} updated successfully -  CFBundleShortVersionString=${shortVersion}, CFBundleVersion=${bundleVersion}`);
        });
    });
}

module.exports = updateIosBuildFileProperty