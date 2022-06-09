let canvas;
let world;
let keyboard = new Keyboard();
let lastAction;



function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    ctx = canvas.getContext('2d');
    mobileButtons();
}

function startGame() {
    document.getElementById('start-screen').style = 'display: none;';
    document.getElementById('screen').style.display = 'block;';
    document.getElementById('play').style = 'display: none;';
    document.getElementById('replay').style = 'display: block;';
    initLevel();
    init();
}

function tryAgain() {
    location.reload();
}

window.addEventListener('keydown', (event) => {

    if (event.keyCode == 38) {   // Key UP
        keyboard.UP = true;
        lastAction = new Date().getTime();
    }

    if (event.keyCode == 37) {    // Key LEFT
        keyboard.LEFT = true;
        lastAction = new Date().getTime();
    }

    if (event.keyCode == 40) {   // Key DOWN
        keyboard.DOWN = true;
        lastAction = new Date().getTime();
    }

    if (event.keyCode == 39) {   // Key RIGHT
        keyboard.RIGHT = true;
        lastAction = new Date().getTime();
    }

    if (event.keyCode == 32) {    // Key SPACE
        keyboard.SPACE = true;
        lastAction = new Date().getTime();
    }

    if (event.keyCode == 17) {    // Key CONTROL
        keyboard.STRG = true;
        lastAction = new Date().getTime();
    }
});

window.addEventListener('keyup', (event) => {

    if (event.keyCode == 38) {   // Key UP
        keyboard.UP = false;
    }

    if (event.keyCode == 37) {    // Key LEFT
        keyboard.LEFT = false;
    }

    if (event.keyCode == 40) {   // Key DOWN
        keyboard.DOWN = false;
    }

    if (event.keyCode == 39) {   // Key RIGHT
        keyboard.RIGHT = false;
    }

    if (event.keyCode == 32) {    // Key SPACE
        keyboard.SPACE = false;
    }

    if (event.keyCode == 17) {    // Key CONTROL
        keyboard.STRG = false;
    }
});



function mobileButtons(){
    document.getElementById('left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById('jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });

    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}


