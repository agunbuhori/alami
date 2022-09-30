# Alami Test Case

Buatlah react native apps dengan feature:

1. Ambil device id dari mobile device menggunakan bridging native Android dan di IOS (tanpa
   menggunakan library)
2. Buatlah suatu component keranjang dengan menggunakan react hook dan harus 1 render
   ketika berganti value (misal menambah atau mengurang item)
3. Buatlah sebuah progress bar yang akan otomatis berjalan hingga 100% tetapi jika di tekan
   (hold) animasi progress bar tersebut akan berhenti dan ketika di lepas holdnya akan jalan
   kembali

### Notes:

1. Untuk UI di buat bebas yang bisa mencover semua case di atas
2. Buatlah guide how to install dan jalankan aplikasi tersebut

## Overview

It's been built with React Native v0.71 with TypeScript. This application works both on Android and iOS. I recommend to use Apple Macbook as development device so that application can run both.

## Installation

Make sure your device has installed these tools and setup the environment :

1. Android Studio [Setup Environment](https://reactnative.dev/docs/environment-setup).
2. XCode [Setup Environment](https://reactnative.dev/docs/environment-setup).
3. NodeJS Last Version,
4. JDK 11.

## Clone the project

```bash
cd /your/directory
# then
git clone https://github.com/agunbuhori/alami.git
```

and then, open the project and install the packages :

```bash
cd alami

npm install

# or using yarn instead of npm

yarn install
```

### iOS Installation

Make sure your device has installed Xcode with emulator and then run this command:

```bash
npx pod-install
# or
cd ios && pod install && cd ..
# then
yarn ios
```

### Android Installation

Make sure your device has installed Android Studio with emulator as well and then just run this command:

```bash
yarn android
```

##

## License

[MIT](https://choosealicense.com/licenses/mit/)
