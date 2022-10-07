class BottleBar extends DrawableObject {
    BOTTLE_BAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.BOTTLE_BAR_IMAGES);
        this.x = 550;
        this.y = 0;
        this.height = 50;
        this.width = 150;
        this.setPercentage(0);
    }

    /**
     * animates the bottle bar
     * @param {integr} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.BOTTLE_BAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}