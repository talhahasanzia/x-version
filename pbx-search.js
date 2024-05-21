const fs = require('fs');
const path = require('path');

function findPbxFile(rootDir) {
    const files = fs.readdirSync(rootDir);
    for (const file of files) {
        const fullPath = path.join(rootDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            const pbxprojPath = findPbxFile(fullPath);
            if (pbxprojPath) {
                return pbxprojPath;
            }
        } else if (file === 'project.pbxproj') {
            return fullPath;
        }
    }
    return null;
}

module.exports = findPbxFile
