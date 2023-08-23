let qrcode = document.querySelector('.qrcode');
let button = document.querySelector('.btn');
let intext = document.querySelector('#txt');
let qrimg = document.createElement('img');
qrimg.classList.add('qrimg'); // Add the 'qrimg' class to the img element

button.addEventListener('click', Qrgenerator);

function Qrgenerator() {
    if (intext.value== ""){
        alert("enter some text")
    }
    if (intext.value !== "") {
        let inputValue = intext.value;
        let qrData = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputValue;
        
        // Apply a fade-out effect
        qrimg.style.opacity = '0';

        // After a brief timeout, update the image source and apply a fade-in effect
        setTimeout(() => {
            qrimg.src = qrData;
            qrimg.style.opacity = '1';
        }, 300); // Adjust the timeout duration as needed
        
        // Clear the previous content of qrcode
        qrcode.innerHTML = '';
        qrcode.appendChild(qrimg);
    }
}
















// let apiurl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=harsh";
// let p = fetch(apiurl);
// p.then(response =>
//     response.blob()
// ).then(blob => {
//     console.log(blob); // This will log the blob data
// }).catch(error => {
//     console.error('Error:', error);
// });