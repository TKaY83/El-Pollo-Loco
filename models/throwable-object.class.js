class ThrowableObject extends MovableObject {

    IMAGES_FLYING_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
    ];
    
    IMAGES_SPLASHING_BOTTLE = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];

    splash_sound = new Audio('audio/splash.mp3');

/**
 * @param {x coordinate} x 
 * @param {y coordinate} y 
 * @param {World Object} world 
 */
    constructor(x, y, world) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_FLYING_BOTTLE);
        this.loadImages(this.IMAGES_SPLASHING_BOTTLE);
        this.x = x;
        this.y = y;
        this.world = world;
        this.height = 60;
        this.width = 60;
        this.throw();
        this.animate();
    }

    /**
     * calculates the throwing distance
     */
    throw() {
        if (this.world.bottleAmount > 0) {
            this.speedY = 20;
            this.applyGravity();
            setInterval(() => {
                this.x += 8;
            }, 1000 / 60);
        }
    }
    
    /**
     * animates the flying ans splashing bottle
     */
    animate() {
        let clearBottle = setInterval(() => {
            if (this.y < 320 && !this.isColliding(this.world.endboss)) 
                this.playAnimation(this.IMAGES_FLYING_BOTTLE);
            else {
                this.playAnimation(this.IMAGES_SPLASHING_BOTTLE);
                this.spashSoundPlay();
                clearInterval(clearBottle);
            }
        }, 50);
    }

    spashSoundPlay() {
        this.splash_sound.volume = 0.2;
        this.splash_sound.play();
    }
}