class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    collectableBottle;
    smallChicken;
    level_end_x = 2107;

    constructor(enemies, clouds, backgroundObjects, coins, collectableBottle, smallChicken){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.collectableBottle = collectableBottle;
        this.smallChicken = smallChicken;
    }
}