// 1. Khai báo biến
// Thay var bằng let, const

// vả cho phép khai bao lại 1 biến đã khai báo
var a = 1;
var a = "Hello";
// let, const không cho phép khai báo lại một biến đã được khai báo
// let chỉ phép gán lại giá trị cho biến
// const không được gán lại giá trị cho biến
let b = 1;
// let b = "Cybersoft"
b = "Cybersoft";

// Cơ chế Hoisting
console.log(c);
var c = 10;
console.log(c);

// console.log(d);
let d = 5;
console.log(d);

// Scope: tầm vực hoạt động của biến
// - global: các biến toàn cục được khai báo ở ngoài cùng của file
// - function (var): các biến được khai báo bên trong hàm
// - block (let, const): các biến được khai báo bên trong {}. VD: if(){}, for(){}

function demoScope() {
  let msg = "Hello";
  let times = 4;

  if (times > 3) {
    let msg = "Hello Cybersoft";
  }
  console.log(msg);
}
demoScope();

// 2. Arrow function

// function delectation
// - Hỗ trợ hoisting
// - Có con trỏ this
// => Thường dùng để khai báo các hàm toàn cục và khai báo phương thức của object
function fn1() {}

// Arrow function
// - cú pháp ngắn gọn
// - không có con trỏ this mà sẽ dùng this của hàm cha của nó
// => Thường dùng để khao báo callback
const fn2 = () => {};

const student = {
  userName: "Alice",
  className: "BC52",
  sayHi() {
    setTimeout(() => {
      console.log(`Hello ${this.userName} - ${this.className}`);
    }, 2000);
  },
};
student.sayHi();

// 3. Default params
const sum = (a = 0, b = 0) => a + b;
console.log(sum());
console.log(sum(2, 3));
console.log(sum(4));

const calcBill = (price, discount = 0, tax = 0.1) => {
  const discountPrice = price - price * discount;
  return discountPrice + discountPrice * tax;
};

console.log(calcBill(100000));
console.log(calcBill(100000, 0.2));

// 4. Rest params
const total = (...numbers) => {
  return numbers.reduce((result, number) => {
    return result + number;
  }, 0);
};
console.log(total(1, 2, 3));
console.log(total(1, 2, 3, 4, 5, 6));

// 5. Spread Operator
const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = { ...obj1 };
console.log(obj1 === obj2);

const obj3 = { ...obj1, b: 3, d: 4 };
console.log(obj3);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr1 === arr2);

const arr3 = [...arr1, 4, 5, 6];
console.log(arr3);

const numbers = [5, 1, 13, 12, 4, 10];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// 6. Destructuring
const fullName = "Hoàng Nguyễn";
// const arrName = fullName.split(" "); // ["Hoàng", "Nguyễn"];
// const firstName = arrName[0]; // "Hoàng"
// const lastName = arrName[1]; // "Nguyễn"

const [firstName, lastName] = fullName.split(" ");
// const [firstName, lastName] = ["Hoàng", "Nguyễn"]
console.log(firstName + " " + lastName);

let admin = "john";
let guest = "Bob";
// Swap giá trị của 2 biến
[admin, guest] = [guest, admin];
console.log(admin, guest);

const user = {
  userName: "khaitruong",
  email: "khai.truong@gmail.com",
  className: "BC52",
};

// const userName = user.userName;
// const email = user.email;
// const className = user.className;

const { userName, email, className: classInfo } = user;
console.log(userName, email, classInfo);

const myObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
const { a: _a, b: _b, ...myObj1 } = myObj;
console.log(myObj1);

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [, , ...myArr1] = myArr;
console.log(myArr1);

// 7. Object Literal
const name = "Iphone 13";
const price = 25000000;
const type = "Phone";

const key = "quantity";
const value = 100;

const product = {
  // Nếu tên thuộc tính và tên biến để gán giá trị giống nhau, ta rút gọn như sau:
  name,
  price,
  type,

  // Khai báo động tên thuộc tính dựa vào giá trị của 1 biến
  [key]: value,
};
console.log(product);

// 8, for..in, for...of
const colors = ["red", "green", "blue", "black", "white"];
for (let i in colors) {
  console.log(`value: ${colors[i]}, index: ${i}`);
}
for (let value of colors) {
  console.log(`value: ${value}`);
}

// Ngoài ra có thể dùng for...in để duyệt object
for (let key in product) {
  console.log(`key: ${key} - value: ${product[key]}`);
}
