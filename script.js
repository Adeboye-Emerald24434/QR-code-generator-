import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
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
const qrForm = document.getElementById("qr-form");
const nameInput = document.getElementById("name");
const imageInput = document.getElementById("image");

qrForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const image = imageInput.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(image);
  reader.addEventListener("load", async function () {
    const userData = {
      name: name,
      image: reader.result,
    };

    const docRef = await addDoc(collection(db, "users"), userData);
    const id = docRef.id;

    console.log(userData);
    console.log(id);

    const qrResult = document.getElementById("qr-result");

    new QRCode(qrResult, `${window.location.origin}/result.html?id=${id}`);
  });
});
