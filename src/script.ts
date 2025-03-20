const text = "Hello, Bangladesh is my country. !";
console.log(text);

const country = () => {
  const regex = /Bangladesh/i;
  const match = text.match(regex);
  console.log(match);
};
country();

// arrar
const countries: string[] = ["Bangladesh", "istan", "Palestine"];
console.log(countries);

// interface of object
interface Student {
  name: string;
  age: number;
  country: string;
}

const students: Student = {
  name: "Rashid khan",
  age: 20,
  country: "Bangladesh",
};
console.log(students);

//type  function
const sum = (a: number, b: number) => {
  return a + b;
};
console.log(sum(4, 5));

// type aliases
type userType = { name: string; email: string; number: string };

const userInfo = (user: userType) => {
  console.log(user);
};
userInfo({ name: "rashid", email: "rashidkhan@gmail.com", number: "016177" });

// function signatures
let calculation: (a: number, b: number, type: string) => number;

calculation = (a, b, type) => {
  if (type === "add") {
    return a + b;
  } else {
    return a - b;
  }
};
console.log(calculation(5, 4, "add"));
// function signatures with object
let userData: (
  // id: number | string,
  usersInfo: {
    name: string;
    email: string;
  }
) => void;

userData = (
  // id: string,
  userInfo: {
    name: string;
    email: string;
  }
) => {
  return userInfo;
};
console.log(userData({ name: "rashidkhan", email: "rashid@gmail.com" }));

// class
class Player {
  name: string;
  age: number;
  country: string;
  constructor(n: string, a: number, c: string) {
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
const players: Player[] = [];
console.log(njr.name);
players.push(mas);

//
//  asses modifications
class Friends {
  public name: string;
  private age: number;
  profession: string;
  readonly city: string;
  constructor(n: string, age: number, profession: string, c: string) {
    this.name = n;
    this.age = age;
    this.profession = profession;
    this.city = c;
  }
  introduce() {
    console.log(
      `Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm a ${this.profession}.`
    );
  }
}
const friend1 = new Friends("Rashid", 22, "web developer", "Dhaka");
const friend2 = new Friends("Rashid", 22, "web developer", "Dhaka");
friend1.profession = "Ami Vanala";
console.log(friend1.profession);
