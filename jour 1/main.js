//console.log('Hello World !')

//Mise en pratique 1

/* var a = 20
console.log(a)
var b = 5
console.log(b)

if (a < 30) {
    console.log('a < 30')
} 

var c = (a/b)

console.log(c) */

//Mise en pratique 2

/* var nom = "Zedjiga Louzini"
var argent = 800
var compteurAchats = 0

var produit = "sacs de céréales "
var quantité = 40
var prix = 30

function soustraction(argent, prix) {
    return argent-prix
}

while (quantité != 0 && argent > 30) {
    argent = soustraction(argent, prix)
    quantité --
    compteurAchats ++
}

console.log("quantité possédée de", produit, ":", compteurAchats)
console.log("quantité restante en magasin de", produit, ":", quantité)
if (quantité == 0) {
    console.log("produit en rupture de stock")
}
else {
    console.log("stocks encore suffisants")
}
console.log("argent restant :", argent, "$") */

//Mise en pratique 3

class Unit {
    constructor(name, attack, hit, hp, speed){
        this.name = name
        this.attack = attack
        this.hit = hit
        this.hp = hp
        this.speed = speed
    }

    attackRoll() {
        var a = Math.random()
        if (a >= this.hit) {
            return this.attack
        }
        else {
            return 0
        }
    }

    takeDamage(damage) {
        this.hp -= damage
    }
}

let unit1 = new Unit("Silas", 3, 0.5, 10, 1)
let unit2 = new Unit("Juju", 2, 0.75, 9, 2)

console.log("Combat entre", unit1.name, "et", unit2.name, "!")

while (unit1.hp > 0 && unit2.hp > 0) {
    if (Math.max(unit1.speed, unit2.speed) == unit2.speed) {
        var atk1 = unit2.attackRoll()
        unit1.takeDamage(atk1)
        console.log(unit1.name, "a encore", unit1.hp, "points de vie.")
        var atk2 = unit1.attackRoll()
        unit2.takeDamage(atk2)
        console.log(unit2.name, "a encore", unit2.hp, "points de vie.")
    }
    else {
        unit2.takeDamage(unit1.attackRoll())
        console.log(unit2.name, "a encore", unit2.hp, "points de vie.")
        unit1.takeDamage(unit2.attackRoll())
        console.log(unit1.name, "a encore", unit1.hp, "points de vie.")
    }
}

if (unit1.hp <= 0) {
    console.log(unit2.name, "a gagné !")
}
else {
    console.log(unit1.name, "a gagné !")
} 