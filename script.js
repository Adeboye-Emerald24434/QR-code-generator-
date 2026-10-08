import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const qrForm = document.getElementById("qr-form");
const nameInput = document.getElementById("name");
const imageInput = document.getElementById("image");

qrForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const image = imageInput.files[0];

  const reader = new FileReader();

  reader.readAsDataURL(image);

  reader.addEventListener("load", function () {
    const userData = {
      name: name,
      image: reader.result,
    };

    const id = Date.now().toString();

    console.log(userData);
    console.log(id);

    const qrResult = document.getElementById("qr-result");

    new QRCode(qrResult, `result.html?id=${id}`);
  });
});
