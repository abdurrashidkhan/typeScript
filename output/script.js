"use strict";
const text = "Hello, Bangladesh is my country. !";
console.log(text);
const country = () => {
    const regex = /Bangladesh/i;
    const match = text.match(regex);
    console.log(match);
};
country();
// arrar
const countries = ["Bangladesh", "istan", "Palestine"];
console.log(countries);
const students = {
    name: "Rashid khan",
    age: 20,
    country: "Bangladesh",
};
console.log(students);
//type  function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(4, 5));
const userInfo = (user) => {
    console.log(user);
};
userInfo({ name: "rashid", email: "rashidkhan@gmail.com", number: "016177" });
// function signatures
let calculation;
calculation = (a, b, type) => {
    if (type === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 4, "add"));
// function signatures with object
let userData;
userData = (
// id: string,
userInfo) => {
    return userInfo;
};
console.log(userData({ name: "rashidkhan", email: "rashid@gmail.com" }));
// class
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is playing.`);
    }
}
const mas = new Player("Rahid Khan", 22, "Bangladesh");
const njr = new Player("Naymar", 32, "brazilian");
const players = [];
console.log(njr.name);
players.push(mas);
//
//  asses modifications
class Friends {
    constructor(n, age, profession, c) {
        this.name = n;
        this.age = age;
        this.profession = profession;
        this.city = c;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm a ${this.profession}.`);
    }
}
const friend1 = new Friends("Rashid", 22, "web developer", "Dhaka");
const friend2 = new Friends("Rashid", 22, "web developer", "Dhaka");
friend1.profession = "Ami Vanala";
console.log(friend1.profession);
