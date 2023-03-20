# BF Boilerplate Mobile App
 
## How To Run The Project Locally

###### On Android

Step 1: Connect your physical device to your laptop/pc (only if you want to run the application on a phone or tablet you own)

Step 2: Open a terminal and then enter (only if you want to run the application on a phone or tablet you own)

```adb devices```

If correctly connected, the output should display as so

```R58N80513JV     device```

Step 3: Install packages using package manager

Either ```yarn``` or ```npm install```

Step 4: Run the project

Either ```yarn start``` or ```npm run android```

###### On iOS

Step 1: Go to ios directory:

```pod init```

```pod install --repo-update```

Step 2: Open xCode, once done, open the .xcworkspace file (this appears once pods have been installed successfully.

Step 3: Select the device simulator you wish to run locally. (or physical device if you have one connected via thunderbolt/usb connection)

Step 4: Build the project, simulator should load for selected device in step three.
 
## Android Build Instructions

###### How to generate a debug .apk

An Android Package Kit (APK) is the package file format used by the Android OS for distribution and installation of mobile apps. It is similar to the .exe file you have on Windows OS, a .apk file is for android.

Step 1: Go to the root of the project in the terminal and run the below command:

```npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res```

Step 2: Go to android directory:

```cd android```

Step 3: Now in this android folder, run this command

```./gradlew assembleDebug```

Step 4: You'll find the apk file in the following path:

```bf-boilerplate-mobile-application/android/app/build/outputs/apk/debug/app-debug.apk```

###### How to generate a release .aab

Step 1: Go to android directory:

```cd android```

Step 2: Now in this android folder, run this command

```./gradlew bundleRelease```

## iOS Build Instructions

###### How to generate a release .ipa

Step 1: Go to ios directory:

```pod init```

```pod install --repo-update```

Step 2: Open xCode, once done, open the .xcworkspace file (this appears once pods have been installed successfully.

Step 3: Select Any iOS Project (arm64) from device options.

Step 4: Archive and deploy the project to the correct App Store Connect team.

## Conventional Commits

This project uses a specification called **Conventional Commits**, please **ensure** this specification is followed when commiting code to this project.

Guide: https://www.conventionalcommits.org/en/v1.0.0/

## Pull Requests, Approvals & Releases

###### Creating the develop release pull request

Pull Requests made to this project are required in order to merge to **develop** or **main** 

When submitting a Pull Request, at least one approval is required before merging. 

When constructing a release, ensure that a release branch is created based off of the contents of develop, the only changes contained within this branch should be the version numbers in **package.json** and android's **build.gradle**. 

The Pull Request should be named as **[develop] release vX.Y.Z**

###### Creating the main release pull request

Once this Pull Request has been created, you will need to generate a new Pull Request based off **main** comparing the **develop** release branch you have just created, this should ensure that all changes that have been made to **develop** since the last release are contained within this update. 

The Pull Request should be named as **[main] release vX.Y.Z**

###### Creating the release tag

Once this has been done and both Pull Requests have been merged, a release tag should be generated, named as **vX.Y.Z**


