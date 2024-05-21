#!/usr/bin/env node

const parseArguments = require('./argument-parser');
const updateAndroidBuildFileProperty = require('./android-property-updater');
const getAndroidBuildFileProperty = require('./android-property-getter');
const updateIosBuildFileProperty = require('./ios-property-updater');
const getMarketingVersion = require('./ios-property-getter');
const bumpVersionUtils = require('./bump-version');


const parseJson = require('./parse-json')
const path = require('path');

const argsData = parseArguments()

var versionCode =  argsData.versionCode;
var versionName =  argsData.versionName;

var bundleVersion = argsData.bundleVersion;
var shortVersion = argsData.shortVersion;


if(argsData.bumpMajorVersion != null){
    var androidVersion = getAndroidBuildFileProperty();
    var iosVersion = getMarketingVersion();

    versionName = bumpVersionUtils.updateMajorVersion(androidVersion);
    shortVersion = bumpVersionUtils.updateMajorVersion(iosVersion);

    bundleVersion = bumpVersionUtils.semverToBuildNumber(shortVersion);
    versionCode = bumpVersionUtils.semverToBuildNumber(versionName);
    
}


if(argsData.bumpMinorVersion != null){
    var androidVersion = getAndroidBuildFileProperty();
    var iosVersion = getMarketingVersion();

    versionName = bumpVersionUtils.updateMinorVersion(androidVersion);
    shortVersion = bumpVersionUtils.updateMinorVersion(iosVersion);

    bundleVersion = bumpVersionUtils.semverToBuildNumber(shortVersion);
    versionCode = bumpVersionUtils.semverToBuildNumber(versionName);
    
}

if(argsData.bumpPatchVersion != null){
    var androidVersion = getAndroidBuildFileProperty();
    var iosVersion = getMarketingVersion();

    versionName = bumpVersionUtils.updatePatchVersion(androidVersion);
    shortVersion = bumpVersionUtils.updatePatchVersion(iosVersion);

    bundleVersion = bumpVersionUtils.semverToBuildNumber(shortVersion);
    versionCode = bumpVersionUtils.semverToBuildNumber(versionName);
    
}

if( argsData.bumpAndroidMajorVersion != null ) {
    var androidVersion = getAndroidBuildFileProperty();

    versionName = bumpVersionUtils.updateMajorVersion(androidVersion);
    versionCode = bumpVersionUtils.semverToBuildNumber(versionName);
}

if(argsData.bumpAndroidMinorVersion != null ) {
    var androidVersion = getAndroidBuildFileProperty();

    versionName = bumpVersionUtils.updateMinorVersion(androidVersion);
    versionCode = bumpVersionUtils.semverToBuildNumber(versionName);
}

if(argsData.bumpAndroidPatchVersion != null ) {
    var androidVersion = getAndroidBuildFileProperty();

    versionName = bumpVersionUtils.updatePatchVersion(androidVersion);
    versionCode = bumpVersionUtils.semverToBuildNumber(versionName);
}

if(argsData.bumpIosMajorVersion != null ) {
    var iosVersion = getMarketingVersion();

    shortVersion = bumpVersionUtils.updateMajorVersion(iosVersion);
    bundleVersion = bumpVersionUtils.semverToBuildNumber(shortVersion);
}

if(argsData.bumpIosMinorVersion != null ) {
    var iosVersion = getMarketingVersion();

    shortVersion = bumpVersionUtils.updateMinorVersion(iosVersion);
    bundleVersion = bumpVersionUtils.semverToBuildNumber(shortVersion);
}

if(argsData.bumpIosPatchVersion != null ) {
    var iosVersion = getMarketingVersion();

    shortVersion = bumpVersionUtils.updatePatchVersion(iosVersion);
    bundleVersion = bumpVersionUtils.semverToBuildNumber(shortVersion);
}




if (argsData.auto != null) {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const obj = parseJson(packageJsonPath);
    try{
        versionCode = obj.android ? obj.android.versionCode : versionCode;
        versionName = obj.android ? obj.android.versionName : versionName;
        bundleVersion = obj.ios ? obj.ios.bundleVersion : bundleVersion;
        shortVersion = obj.ios ? obj.ios.shortVersion : shortVersion;
    } catch (error) {
        console.error('Error reading or parsing package.json.\nIf you are using --auto make sure you set ios and android configs as mentioned in https://www.npmjs.com/package/cross-version\n', error);
    }
    
}

if (versionName || versionCode)
    updateAndroidBuildFileProperty(versionCode, versionName);

if (shortVersion || bundleVersion)
    updateIosBuildFileProperty(shortVersion, bundleVersion)