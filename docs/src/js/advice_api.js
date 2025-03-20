let adviceDiv = document.querySelector('#adviceDiv');
let idDiv = document.querySelector('#idDiv');
let card = document.querySelector('.card');

function fetchAdvice() {
fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceDiv.textContent = data.slip.advice;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

fetchAdvice();

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
        fetchAdvice();
    }
});