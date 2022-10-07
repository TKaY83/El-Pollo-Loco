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
        this.height = 50;
        this.width = 150;
        this.setPercentage(0);
    }
    
    /**
     * animates the coin bar
     * @param {integr} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;// => 0....5
        let path = this.COIN_BAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}