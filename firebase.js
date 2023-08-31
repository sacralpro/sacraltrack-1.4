// FIREBASE

// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBtbz732cXb7QE1K8gfH5Fa2Xhd8yGTfM8",
  authDomain: "sacraltrack1-3.firebaseapp.com",
  projectId: "sacraltrack1-3",
  storageBucket: "sacraltrack1-3.appspot.com",
  messagingSenderId: "773622481993",
  appId: "1:773622481993:web:fe75537d7c35be12bc2b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


if (typeof window !== 'undefined' && analytics.isSupported()) {
  // код инициализации аналитики
}

// Инициализация Express приложения
const expressApp = express();


// Analytics

const ua = require('universal-analytics');
const visitor = ua('UA-XXXXXXXXX-X'); // Замените 'UA-XXXXXXXXX-X' на ваш код отслеживания Google Analytics



