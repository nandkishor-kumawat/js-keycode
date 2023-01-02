const body = document.querySelector('body');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.font = '110px sans-serif';


function toggleTable() {
    const table = document.querySelector('.table');
    document.querySelector('.wrap').classList.toggle('hide');
    document.querySelector('.keycode-display').classList.toggle('hide');
    table.classList.toggle('hide');
    const hidden = table.classList.contains('hide');
    document.querySelector('#table-button').textContent = hidden ? 'Table' : '⬅';
}

function drawNumberToCanvas(number) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillText(number, canvas.width / 2, canvas.height / 2, canvas.width);
    const data = canvas.toDataURL('image/png');
    const link = document.querySelector("link[rel*='icon']");
    link.href = data;
}

body.onkeydown = function (e) {
    if (!e.metaKey) {
        e.preventDefault();
    }
    drawNumberToCanvas(e.keyCode);

    document.querySelector('.keycode-display').innerHTML = e.keyCode;
    document.querySelector('.item-key .main-description').innerHTML = e.key || '';
    document.querySelector('.item-code .main-description').innerHTML = e.code || '';
    document.querySelector('.item-which .main-description').innerHTML = e.which || '';
    document.querySelector('.text-display').style.display = 'none';

    if (e.keyCode == '32') {
        document.querySelector('.item-key .main-description').innerHTML = 'Space character';
    }
};

body.onkeyup = function (e) {
    if (e.keyCode == '44') {
        body.onkeydown(e);
    }
}

function toggleTheme() {
    const html = document.querySelector("html");
    const button = document.querySelector("#theme-button");
    let theme = html.getAttribute('theme');

    theme = (theme === 'light') ? 'dark' : 'light';

    button.innerHTML = (theme === 'light') ? 'Dark theme' : 'Light theme';
    html.setAttribute('theme', theme);
}


drawNumberToCanvas('⌨️');
