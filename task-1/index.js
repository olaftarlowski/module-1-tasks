const year = 2010;
let a;

const isLeapYear = new Date(year, 1, 29).getMonth() == 1;

// if (isLeapYear) {
//   a = "This is a leap year";
// } else {
//   a = "This isn't a leap year";
// }

a = `This is${isLeapYear ? "" : "n't"} a leap year`;

console.log(year);
console.log(a);