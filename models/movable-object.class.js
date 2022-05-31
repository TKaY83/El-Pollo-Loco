class MovableObject extends DrawableObject {
    speed = 0.10;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    coinsCollected = 0;
    bottlesCollectedPercent = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
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
        if (this instanceof Character) {
            return this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x + mo.width &&
                this.y + 130 < mo.y + mo.height;
        } else {
            return this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x &&
                this.y < mo.y + mo.height;
        }

    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000
        return timePassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    isCollectingCoin() {
        this.coinsCollected += 11;
    }

    isCollectingBottle() {
        this.bottlesCollectedPercent += 11;
    }

    isThrowingBottle() {
        this.bottlesCollectedPercent -= 11;
    }

}