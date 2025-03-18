"use strict";
const text = "Hello, Bangladesh is my country. !";
console.log(text);
const country = () => {
    const regex = /Bangladesh/i;
    const match = text.match(regex);
    console.log(match);
};
country();
