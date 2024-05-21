#!/usr/bin/env node

const parseArguments = require('./argument-parser');
const updateAndroidBuildFileProperty = require('./android-property-updater');
const updateIosBuildFileProperty = require('./ios-property-updater');
const parseJson = require('./parse-json')
const path = require('path');

const argsData = parseArguments()

var versionCode =  argsData.versionCode;
var versionName =  argsData.versionName;

var bundleVersion = argsData.bundleVersion;
var shortVersion = argsData.shortVersion;

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