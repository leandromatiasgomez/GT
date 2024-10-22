const buttom = document.getElementById(paragraph);

buttom.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'BEEP';
    document.body.appendChild(newParagraph);
});