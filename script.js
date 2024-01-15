// border radius
const radius = document.getElementById('radius')
const tRadius = document.getElementById('bRadius')

// background color
const bColor = document.getElementById('color')
const tColor = document.getElementById('tColor')
const tKotakBg = document.querySelector('.bg p')

// height & width
const width = document.getElementById('width')
const tWidth = document.getElementById('tWidth')
const height = document.getElementById('height')
const tHeight = document.getElementById('tHeight')

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

// function width
width.addEventListener('input', function () {
    const panjang = width.value;
    kotak.style.width = panjang + 'px';
    tWidth.textContent = 'width: ' + panjang + 'px;';
});


// function height
height.addEventListener('input', function () {
    const panjang = height.value;
    kotak.style.height = panjang + 'px';
    tHeight.textContent = 'height: ' + panjang + 'px;';
});
