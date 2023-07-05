// Truy cập DOM bằng javascrift

// Truy cap the body
console.log(document.body);
//truy cap tag bat ki bang id
document.getElementById("title").style.color = "red";
let titleEl = document.getElementById("title");
console.log(titleEl.innerHTML);
titleEl.innerHTML = "hello DOM";
//value
let inputBranchEl = document.getElementById("branch");
console.log("Noi dung the input:", inputBranchEl.value);
inputBranchEl.value = "cybersoft academy";
console.log("Noi dung the input:", inputBranchEl);

//thay doi style cua tag
let p1El = document.getElementById("content-1");
p1El.style.color = "red";
p1El.style.backgroundColor = "blue";
p1El.style = "font-size: 18px";
//thay doi class cua tag
let p2El = document.getElementById("content-2");
//them class
p2El.classList.add("title", "active", "content", "test");
//xoa class
p2El.classList.remove("content");
//toggle class
p2El.classList.toggle("test");

/* tìm hiểu phần hàm */

//Những đoạn mã bên trong hàm mặc định sẽ không được thực hiện
function showMessage() {
  let username = "Yasuo";
  console.log(`Hello ${username}`);
}
showMessage();

//bai tap 1
function changeMessage() {
  let p3El = document.getElementById("content-3");
  p3El.innerHTML = "Nội dung đã được thay đổi";
  p3El.style.color = "purple";
}

//bai tap 2
function toggleContent() {
  let p4El = document.getElementById("content-4");
  p4El.classList.toggle("hide");
}

// bai tap 3
function batDen() {
  document.getElementById("denTat").src = "./img/pic_bulbon.gif";
}
function tatDen() {
  document.getElementById("denTat").src = "./img/pic_bulboff.gif";
}

//bai tap 4
function disableInputandButton() {
  document.getElementById("input-1").disabled = true;
  document.getElementById("button-1").disabled = true;
}

//bai tap 5
function login() {
  let user = document.getElementById("taiKhoan").value;
  let pass = document.getElementById("matKhau").value;
  console.log(user);
  console.log(pass);
  let thongBao1 = document.getElementById("thongBao");
  thongBao1.innerHTML = `tai khoan: ${user}, mat khau: ${pass}`;
  thongBao1.style.backgroundColor = "green";
}

/*Tạo động và thêm phần tử vào html bằng javascript*/
let h1El = document.createElement("h1");
console.log(h1El);
h1El.innerHTML = "Cybersoft";
document.body.appendChild(h1El);

let pEl = document.createElement("p");
pEl.innerHTML = "Javascript";

let containerEl = document.getElementById("container");
containerEl.appendChild(pEl);

//Bai tap 6
function addProduct() {
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;

  //B2: tạo động các thẻ tr, td để đưa vào trong tbody

  let tbody = document.getElementById("product-list");
  // tao tr va dua vao ben trong tbody
  let tr = document.createElement("tr");
  tbody.appendChild(tr);

  //tao the td chua thong tin ten san pham va dua vao trong the tr
  let tdName = document.createElement("td");
  tdName.innerHTML = productName;
  tr.appendChild(tdName);

  //tao the td chua thong tin ten san pham va dua vao trong the tr
  let tdPrice = document.createElement("td");
  tdPrice.innerHTML = productPrice;
  tr.appendChild(tdPrice);
}

function addProduct2() {
  // B1: Lấy giá trị của 2 input tên sản phẩm và giá
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;

  //B2: Hiển thị ra giao diện
  let tbody = document.getElementById("product-list");

  let html = `
  <tr>
    <td>${productName}</td>
    <td>${productPrice}</td>
  </tr
  `;

  tbody.innerHTML += html;
}
