class ThrowableObject extends MovableObject{

    constructor(x, y){
        super().loadImage('img/7.Marcadores/Icono/Botella.png')
        this.x = x
        this.y = y;
        this.height = 60;
        this.width = 60;
        this.throw()
    }

    throw() {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 5;
        }, 1000 / 60);
    }


}