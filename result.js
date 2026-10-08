import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUj22ejjhCAA2SZYyW2fAOCOvVabVpDzE",
  authDomain: "qr-code-generator-53abd.firebaseapp.com",
  projectId: "qr-code-generator-53abd",
  storageBucket: "qr-code-generator-53abd.firebasestorage.app",
  messagingSenderId: "646790582133",
  appId: "1:646790582133:web:4f467f8660adb506c94d3c",
  measurementId: "G-XM9LXJTGD7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getUser() {
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    
    document.getElementById("user-name").textContent = userData.name;
    document.getElementById("user-image").src = userData.image;
    document.getElementById("user-email").textContent = userData.email;
  }
}

getUser();
const userRef = doc(db, "users", id);
const userSnap = await getDoc(userRef);