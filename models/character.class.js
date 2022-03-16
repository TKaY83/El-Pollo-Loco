class Character extends MovableObject {
    y = 180;
    x = 20;
    height = 250;
    width = 150;
    speed = 4;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];
    world;


    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png')
        this.loadImages(this.IMAGES_WALKING);


        this.animate();

    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {



                let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 / 6; = 0, Rest 0 //0 / 5; = 0, Rest 5 // 6 / 6; = 1, Rest 0
                // i = 0, 1, 2, 3, 4, 5, ;  0, 1, 2, 3, 4, 5,
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
                /////////////////////////////////FRAGE////////////////////////////////////
                // if(this.currentImage == this.IMAGES_WALKING.length){
                //     this.currentImage =0;
                // }
            }

        }, 80)

    }

    jump() {

    }
}