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
        this.height = 40;
        this.width = 150;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.BOTTLE_BAR_IMAGES[this.resolveImageIndex()];
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