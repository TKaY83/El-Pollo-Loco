class CoinBar extends DrawableObject {
    COIN_BAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/20_  copia.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/40_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/60_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100_ copia 2.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.COIN_BAR_IMAGES);
        this.x = 270;
        this.y = 0;
        this.height = 40;
        this.width = 150;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;// => 0....5
        let path = this.COIN_BAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0
        }
    }
}