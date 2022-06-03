class Cloud extends MovableObject {
    y = 0;
    height = 275;
    width = 500;
    speed = 0.8;
    
    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        // Math.random() = zufällige Zahl 0.0 -1.0 // Zahl zwischen 200 und 700
        this.x = 100 + Math.random() * 1900;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 100);  
    }
}