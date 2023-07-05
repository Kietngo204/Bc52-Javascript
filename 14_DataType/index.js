// Các phương thức của các kiểu dữ liệu cơ bản

// - Number
let a = 1e8;

console.log("toLocaleString:", a.toLocaleString());

let b = 1234.56789;
console.log("toFixed:", b.toFixed(2));

let c = 10;
console.log("toString:", c.toString());

// Phương thức của đối tượng Math
let max = Math.max(3, 8, 15, 4);
console.log("Math.max:", max);
let min = Math.min(3, 8, 15, 4);
console.log("Math.min:", min);

// random ra số ngẫu nhiên trong khoảng min -> max:
// Math.floor(Math.random() * (max-min) + min)
let random = Math.floor(Math.random() * (100 - 50) + 50);
console.log("Math.random:", random);

// - String
let msg = "Hello Cybersoft";
console.log("toUpperCase:", msg.toUpperCase());
console.log("toLowerCase:", msg.toLowerCase());

// trim, trimEnd, trimStart
let username = "        Bob          ";
let trimUserName = username.trim();
console.log("trim:", trimUserName);

let sliceMsg = msg.slice(6);
console.log("slice:", sliceMsg);

let indexCybersoft = msg.indexOf("Cybersoft");
console.log("indexOf:", indexCybersoft);

let includeCybersoft = msg.includes("Cybersoft");
console.log("includes:", includeCybersoft);

let data = "Hello BC52 BC52 BC52";
let replaceData = data.replace("BC52", "World");
console.log("replace:", replaceData);

let replaceAllData = data.replaceAll("BC52", "World");
console.log("replaceAll:", replaceAllData);

let str = "ABC*123$XYZ";
let replaceAllStr = str.replaceAll(/[!@#$%^&*()]/g, " ");
console.log(replaceAllStr);

// primitive values & reference value
// primitive value: number, string, boolean, null undefined
// reference value: array, object

let x = 5;
let y = x;
y++;
console.log("x, y:", x, y);

let obj = { name: "A", age: 18 };
obj1 = obj;
obj1.name = "B";
console.log("obj, obj1:", obj, obj1);

// Để sao chép ra 1 object mới, kế thừa tất cả thuộc tính và phương thức của object hiện tại
// let obj2 = Object.assign({}, obj);
let obj2 = { ...obj };
obj2.age = 25;
obj2.name = "C";
console.log("obj, obj2:", obj, obj2);

let arr = [1, 2, 3];
let arr1 = arr;
arr1.push(8);
console.log("arr, arr1:", arr, arr1);

// Sao chép array mới, kế thừa tất cả phần tử của array hiện tại
// let arr2 = arr.slice();
let arr2 = [...arr];
arr2.push(5);
console.log("arr, arr2:", arr, arr2);

let o1 = { a: 1 };
let o2 = { a: 1 };
console.log(o1 === o2);

// Các phương thức nâng cao của mảng

// - map
let nums = [1, 2, 3, 4, 5];

let numX2 = [];
for (let i = 0; i < nums.length; i++) {
  let value = nums[i] * 2;
  numX2.push(value);
}
console.log("numX2:", numX2);

let numX3 = nums.map(callBackNumX3);
function callBackNumX3(value, index) {
  return value * 3;
}
console.log("numX3:", numX3);

let numX4 = nums.map((value, index) => {
  return value * 4;
});
console.log("numX4:", numX4);

// - filter

let numOdd = nums.filter((value, index) => {
  return value % 2 !== 0;
});
console.log("numOdd:", numOdd);

// - reduce
// [1, 2, 3, 4, 5]
let total = nums.reduce((result, value, index) => {
  return result + value;
}, 0);
console.log("total:", total);
// Lần 1: value = 1, result = 0 => result + value = 1
// Lần 2: value = 2, result = 1 => result + value = 3
// Lần 3: value = 3, result = 3 => result + value = 6
// Lần 4: value = 4, result = 6 => result + value = 10
// Lần 5: value = 5, result = 10 => result + value = 15

let product = [
  { id: 1, name: "I phone 13 promax", brand: "Apple", price: 32_000_000 },
  { id: 2, name: "Samsung S23 ultra", brand: "Samsung", price: 28_000_000 },
  { id: 3, name: "Oppo X5", brand: "Oppo", price: 18_000_000 },
  { id: 4, name: "Xiaomi Mi 13", brand: "Xiaomi", price: 15_000_000 },
  { id: 5, name: "Iphone 13", brand: "Apple", price: 27_000_000 },
  { id: 6, name: "Samsung Note 20", brand: "Samsung", price: 20_000_000 },
];

// Yêu cầu 1: Trả ra một mảng chỉ bao gồm tên của các sản phẩm
let productNames = product.map((value, index) => {
  return value.name;
}, 0);
console.log(productNames);

// Yêu cầu 2: Trả ra một mảng mới chỉ bao gồm các sản phẩn của Apple
let productApple = product.filter((value, index) => {
  return value.brand.includes("Apple");
});
console.log(productApple);

// Yêu cầu 3: Từ mảng product, hiển thị giao diện theo cấu trúc sau
/*
    <ul>
        <li>I phone 13 promax - 32_000_000</li>
        <li>Samsung S23 ultra - 28_000_000</li>
        ...
    </ul>
*/

let html = product.reduce((result, value) => {
  return result + `${value.name} - ${value.price.toLocaleString()}<br>`;
}, "");

document.getElementById("product-list").innerHTML = html;

// find, findIndex

// Tìm sản phẩm có id = 3
let product1 = product.find((value) => {
  return value.id === 3;
});
console.log("product1 id = 3:", product1);

let productIndex = product.findIndex((value) => {
  return value.id === 5;
});
console.log("index product id = 3:", productIndex);

// - forEach
product.forEach((value, index) => {
  console.log(`Product ${value.id} - ${value.name}`);
});
