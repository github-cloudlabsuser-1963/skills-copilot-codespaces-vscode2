class Calculatrice {
    constructor() {
        this.resultat = 0;
    }

    ajouter(nombre) {
        this.resultat += nombre;
        return this.resultat;
    }

    soustraire(nombre) {
        this.resultat -= nombre;
        return this.resultat;
    }

    multiplier(nombre) {
        this.resultat *= nombre;
        return this.resultat;
    }

    diviser(nombre) {
        if (nombre === 0) {
            throw new Error("Division par zéro impossible.");
        }
        this.resultat /= nombre;
        return this.resultat;
    }

    reset() {
        this.resultat = 0;
        return this.resultat;
    }

    getResultat() {
        return this.resultat;
    }
}

// Exemple d'utilisation :
const calculatrice = new Calculatrice();
console.log(calculatrice.ajouter(10)); // Affiche 10
console.log(calculatrice.soustraire(5)); // Affiche 5
console.log(calculatrice.multiplier(3)); // Affiche 15
console.log(calculatrice.diviser(3)); // Affiche 5
console.log(calculatrice.reset()); // Réinitialise et affiche 0
console.log(calculatrice.getResultat()); // Affiche 0