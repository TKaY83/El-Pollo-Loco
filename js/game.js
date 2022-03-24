let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    ctx = canvas.getContext('2d');

    // console.log('My Char is', world.character);
    // console.log('My Cicken is',world.enemies)


}


window.addEventListener('keydown', (event) => {

    if(event.keyCode == 38){   // Key UP
        keyboard.UP = true;
    }

    if(event.keyCode == 37){    // Key LEFT
        keyboard.LEFT = true;
    }

    if(event.keyCode == 40){   // Key DOWN
        keyboard.DOWN = true;
    }

    if(event.keyCode == 39){   // Key RIGHT
        keyboard.RIGHT = true;
    }

    if(event.keyCode == 32){    // Key SPACE
        keyboard.SPACE = true;
    }

    if(event.keyCode == 17){    // Key CONTROL
        keyboard.STRG = true;
    }

    // KEYBARD LOG
    console.log(event);   

});

window.addEventListener('keyup', (event) => {

    if(event.keyCode == 38){   // Key UP
        keyboard.UP = false;
    }

    if(event.keyCode == 37){    // Key LEFT
        keyboard.LEFT = false;
    }

    if(event.keyCode == 40){   // Key DOWN
        keyboard.DOWN = false;
    }

    if(event.keyCode == 39){   // Key RIGHT
        keyboard.RIGHT = false;
    }

    if(event.keyCode == 32){    // Key SPACE
        keyboard.SPACE = false;
    }

    if(event.keyCode == 17){    // Key CONTROL
        keyboard.STRG = false;
    }

});

