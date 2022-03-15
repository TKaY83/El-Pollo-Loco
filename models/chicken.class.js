class Chicken extends MovableObject {
    y = 340;
    height = 60;
    width = 45;
    //Constructor wird als erstes geladen
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        // Math.random() = zufällige Zahl 0.0 -1.0 // Zahl zwischen 200 und 700
        this.x = 250 + Math.random() * 500;

    }
}