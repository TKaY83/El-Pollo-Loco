class HealthBar extends DrawableObject {
    HEALTH_BAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.HEALTH_BAR_IMAGES);
        this.x = 10;
        this.y = 0;
        this.height = 50;
        this.width = 150;
        this.setPercentage(100);
    }

    /**
     * animates the health bar
     * @param {integr} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.HEALTH_BAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
};