var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (const item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function percentage() {
    screen.value = parseFloat(screen.value) / 100;
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value += '**';
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log10(screen.value);
}

function pi() {
    screen.value = Math.PI;
}

function e() {
    screen.value = Math.E;
}

function fact() {
    const num = parseInt(screen.value);

    if (num < 0 || isNaN(num)) {
        screen.value = 'Error';
        return;
    }

    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    screen.value = result;
}

function backspc() {
    screen.value = screen.value.slice(0, -1);
}