# PPTAuthApp

A modern authentication app built with **React Native CLI**, **TypeScript**, and a beautifully designed UI featuring gradient cards, illustrations, and reusable components.  
The app includes splash screen, login, signup, home screen, form validation, persistent authentication, theming, reusable components, and animated interactions.

---

## ✨ Features

- 🔐 **Authentication Flow** — Login, Signup, Logout
- 💾 **Persistent Auth** using AsyncStorage
- 📝 **Form Validation** using react-hook-form + zod
- 🔄 **Auto Login** after app restart
- 🎨 **Dark & Light Mode** themed UI
- 🌈 **Gradient Buttons & Cards**
- 🧩 **Reusable UI Components**
- 👁 **Password Visibility Toggle** (SVG Icon)
- 🎉 **Toast Notifications** for login & signup
- ⌨️ **Smooth Keyboard Handling** using `react-native-keyboard-controller`
- 📱 **Android 15+ Edge-to-Edge Support**
- 🎬 **Animated Illustration Fade-Out on Keyboard Open**
- 🖼 **Splash Screen with Custom Illustration**

---

## 🔧 Authentication Logic

### **Signup Flow**

- User enters name, email, password
- Credentials saved to:

```
@auth_registered_user
```

- App navigates back to Login screen
- User is NOT auto-logged-in

---

### **Login Flow**

- Reads data from:

```
@auth_registered_user
```

- If missing or incorrect → error displayed using react-hook-form’s `setError`
- On success:
  - Saves session at `@persist_user`
  - Loads authenticated App stack

---

### **Auto Login**

On app launch, the app tries to load:

```
@persist_user
```

If found → user goes directly to Home.

---

## 🧭 Navigation

The app uses **React Navigation** with:

- **Auth Stack:** Login, Signup
- **App Stack:** Home
- **RootNavigator:** determines which stack to show
- **SplashScreen** appears while loading persisted auth

---

## 🎨 UI & Theming

- Custom light & dark themes
- Gradient backgrounds (cards, buttons)
- Fully themed text, inputs, and interactive elements
- Beautiful 3D illustrations for login, signup, splash
- Reusable styling from:

```
src/theme/index.ts
src/theme/config.ts
```

---

## 🛠 Tech Stack

| Feature       | Technology                       |
| ------------- | -------------------------------- |
| Framework     | React Native CLI                 |
| Language      | TypeScript                       |
| Navigation    | React Navigation                 |
| State & Auth  | React Context API                |
| Form Handling | react-hook-form                  |
| Validation    | zod                              |
| Persistence   | AsyncStorage                     |
| UI Styling    | react-native-linear-gradient     |
| Toasts        | react-native-toast-message       |
| Icons         | react-native-svg                 |
| Keyboard UX   | react-native-keyboard-controller |
| Android UX    | react-native-edge-to-edge        |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/paingpyaethu/PPTAuthApp.git
cd PPTAuthApp
```

---

### 2. Install dependencies

```bash
yarn install
```

---

### 3. Run on Android

```bash
yarn android
```

---

### 4. Run on iOS

```bash
cd ios
bundle install
bundle exec pod install
cd ..
yarn ios
```

---

## 🏠 Home Screen

- Shows logged-in user info
- Logout button clears session
- Theme toggle included

---

## 🎉 Toast Messages

Using **react-native-toast-message**, the app presents:

- Signup success
- Login success
- Logout success

---

## 📸 Splash Screen

A custom 3D illustration splash screen appears while loading stored user authentication.

---

## 📜 License

This project is for demo & educational purposes.  
You may reuse components freely.
