
function updateMajorVersion(semVersion) {
    const versionParts = semVersion.split('.');
    if (versionParts.length < 1) {
        throw new Error("Invalid SemVer string: Major version not found.");
    }
    versionParts[0] = (parseInt(versionParts[0]) + 1).toString();
    return versionParts.join('.');
}

function updateMinorVersion(semVersion) {
    const versionParts = semVersion.split('.');
    if (versionParts.length < 2) {
        throw new Error("Invalid SemVer string: Minor version not found.");
    }
    versionParts[1] = (parseInt(versionParts[1]) + 1).toString();
    return versionParts.join('.');
}

function updatePatchVersion(semVersion) {
    const versionParts = semVersion.split('.');
    if (versionParts.length < 3) {
        console.error("Error: Patch version not found in SemVer string:", semVersion);
        return semVersion;
    }
    versionParts[2] = (parseInt(versionParts[2]) + 1).toString();
    return versionParts.join('.');
}

function semverToBuildNumber(version) {
    // Split version into major, minor, and optional patch parts
    const [major, minor, patch] = version.split('.').map(Number);

    // If patch is not present, default it to 0
    const actualPatch = patch === undefined ? 0 : patch;

    // Calculate build number
    const buildNumber = major * 10000 + minor * 100 + actualPatch;

    return buildNumber;
}

module.exports = {
    updateMajorVersion,
    updateMinorVersion,
    updatePatchVersion,
    semverToBuildNumber
};