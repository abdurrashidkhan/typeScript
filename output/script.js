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
//
