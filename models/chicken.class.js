class Chicken extends MovableObject {
    y = 365;
    height = 60;
    width = 45;
    dead = false;
    dead_animation = false;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    //Constructor wird als erstes geladen
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        // Math.random() = zufällige Zahl 0.0 -1.0 // Zahl zwischen 200 und 700
        this.x = 450 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 1.5;
        this.animate();
    }



    animate() {
        setInterval(() => {
            this.moveLeft();
            // this.otherDirection = false;
        }, 1000 / 60);

        setInterval(() => {
            if (!this.dead_animation) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }

        }, 150)
    }

    deadAnimation() {
        this.dead_animation = true;
        this.dead = true;
        setTimeout(() => {
            this.dead_animation = false;
            this.dead = false;
        }, 500);
    }

}