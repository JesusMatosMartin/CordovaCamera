document.addEventListener('deviceready', onDeviceReady, false);
let image = document.getElementById('picture');

function onDeviceReady() {
    document.getElementById('camera').onclick = getPicture;

    document.getElementById('deviceready').classList.add('ready');
}

function getPicture(event) {
    navigator.camera.getPicture(successCallback, errorCallback, {quality: 25, destinationType: Camera.DestinationType.DATA_URL});
}

function successCallback(imageData) {
    console.log("Work!");
    alert("Fotografia hecha");
    
    image.src = "data:image/jpeg;base64," + imageData;
}

function errorCallback() {
    alert('Doesnt work!');
}
// commit 7