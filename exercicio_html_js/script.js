const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = Number(document.querySelector('#campoA').value);
    const campoB = Number(document.querySelector('#campoB').value);

    campoB > campoA ? alert('✅ Formulário válido!') : alert('❌ Ops, formulário inválido!');

});