const radius = document.getElementById('radius')
const tRadius = document.getElementById('bRadius')

const kotak = document.getElementById('kotak')

radius.addEventListener('input', function () {
    const border = radius.value;
    kotak.style.borderRadius = border + '%';
    tRadius.textContent = 'border-radius: ' + border + '%;';
});