
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDuxxyuoRXPE0i6wzBFoiRZz1Svoo5Btlk",
  authDomain: "chat-app-3feed.firebaseapp.com",
  projectId: "chat-app-3feed",
  storageBucket: "chat-app-3feed.appspot.com",
  messagingSenderId: "699250921672",
  appId: "1:699250921672:web:9e9dfd295a6b34bdfc55fd"
};

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

  export {db}