# x-version
Cross version setter for platforms like ionic-capacitor.

## Description
In cross platform app development it is sometimes hassle to set versions in targetting platform, like in case of Ionic Capacitor project
it is Android or iOS. Many web developers who come from web background often find it hard to locate the required file or property to update native app's version. This package addresses to solve that with very simple and intuitive commands.

### Usage
Full command:
```
x-version --versionCode 234 --versionName 2.3.4 --bundleVersion 2244 --shortVersion 22.64.5
```

Where:
`versionCode`: is for Android's version code, this is integer type (kind of build number).
`versionName`: is for Android's version name, visible to users, this is string type.
`shortVersion`: is for iOS's version, this is the version that user sees, its a string value.
`bundleVersion`: is for iOS's build number, it is string.

All arguments are optional.

## Convenient
Currently, the package targets ionic-capacitor, so you don't need to worry about where iOS and Android build files are. 
