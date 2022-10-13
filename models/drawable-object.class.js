class DrawableObject {
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
     * 
     * @param {Context} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * drawes a frame arround the objects hitbox,
     * only needed for development
     * @param {any} ctx 
     */
    drawFrame(ctx) {
        if (this.canShowFrame()) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    canShowFrame(){
        return this instanceof Character 
        || this instanceof Chicken 
        || this instanceof Endboss;
    }

    /**
     * 
     * @returns calculates the percentage of the bars
     */
    resolveImageIndex() {
        if (this.percentage >= 100) return 5;
        else if (this.percentage >= 80) return 4;
        else if (this.percentage >= 60) return 3;
        else if (this.percentage >= 40) return 2;
        else if (this.percentage >= 20) return 1;
        else return 0
    }
}