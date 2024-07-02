// script.js

// Create a new QRCode instance
let qrcode = new QRCode(document.getElementById("qrOutput"));

// Initial QR code generation with a default message
qrcode.makeCode("Why did you scan me?");

// Function to generate QR code based on user input
function generateQr() {
    let inputField = document.getElementById("inputText");
    let inputValue = inputField.value.trim();

    if (inputValue === "") {
        alert("Input field cannot be blank!");
    } else {
        qrcode.makeCode(inputValue);
    }
}
