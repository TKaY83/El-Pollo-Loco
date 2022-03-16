class Chicken extends MovableObject {
    y = 365;
    height = 60;
    width = 45;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    //Constructor wird als erstes geladen
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        // Math.random() = zufällige Zahl 0.0 -1.0 // Zahl zwischen 200 und 700
        this.x = 250 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 1.5;
        this.animate();
    }



    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 / 6; = 0, Rest 0 //0 / 5; = 0, Rest 5 // 6 / 6; = 1, Rest 0
            // i = 0, 1, 2, 3, 4, 5, ;  0, 1, 2, 3, 4, 5,
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            /////////////////////////////////FRAGE////////////////////////////////////
            // if(this.currentImage == this.IMAGES_WALKING.length){
            //     this.currentImage =0;
            // }
        }, 150)


    }

}