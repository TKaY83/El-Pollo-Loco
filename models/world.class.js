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
    alreadyThrowed = false;
    throw_sound = new Audio('audio/throw.mp3');
    background_music = new Audio('audio/background_music.mp3');
    collecting_coin_sound = new Audio('audio/coin.mp3');
    collecting_bottle_sound = new Audio('audio/collect-bottle.mp3');
    hurt_sound = new Audio('audio/hurt.mp3')
    kill_chicken = new Audio('audio/fart.mp3')
    endboss_hurt = new Audio('audio/endboos_hurt.mp3')

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
        this.level.endboss[0].world = this;
    }

    collisionsInterval() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 50);
    }

    run() {
        this.collisionsInterval();
        this.hitAnimationIntervall();
        this.backgroundMusicPlay();
        this.ckeckBossCollision();
    }

    backgroundMusicPlay() {
        this.background_music.play();
        this.background_music.volume = 0.08;
        this.background_music.loop = true;
    }

    backgroundMusicPauseIcon() {
        this.background_music.pause();
        document.getElementById('off').style.display = 'none';
        document.getElementById('on').style.display = 'block';

    }

    backgroundMusicplayIcon() {
        this.background_music.play();
        document.getElementById('on').style.display = 'none';
        document.getElementById('off').style.display = 'block';
    }

    checkThrowObjects() {
        if (this.bottleAmount > 0 && this.spaceNotPushed()) {
            this.throwBottle();
        }
    }

    spaceNotPushed() {
        return this.keyboard.SPACE && this.alreadyThrowed == false
    }

    throwBottle() {
        this.alreadyThrowed = true;
        this.throwSoundPlay();
        let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this);
        this.throwableObjects.push(bottle);
        this.bottleAmount--;
        this.character.isThrowingBottle();
        this.bottleBar.setPercentage(this.character.bottlesCollectedPercent);
        this.preventBottleSpaming();
    }

    preventBottleSpaming() {
        setTimeout(() => {
            this.alreadyThrowed = false;
        }, 300);
    }

    throwSoundPlay() {
        this.throw_sound.currentTime = 0;
        this.throw_sound.play();
        this.throw_sound.volume = 0.1;
    }

    hitAnimationIntervall() {
        setInterval(() => {
            let hitAnimation = this.checkHitingEndboss();
            clearInterval(hitAnimation);
        }, 300);
    }

    checkCollisions() {
        this.checkCollisionWithBigChicken();
        this.checkCollisionWithSmallChicken();
        this.checkCollisionWithCoin();
        this.checkCollisionWithCollectableBottle();

    }

    ckeckBossCollision() {
        setInterval(() => {
            if (this.character.isColliding(this.level.endboss[0])) {
                this.character.hit();
                this.characterIsDead();
            }
        }, 500);
    }

    checkHitingEndboss() {
        if (!this.level.endboss.endbossDead) {
            this.throwableObjects.forEach(throwableObject => {
                if (this.level.endboss[0].isColliding(throwableObject)) {
                    this.hittingEndbos();
                }
                if (this.level.endboss[0].energy == 0) {
                    this.endbossIsDead(throwableObject);
                }
            });
        }
    }

    characterIsDead() {
        this.character.energy = 0;
        if (!this.character.isDead()) {
            this.hurt_sound.play();
            this.hurt_sound.volume = 0.2;
        }
    }

    /**
     * 
     * @param {Array} throwableObject 
     */

    hittingEndbos(throwableObject) {
        this.throwableObjects.splice(this.throwableObjects.indexOf(throwableObject), 1);
        this.endboss_hurt.currentTime = 0;
        this.endboss_hurt.play();
        this.endboss_hurt.volume = 0.2;
        this.level.endboss[0].energy -= 20;
        this.level.endboss[0].bossHitAnimation();
    }

    endbossIsDead() {
        this.level.endboss.endbossDead = true;
        setTimeout(() => {
            this.level.endboss.splice(this.level.endboss[0]);
        }, 3000);
    }

    checkCollisionWithBigChicken() {
        this.level.bigChicken.forEach((bigEnemy) => {
            if (this.bigChickenDead(bigEnemy)) {
                this.killBigChicken(bigEnemy);
                this.killBigChickenPlay();
            }
            if (this.enemyHurtCaracter(bigEnemy)) {
                this.characterHurtPlay();
            }
        });
    }

    killBigChicken(bigEnemy) {
        bigEnemy.speed = 0;
        bigEnemy.energy = 0;
        setTimeout(() => {
            this.level.bigChicken.splice(this.level.bigChicken.indexOf(bigEnemy), 1);
        }, 2000);
    }

    bigChickenDead(bigEnemy) {
        return !bigEnemy.isDead()
            && this.character.isColliding(bigEnemy)
            && this.character.isAboveGround()
            && this.character.speedY < 0
    }

    enemyHurtCaracter(bigEnemy) {
        return this.character.isColliding(bigEnemy)
            && !this.character.isAboveGround()
            && !bigEnemy.isDead()
            && !this.character.isDead()
    }

    characterHurtPlay() {
        this.character.hit();
        this.hurt_sound.play();
        this.hurt_sound.volume = 0.2;
        this.healthBar.setPercentage(this.character.energy);
    }

    killBigChickenPlay() {
        this.kill_chicken.currentTime = 0;
        this.kill_chicken.play();
        this.kill_chicken.volume = 0.05;
    }

    checkCollisionWithSmallChicken() {
        this.level.smallChicken.forEach((smallEnemy) => {
            if (this.character.isColliding(smallEnemy)) {
                this.character.hit();
                this.healthBar.setPercentage(this.character.energy);
                if (!this.character.isDead()) {
                    this.hurt_sound.play();
                    this.hurt_sound.volume = 0.2;
                }
            }
        });
    }

    checkCollisionWithCoin() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.character.isCollectingCoin();
                this.coinCollectPlay();
                this.coinBar.setPercentage(this.character.coinsCollected);
            }
        });
    }

    coinCollectPlay() {
        this.collecting_coin_sound.currentTime = 0;
        this.collecting_coin_sound.play();
        this.collecting_coin_sound.volume = 0.05;
    }

    checkCollisionWithCollectableBottle() {
        this.level.collectableBottle.forEach(bottle => {
            if (this.character.isColliding(bottle)) {
                this.collectBottle(bottle);
            }
        });
    }

    collectBottle(bottle) {
        this.bottleAmount++;
        this.level.collectableBottle.splice(this.level.collectableBottle.indexOf(bottle), 1);
        this.character.isCollectingBottle();
        this.collectingBottlePlay();
        this.bottleBar.setPercentage(this.character.bottlesCollectedPercent);
    }

    collectingBottlePlay() {
        this.collecting_bottle_sound.currentTime = 0;
        this.collecting_bottle_sound.play();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addAllObjects();
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addAllToMap();
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        this.animationFrame();
    }

    animationFrame() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addAllToMap() {
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
    }

    addAllObjects() {
        this.addObjectsToMap(this.level.bigChicken);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.collectableBottle);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.smallChicken);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
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
