let adviceDiv = document.querySelector('#adviceDiv');
let idDiv = document.querySelector('#idDiv')

fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceDiv.textContent = data.slip.advice;
    })
    .catch(error => {
        console.error('Error:', error);
    });