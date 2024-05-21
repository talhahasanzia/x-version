# cross-version
Cross version setter for platforms like ionic-capacitor.

## Description
In cross platform app development it is sometimes hassle to set versions in targetting platform, like in case of Ionic Capacitor project
it is Android or iOS. Many web developers who come from web background often find it hard to locate the required file or property to update native app's version. This package addresses to solve that with very simple and intuitive commands.

## Installation
Prefer global installation if you want to run commands directly. 
```
npm install -g cross-version
```
or locally install:
```
npm install cross-version
```
Or use `npx`.
```
npx cross-version --versionCode 234
```



## Usage
Make sure you run command in ionic root project.

Full command (global install):
```
cross-version --versionCode 234 --versionName 2.3.4 --bundleVersion 2244 --shortVersion 22.64.5
```

Where:

`versionCode`: is for Android's version code, this is integer type (kind of build number).

`versionName`: is for Android's version name, visible to users, this is string type.

`shortVersion`: is for iOS's version, this is the version that user sees, its a string value.

`bundleVersion`: is for iOS's build number, it is string.

You can run any argument in any combination, in any sequence, arguments which are provided are used others are ignored.

For e.g.

```
cross-version --versionCode 234 --versionName 2.3.4 // only sets android versions
```
and 
```
cross-version --bundleVersion 2244 --shortVersion 22.64.5 // only sets iOS versions
```
or even:
```
cross-version --shortVersion 22.64.5 --versionName 2.3.4 // only set user visible versions for Android and iOS
```

All arguments are optional, but case sensitive.

### New in v3.0.0
- Optional iOS and Android config in package.json, now you can set any one of them and it will work. Refer to [package.json](https://github.com/talhahasanzia/x-version?tab=readme-ov-file#new-in-v200)
```
{

...

  "ios": {
    "bundleVersion": 2233,
    "shortVersion": "2.2.44"
  }

...
}
```

This would give error previously because of missing Android config but now it is supported.

- iOS versioning is moved to project config (`.pbxproj`) file to avoid editing `Info.plist` directly. This is same file which gets updated when we change version from Xcode GUI.




### New in v2.0.0
- Fixed: Bug in Android version setting
- Added: Support for react-native projects. (No difference in usage, same as above)
- Added: Support for reading versions from `package.json`

Start by adding version information in `package.json` in following format
```
{

...

  "android": {
    "vesionCode": 2233,
    "versionName": "2.2.44"
  },
  "ios": {
    "bundleVersion": 2233,
    "shortVersion": "2.2.44"
  }

...
}
```

Then run (in case of global install):
```
cross-version --auto  // picks version data from package.json
```
or (in case of local install):
```
npx cross-version --auto  // picks version data from package.json
```


## Convenient
Currently, the package targets ionic-capacitor, so you don't need to worry about where iOS and Android build files are. Just make sure you already have android and ios folders created in your directory where you run the command. 
