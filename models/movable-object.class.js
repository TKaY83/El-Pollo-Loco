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
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 / 6; = 0, Rest 0 //0 / 5; = 0, Rest 5 // 6 / 6; = 1, Rest 0
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
        console.log('Moving Right');
    }


    moveLeft() {
        setInterval(() => {
            if (this.x <= -450) {
                this.x = 700
            }

            this.x -= this.speed;
        }, 1000 / 60);
    }
}