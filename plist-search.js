const fs = require('fs');
const path = require('path');

function findInfoPlist(startDir) {
    let infoPlistPath = null;

    function search(directory) {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory() && file !== 'AwesomeProject.xcodeproj') {
                search(filePath);
            } else if (file === 'Info.plist') {
                infoPlistPath = filePath;
                break;
            }
        }
    }

    search(startDir);

    return infoPlistPath;
}


module.exports = findInfoPlist