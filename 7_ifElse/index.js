/*    If     */

//  Ví dụ 1: chuyển số âm sang dương
let a = -5;
if (a < 0) {
  a = -a;
}
console.log("Giá trị a:", a);

//  Ví dụ 1: Tính tiền phạt thẻ tín dụng
function ex1() {
  let credit = +document.getElementById("input-credit").value;
  let payment = +document.getElementById("input-payment").value;

  let balance = credit - payment;
  console.log(credit, payment, balance);
  let penalty = 0;

  if (balance > 0) {
    penalty = (balance * 1.5) / 100;
  }
  console.log(penalty);
  alert(`Tiền phạt:  ${penalty}`);
}

// If - Else
let b = 5;
let c = 9;

//  Ví dụ tìm số lớn trong 2 số
if (b > c) {
  console.log("b lớn nhất");
} else {
  console.log("c lớn nhất");
}

//  Ví dụ 2: Tính tiền lương theo giờ

function ex2() {
  let hour = +document.getElementById("input-hour").value;
  let salary = +document.getElementById("input-salary").value;
  let rate = hour - 40;
  let totalSalary = 0;
  if (hour > 40) {
    totalSalary = 40 * salary + rate * salary * 1.5;
  } else {
    totalSalary = hour * salary;
  }
  alert(`Tổng lương: ${totalSalary}`);
}

// If - Else If - Else

let d = 9;
let f = 9;

if (d > f) {
  console.log("d lớn nhất");
} else if (f > d) {
  console.log("f lớn nhất");
} else {
  console.log("d bằng f");
}

//  Ví dụ 3: Tính tiền mua hàng
function ex3() {
  let quantity = +document.getElementById("input-quantity").value;
  let price = +document.getElementById("input-price").value;

  totalPrice = 0;

  if (quantity < 50) {
    totalPrice = quantity * price;
  } else if (50 <= quantity <= 100) {
    totalPrice = 49 * price + (quantity - 49) * price * 0.92;
  } else {
    totalPrice =
      49 * price + (51 * price + 0.92) + (quantity - 100) * price * 0.88;
  }
  alert(`Tổng tiền hàng: ${totalPrice}`);
}

//Toán tử bậc 3
// let result = (biểu thức điều kiện) ? valueA: valueB

// let age =18;
// let allowed;
// if (age >= 18) {
//   allowed= true
// } else {
//   allowed = false
// }

let allowed = age >= 18 ? true : false;

//switch case
/*
  switch(x){
    case valueA: { tương tự if(x === valueA)
      ...
      break;
    }
    case valueB: { if(x === valueB)
      ...
      break;
    }
  }
*/
function ex4() {
  let month = +document.getElementById("input-Month").value;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("Tháng có 31 ngày");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert("Tháng có 30 ngày");
      break;
    case 2:
      alert("Tháng có 28 ngày");
      break;
    default:
      alert(`Không có tháng ${month} đâu cha`);
      break;
  }
}
