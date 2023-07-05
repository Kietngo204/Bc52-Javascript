let btn = function () {
  alert("Hello World");
};
//Variable
let label = "cybersoft";
console.log(label);
let num = 10;
console.log(num);
let score = 80;
console.log("score", score);
score = 100;
console.log("score sau khi thay doi", score);
const pi = 3.14;
console.log("pi = ", pi);
// DataType
let age = 25;
let number = 12.5;
let total = 1_000_000;
console.log("age", age);
console.log("number", number);
console.log("total", total);
// Sử dụng toán tử + - * /
let a = 8;
let b = 13;
let c = a + b;
console.log(c);
let d = b - a;
let e = a * b;
let f = b / a;
console.log(d, e, f);
let g = b % a;
console.log(g);
let h = a++;
console.log("h", h, "a", a);
let i = ++a;
console.log("i", i, "a", a);
// Toán tử gán: =, +=, -=, *=, /+, %=
a = a + 3;
console.log(a);
b += 3;
console.log(b);
b *= 2;
console.log(b);
//Viết chương trình tính chiều dài cạnh huyển khi biết 2 cạnh góc vuông
let AB = 3;
let AC = 4;
let BC = Math.pow(AB, 2) + Math.pow(AC, 2);
console.log(Math.sqrt(BC));
//Math
Math.pow(3, 2); // 3 mũ 2
Math.sqrt(25); // Tính căn bậc 2
Math.floor(1.5); //Làm tròn xuống 😂😂
Math.ceil(1.5); //Làm tròn lên 😂😂
console.log(Math.round(2.5)); //Làm tròn tới số nguyên gần nhất
// Viết chương trình tính nhập số nguyên dương, tính tổng 3 kí số
let n = 429;
let phanTram = Math.floor(n / 100);
console.log(phanTram);
let phanChuc = Math.floor((n % 100) / 10);
console.log(phanChuc);
let phanDonVi = n % 10;
console.log(phanDonVi);
let ketQua = phanTram + phanChuc + phanDonVi;
console.log("ket qua", ketQua);

// String
let message = "hello BC52";
let username = "alice";
let firstName = "hieu";
let lastName = "dang";
let fullName = firstName + " " + lastName;
console.log(fullName);
// Chuỗi sử dụng dấu ``
// let address = `Cao thang, q3, ho chi minh`;
let content = `
ABC
123
XYZ asd`;
console.log("content:", content);
// cho phep noi chuoi lien mach hon
let street = "Cao thang";
let district = "Quan 3";
let city = "Ho Chi Minh";
let address = `${street}, ${district}, ${city}`;
console.log(address);

// null
let birthday = null;
birthday = "25/05/2002";
console.log(birthday);

// undefined
let product;
// product = 10;
console.log(product);

//Boolean
// Cách đặt tên biến boolean thường có chữ is..., has..., should...
let isActive = true;

// Từ khóa "typeof" dùng để kiểm tra kiểu dữ liệu của một biến
console.log("typeof isActive:", typeof isActive);
console.log("typeof product:", typeof product);
console.log("typeof address:", typeof address);
