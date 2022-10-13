let level1;

function initLevel() {
    level1 = new Level(
        createLevel1Chicken(),
        createLevel1Endbosses(),
        createLevel1Clouds(),
        createLevel1Backgrounds(),
        createLevel1Coins(),
        createLevel1Bottles(),
        createLevel1SmallChicken(),
    );
}

function createLevel1Chicken() {
    return [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ]
}

function createLevel1Endbosses() {
    return [
        new Endboss(),
    ]
}

function createLevel1Clouds() {
    return [
        new Cloud(),
        new Cloud(),
        new Cloud()
    ]
}

function createLevel1Backgrounds() {
    return [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),
        // START
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1438),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1438),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1438),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1438),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 2157),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 2157),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 2157),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 2157),

    ]
}

function createLevel1Coins() {
    return [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ]
}

function createLevel1Bottles() {
    return [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
    ]
}

function createLevel1SmallChicken() {
    return [
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
    ]
}

