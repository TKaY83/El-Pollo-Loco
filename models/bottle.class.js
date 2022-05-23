class Bottle extends MovableObject {
    y = 100;
    x = 200;
    height = 90;
    width = 90;
    IMAGES_COLLECTABLE_BOTTLES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_COLLECTABLE_BOTTLES[this.randomBottle()])
        this.loadImages(this.IMAGES_COLLECTABLE_BOTTLES);
        this.x = 200 + Math.random() * 1800;
        this.y = 340;
    }

    randomBottle() {
        return Math.round(Math.random());
    }
}