# GameHub – Game Recommendations App

## 👤 Author

**Parag Sharma**

## 📱 Project Overview

GameHub is a mobile application where users can discover and share game recommendations. It provides a smooth and interactive user experience with features like real-time likes, user authentication, and game snippet sharing. Built using the latest version of React Native and Firebase, the app is optimized for both performance and scalability.

---

## 🚀 Getting Started

### ✅ Prerequisites

- **Node.js** (v18 or above recommended)
- **Yarn** or **npm**
- **Android Studio / Xcode** for running on device/simulator
- A `.env` file (refer to `.env.sample`)

### 🔧 Setup

```bash
git clone https://github.com/paragbarsar99/GameHub.git
cd GameHub
cp .env.sample .env  # Fill in required Firebase & API keys
yarn install         # or npm install

yarn run android

cd ios && pod install && cd ..
yarn ios


☁️ Data Persistence
The app uses Firebase Firestore for storing and syncing data. Firestore was chosen due to the following benefits:

Real-time syncing: Automatic updates across all connected devices.

Offline support: Seamless user experience with built-in offline persistence.

Scalability: Handles growth effortlessly with high performance.

Security: Powerful rules-based access control.

Ease of integration: Optimized SDK for React Native and seamless setup with Firebase Authentication.


✨ Features Implemented
✅ Core Features
🔐 Google Sign-In using Firebase Authentication

☁️ Cloud Firestore for storing and syncing post data

🧾 Create Post with image, title, and description

🖼️ Image Picker to upload preview images from device gallery

❤️ Like Functionality with real-time like count sync

📄 Detailed Post View for better reading experience

🔄 Pull-to-Refresh & Pagination for feed screen

🔓 Logout functionality

🔔 Toast Messages for user feedback

💅 Clean UI/UX with responsive and aesthetic design

📱 Redux for centralized state management

🎣 Hook-driven architecture for logic separation and reuse

🧠 Architectural Decisions & Trade-Offs
✅ Key Decisions
Redux Toolkit for global state and store configuration

RTK Query for fetching Firestore data with built-in caching

TypeScript for static type checking and improved error handling

Modern folder structure: Easy to scale and maintain

Reusable UI components: Like Button, TextInput, etc.

Theming and styling: Centralized styles for consistency

Hooks abstraction: All API and logic separated into reusable hooks

Wrapper components: Abstracted third-party libraries for easier future replacements

⚖️ Trade-Offs
Increased initial development time due to modular and scalable setup

Slight performance hit if hooks are overused without following React best practices

🚧 Known Issues & Limitations
📷 Only supports image uploads (no video)

🎨 UI design could be further improved for better polish

🚀 Future Improvements
🔑 Add more authentication methods (email, Apple, anonymous)

🧭 Improve onboarding and tutorial experience for first-time users

🎥 Support video content uploads

🏘️ Add a community/discussion section

🧾 Bookmarking or saving posts

🧑‍🤝‍🧑 Allow users to follow/subscribe to creators

🔔 Push notifications for engagement

🌐 Offline mode enhancements

📊 Analytics and usage tracking

📱 Deep linking and in-app navigation improvements

📂 Project Structure (Simplified)
/app
 ┣ /components     # Reusable UI components
 ┣ /screens        # App screens
 ┣ /hooks          # Custom hooks for API and logic
 ┣ /store          # Redux store and slices
 ┣ /config         # Firebase-related config
 ┣ /assets         # Images, fonts, etc.
 ┣ /utils          # Helpers and utility functions
 ┣ /styles         # Styling and themes
 ┣ /routes         # Helpers and utility functions
 ┣ /constants      # Styling and themes
 ┗ AppIndex.tsx    # App entry point


 📄 License
This project is open-source and available under the MIT License.


---
🙌 Contributions
Feel free to fork the repository and open a pull request. Suggestions, issues, and improvements are always welcome!
```
