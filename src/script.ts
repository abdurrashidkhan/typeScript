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

// interface of object
interface Student {
  name: string;
  age: number;
  country: string;
}

const students: Student = {
  name: "John",
  age: 20,
  country: "Bangladesh",
};
console.log(countries);
