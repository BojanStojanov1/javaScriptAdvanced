function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function() {
        console.log(`${this.name} is eating.`);
    }
    this.sleep = function() {
        console.log(`${this.name} is sleeping.`);
    };
};
function Cat(name, age, color, ownerId){
   Object.setPrototypeOf(this, new Animal(name, age));
   this.color = color;
   this.ownerId = ownerId;
   this.meow = function() {
    console.log(`The cat ${this.name} says Meow.`);
    };
    this.getOwnerDetails = function() {
        const owner = people.find(person => person.id === this.ownerId);
        if (owner) {
            console.log(`The owner of ${this.name} is ${owner.getFullName()}.`);
        } else {
            console.log(`${this.name} does not have an owner.`);
        }
    };
};
let people = [
    new Person(1, "Bojan", "Stojanov", 30),
    new Person(2, "Davor", "Angelov", 25),
    new Person(3, "Vlatko", "Stoimenov", 30),
    new Person(4, "David", "Trajanov", 20),
    new Person(5, "Vlatko", "Temelkov", 28)
];

let cat1 = new Cat("Ceci", 3, "Black", 1);
let cat2 = new Cat("Kity", 2, "White", 3);

function PersianCat(name, age, color, ownerId, eyeColor) {
    Object.setPrototypeOf(this, new Cat (name, age, color, ownerId));
    this.eyeColor = eyeColor;
    this.furDescription = function() {
        console.log(`The cat ${this.name} has full fur!`);
    };
};
function RagDollCat(name, age, color, ownerId, weight, isFriendly) {
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.printPersonality = function(type) {
        if (type) {
            this.isFriendly = true;
            console.log(`The cat ${this.name} is friendly.`);
        } else {
            console.log(`The cat ${this.name} is not friendly.`);
        }
    };
};

let persianCat = new PersianCat("Fluffy", 4, "Gray", 2, "Green");
let dollCat = new RagDollCat("Maca", 2, "blue", 3, 4, false);
cat1.getOwnerDetails();
cat2.getOwnerDetails();
persianCat.getOwnerDetails();
persianCat.furDescription();
ragDollCat.printPersonality(false);
console.log(ragDollCat)



