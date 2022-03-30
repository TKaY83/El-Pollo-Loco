class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.10;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 180
    }


    // laodImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', 'img/image3.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 / 6; = 0, Rest 0 //0 / 5; = 0, Rest 5 // 6 / 6; = 1, Rest 0
        // i = 0, 1, 2, 3, 4, 5, ;  0, 1, 2, 3, 4, 5,
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        /////////////////////////////////FRAGE////////////////////////////////////
        // if(this.currentImage == this.IMAGES_WALKING.length){
        //     this.currentImage =0;
        // }
    }


    moveRight() {
        this.x += this.speed;


    }


    moveLeft() {
        this.x -= this.speed;

    }
    // Junus hat die funktion doppelt// auf dem charakter objekt
    jump() {
        this.speedY = 30;
    }


    // isColliding.isColliding(chicken)
    isColliding(mo) {
        // if (character.x + character.width > chicken.x &&
        //     character.y + character.height > chicken.y &&
        //     character.x < chicken.x &&
        //     character.y < chicken.y + chicken.height) {

        // }
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;

    }


    hit(){
        this.energy -= 5;
        if (this.energy < 0){
            this.energy = 0;
        } else{
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000
        return timePassed < 0.3;
    }

    isDead(){
        return this.energy == 0;
    }
}