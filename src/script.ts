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
//
