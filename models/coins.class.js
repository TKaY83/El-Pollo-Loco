class Coin extends MovableObject {
    y = 100;
    x = 200;
    height = 100;
    width = 100;
    IMAGES_COIN = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    constructor(){
        super().loadImage(this.IMAGES_COIN[0])
        this.loadImages(this.IMAGES_COIN);
        this.animate();
        this.x = 100 + Math.random() * 2000;
        this.y = 20 + Math.random() * 100;
    }


    animate() {
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 400)


    }
}