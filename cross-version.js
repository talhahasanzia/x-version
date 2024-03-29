#!/usr/bin/env node

const parseArguments = require('./argument-parser');
const updateAndroidBuildFileProperty = require('./android-property-updater');
const updateIosBuildFileProperty = require('./ios-property-updater');


const argsData = parseArguments()

console.log("Received arguments", argsData)

const versionCode = argsData.versionCode;
const versionName = argsData.versionName;

if (versionName)
    updateAndroidBuildFileProperty('versionName', versionName);
if (versionCode)
    updateAndroidBuildFileProperty('versionCode', versionCode);

const bundleVersion = argsData.bundleVersion;
const shortVersion = argsData.shortVersion;

if (shortVersion || bundleVersion)
    updateIosBuildFileProperty(shortVersion, bundleVersion)