const fs = require('fs');
const path = require('path');

function findModuleBuildGradle(androidDir) {
    const files = fs.readdirSync(androidDir);

    // Check each item in the directory
    for (const file of files) {
        const filePath = path.join(androidDir, file);
        const stat = fs.statSync(filePath);

        // If it's a directory, recursively search inside
        if (stat.isDirectory()) {
            // Skip the "build" directory and the project-level build.gradle
            if (file !== 'build' && file !== 'build.gradle') {
                const gradleFilePath = path.join(filePath, 'build.gradle');
                if (fs.existsSync(gradleFilePath)) {
                    return gradleFilePath;
                } else {
                    // Recursive call to search inside the directory
                    const result = findModuleBuildGradle(filePath);
                    if (result) {
                        return result;
                    }
                }
            }
        }
    }

    return null; // Return null if no build.gradle file found in any module
}

module.exports = findModuleBuildGradle
