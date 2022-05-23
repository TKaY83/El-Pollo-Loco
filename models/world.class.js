class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    bottleAmount = 0;
    keyboard;
    lastAction;
    camera_x = 0;
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    throwableObjects = [];
    throw_sound = new Audio('audio/throw.mp3');
    // background_music = new Audio('audio/background_music.mp3');
    collecting_coin_sound = new Audio('audio/coin.mp3');
    collecting_bottle_sound = new Audio('audio/collect-bottle.mp3');

    constructor(canvas, keyboard,) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;

        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {

            this.checkCollisions();
            this.checkThrowObjects();
        }, 100);
        // this.background_music.play();
        // this.background_music.volume = 0.04;
        // this.background_music.loop = true;
    }

    checkThrowObjects() {
        if (this.bottleAmount > 0) {
            if (this.keyboard.SPACE) {
                this.throw_sound.currentTime = 0;
                this.throw_sound.play();
                this.throw_sound.volume = 0.1;
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this);
                this.throwableObjects.push(bottle);
                this.bottleAmount--;
                this.character.isThrowingBottle();
                this.bottleBar.setPercentage(this.character.bottlesCollectedPercent);


            }
        }

    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.healthBar.setPercentage(this.character.energy);
            }
        });
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.character.isCollectingCoin();
                this.collecting_coin_sound.currentTime = 0;
                this.collecting_coin_sound.play();
                this.collecting_coin_sound.volume = 0.05;
                this.coinBar.setPercentage(this.character.coinsCollected);
            }

        });
        this.level.collectableBottle.forEach(bottle => {
            if (this.character.isColliding(bottle)) {
                this.bottleAmount++;
                this.level.collectableBottle.splice(this.level.collectableBottle.indexOf(bottle), 1);
                this.character.isCollectingBottle();
                this.collecting_bottle_sound.currentTime = 0;
                this.collecting_bottle_sound.play();
                this.bottleBar.setPercentage(this.character.bottlesCollectedPercent);
            }
        });
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.collectableBottle);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.smallChicken);

        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);


        this.ctx.translate(-this.camera_x, 0);

        // draw() wird immerwieder ausgefürt
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
