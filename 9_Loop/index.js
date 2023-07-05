// 1. Vòng lặp While

// B1: Khởi tạo biến điều kiện
let i = 1;
// B2: Khai bao while và biểu thức điều kiện
while (i <= 5) {
  console.log("Hello, Cybersoft");
  i++;
}

/*
    Bài tập 1:
*/
const btn1 = document.getElementById("btn1");
btn1.onclick = () => {
  let iNum = +document.getElementById("input-1").value;
  let outputEl = document.getElementById("noti");
  n = 1;
  while (iNum > 1) {
    iNum = Math.floor(iNum / 2);
    outputEl.innerHTML += `<p>count: ${n} - num: ${iNum}</p>`;
    n++;
  }
  outputEl.classList.remove("d-none");
};

// 2. Vòng lặp do...while
// Điểm khác biệt so với vòng lặp while là do...while sẽ thực hiện các đoạn mã 1 lần trước khi kiểm tra điều kiện
let j = 1;
do {
  console.log("Xin chào, BC52");
  j++;
} while (j >= 5);

/*
    Bài tập 2:
*/
document.getElementById("btn2").onclick = () => {
  let iNum = +document.getElementById("input-2").value;
  let outputEl = document.getElementById("noti2");
  let count = 1;
  let total = 0;
  do {
    total += count;
    count++;
  } while (count <= iNum);
  {
    outputEl.innerHTML = total;
  }
  outputEl.classList.remove("d-none");
};

// 3.Vòng lặp for
for (let index = 1; index <= 5; index++) {
  console.log("Xin chào, Javascript");
}

//Bài tập 3: In các số nguyên dương lẻ nhỏ hơn 100
function ex3() {
  let output = "";
  for (let index = 1; index < 100; index += 2) {
    output += `${index}, `;
  }
  console.log("ex3:", output);
}
ex3();

// 4. Vòng lặp lồng nhau
let count = 0;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    count++;
  }
}
console.log("Số lần chạy:", count);
// Bài tập 4: in ra hình vuông dấu *
function ex4() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      output += `*  `;
    }
    output += `\n`;
  }
  console.log(output);
}
ex4();
// Dùng vòng lặp để duyệt qua từng kí tự trong chuỗi
let message = "Hello Cybersoft";
let output = "";
for (let index = 0; index < message.length; index++) {
  console.log(message[index]);
}
// Lệnh break
function ex5() {
  let i = 1;
  let sum = 0;
  while (true) {
    sum += i;
    if (sum > 100) {
      break;
    }
    i++;
  }
  console.log(sum, i);
}
ex5();
// Lệnh continue
function ex6() {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    if (i === 4) {
      continue;
    }
    total += i;
  }
  console.log(total);
}
ex6();
function ex7() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      return i;
    }
    console.log(i);
  }
}
ex7();
// Bài tập 8: Viết hàm kiểm tra 1 số có phải là số nguyên tó hay không
function ex8(n) {
  let SNT = true;
  let abc = "";
  if (n % 2 === 0 || n < 2) {
    SNT = false;
  } else if (n === 2) {
    SNT = true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      SNT = false;
    }
  }
  return console.log(SNT);
}
ex8(100);
