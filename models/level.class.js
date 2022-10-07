class Level {
    bigChicken;
    endboss;
    clouds;
    backgroundObjects;
    coins;
    collectableBottle;
    smallChicken;
    level_end_x = 2107;

    constructor(bigChicken, endbosses, clouds, backgroundObjects, coins, collectableBottle, smallChicken){
        this.bigChicken = bigChicken;
        this.endbosses = endbosses;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.collectableBottle = collectableBottle;
        this.smallChicken = smallChicken;
    }
}