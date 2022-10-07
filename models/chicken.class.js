class Chicken extends MovableObject {
    y = 365;
    height = 60;
    width = 45;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1450 + Math.random() * 1500;
        this.speed = 0.15 + Math.random() * 1.5;
        this.animate();
    }

    /**
     * animated the chickens
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        this.checkMoIsDead();
    }

    /**
     * checks whether the movableobject is alive or dead 
     * and shows the respective animation
     */
    checkMoIsDead() {
        setInterval(() => {
            if (!this.isDead()) this.playAnimation(this.IMAGES_WALKING);
            else this.playAnimation(this.IMAGES_DEAD);
        }, 150)
    }
}