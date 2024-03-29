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

You can run any argument in any combination, in any sequence, arguments which are provided are used others are ignored.

For e.g.

```
x-version --versionCode 234 --versionName 2.3.4 // only sets android versions
```
and 
```
x-version --bundleVersion 2244 --shortVersion 22.64.5 // only sets iOS versions
```
or even:
```
x-version --shortVersion 22.64.5 --versionName 2.3.4 // only set user visible versions for Android and iOS
```

All arguments are optional.

## Convenient
Currently, the package targets ionic-capacitor, so you don't need to worry about where iOS and Android build files are. 
