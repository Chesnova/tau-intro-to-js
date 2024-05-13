const names = ["Mark", "Sarah", "Ebony"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // 0, 1, 2
}

const numbers = [1, 2, 3, 4];

for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j]);
}

for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j] * 2);
}

// for in
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x] + " ";
  console.log(text);
}
console.log(text);

const numbersNew = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbersNew) {
  txt += numbersNew[x];
}
console.log(txt);

