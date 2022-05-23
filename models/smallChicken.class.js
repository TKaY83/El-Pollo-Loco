class SmallChicken extends MovableObject {
    y = 380;
    height = 35;
    width = 30;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    //Constructor wird als erstes geladen
    constructor() {
        super().loadImage();
        this.loadImages(this.IMAGES_WALKING);
        // Math.random() = zufällige Zahl 0.0 -1.0 // Zahl zwischen 200 und 700
        this.x = 250 + Math.random() * 2500;
        this.speed = 0.35 + Math.random() * 1.5;
        this.animate();
    }



    animate() {
        setInterval(() => {
            this.moveLeft();
            // this.otherDirection = false;
        }, 1000 / 60);
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 150);


    }

}