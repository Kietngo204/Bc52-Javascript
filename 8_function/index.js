// Định nghĩa hàm

function showMessage() {
  console.log("Hello World");
}
// Gọi hàm
showMessage();
// Hàm có tính chất tái sử dụng
showMessage();
showMessage();
showMessage();

// Hàm có tham số
function greeting(name) {
  console.log(`Hello ${name}`);
  return name;
}
greeting("Alice");
greeting("Bob");

function sum(a, b) {
  return a + b;
}
let sum1 = sum(5, 8);
console.log("sum1:", sum1);

// Tầm vực hoạt động của biến
// biến cục bộ (local variable): những biến được khai báo bên trong hàm, chỉ có thể được truy cập bên trong hàm đó
// biến bên ngoài(outer variable): những biến được khai báo bên ngoài hàm, thì có thể truy cập những biến đó
let username = "danny";
function showMsg() {
  let msg = `Hello ${username}`;
}
showMsg();
// console.log("Biến msg:", msg); // lỗi

// Cách khác để định nghĩa hàm

// function expression
const doSomething = function () {
  console.log("function expression");
};
doSomething();

// arrow function
const doSomething1 = () => {
  console.log("arrow function");
};
doSomething1();

// Viết hàm nhận vào 1 số và trả về kết quả bình phương của số đó
// const square = (a) => {
//   return Math.pow(a, 2);
// };
// Cho phép bỏ qua cặp ngoặc nhọn ra từ khóa return khi trả về giá trị
const square = (a) => Math.pow(a, 2);
let x = square(3);
console.log("x: ", x);
let y = square(7);
console.log("y: ", y);

let btn2El = document.getElementById("btn-2");
btn2El.onclick = () => alert(123);

// Callback function
// tham số callback là 1 hàm
function doSomething2(callback) {
  console.log("Ví dụ callback function");
  callback();
}

function displayMessage() {
  console.log("Hello Js");
}

doSomething2(displayMessage);

// Xây dựng chương trình như sau: Hiển thị ra 1 câu hỏi và 2 tùy chọn YES/NO. Dựa vào cái lựa chọn của người dùng mà ta sẽ thực hiện các hành động khác nhau

document.getElementById("btn-3").onclick = () => {
  function askInformation(question, yesCallback, noCallback) {
    let isAllowed = confirm(question);
    if (isAllowed) {
      yesCallback();
    } else {
      noCallback();
    }
  }
  function yes1() {
    alert("Ok");
  }
  function no1() {
    alert("Đéo");
  }
  function yes2() {
    alert("Ok luôn");
  }
  function no2() {
    alert("Đéo nhé");
  }
  let ask1 = "Bạn có cho phép truy cập các thông tin ẩn danh hay không";
  let ask2 = "Bạn có cho phép truy cập vị trí hay không";
  // askInformation(ask1, yes1, no1);
  // askInformation(ask2, yes2, no2);
  let ask3 = "Cho phép truy cập webcam";
  let ask4 = "Cho phép truy cập camera";
  askInformation(
    ask4,
    () => {
      alert("Cho phép truy cập camera");
    },
    () => {
      alert("Không cho phép truy cập camera");
    }
  );
};
