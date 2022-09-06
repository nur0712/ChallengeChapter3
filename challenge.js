// Soal 1
function Ship(draft, crew){
    this.draft = draft
    this.crew = crew
}  
Ship.prototype.Berat = function(){
    if (this.draft > 20){
        return "Banyak nih Muatan Kapalnya"
    }
    if (this.draft < this.crew * 1.5){
        return "Lebih banyak Muatan Orangnya"
    }
    return "Banyak nih Muatan Kapalnya"
}

let emptyShip = new Ship(21, 99)
console.log(emptyShip.Berat())

// Soal 2
class Animal{
    constructor(name, age, status, legs, species){
        this.name = name
        this.age = age
        this.legs = legs
        this.species = species
        this.status = status
    }
    introduce(){
        return `Nama ${this.name}, Umur ${this.age}, Kaki ${this.legs}, Spesies ${this.species}, Status ${this.status}.`
    }
}

class Shark extends Animal{
    constructor(name, age, status){
        super(name, age, status)
        this.legs = 0
        this.species = "Shark"
    }
}

class Cat extends Animal{
    constructor(name, age, status){
        super(name, age, status)
        this.legs = 4
        this.species = "Cat"
    }
}

class Dog extends Animal{
    constructor(name, age, status, master){
        super(name, age, status)
        this.legs = 4
        this.species = "Dog"
        this.master = master
    }
    GreatMaster(){
        return `Hello ${this.master}`
    }
}

let shark = new Shark("Hiu",5,"Berenang")
let cat = new Cat("Kucing",2,"Berjalan")
let dog = new Dog("Anjing",3,"Berjalan", "Gotsujin-sama")
console.log(shark.introduce())
console.log(cat.introduce())
console.log(dog.introduce())
console.log(dog.GreatMaster())