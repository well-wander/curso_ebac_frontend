const message = 'Gulp funcionando!';

console.log(message);

function showMessage() {
    console.log(message);

    const feedback = document.querySelector('#feedback');
    feedback.textContent = message;
    feedback.classList.add('visible');
}
