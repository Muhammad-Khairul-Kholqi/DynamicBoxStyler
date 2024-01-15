// border radius
const radius = document.getElementById('radius')
const tRadius = document.getElementById('bRadius')

// background color
const bColor = document.getElementById('color')
const tColor = document.getElementById('tColor')
const tKotakBg = document.querySelector('.bg p')

const kotak = document.getElementById('kotak')

// function border radius
radius.addEventListener('input', function () {
    const border = radius.value;
    kotak.style.borderRadius = border + '%';
    tRadius.textContent = 'border-radius: ' + border + '%;';
});


// function background color
bColor.addEventListener('input', function() {
    const r = bColor.value;
    const g = bColor.value;
    // const b = bColor.value;

    kotak.style.backgroundColor = 'rgb('+ r +', '+ g +', 100)';
    tColor.textContent = 'background-color: ' + 'rgb(' + r + ', ' + g + ', 100);';
    tKotakBg.textContent = '' + r + ', ' + g + ', 100';
});

