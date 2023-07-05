// Cú pháp tạo mảng
let colors = ["red", "green", "blue"];
let animals = ["dog", "cat", "duck"];
let scores = [1, 3, 8, 4, "Hello"];
let emptyArr = [];

// Truy cập vào phần tử của mảng chỉ mục (index)
// Lưu ý: chỉ mục bắt đầu từ 0
console.log("colors[1] ", colors[1]);
console.log("animals[0] ", animals[0]);

// Thay đổi giá trị của phần tử trong mảng
colors[1] = "yellow";
console.log("color[1] sau khi thay đổi: ", colors[1]);

// Lấy ra độ dài của mảng (số lượng phần tử)
console.log("Độ dài của mảng: ", colors.length);

// Dùng vòng lặp để duyệt mảng
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Các phương thức làm việc với mảng

// - array.push(value1, value2, ...): Thêm 1 hoặc nhiều phần tử cuối mảng
colors.push("black", "orange");
console.log("Mảng colors sau khi push:", colors);

// - array.pop(): Xóa 1 phần tử ở cuối mảng vả trả về chính phần tử đó
let lastColor = colors.pop();
console.log("Mảng colors sau khi pop:", colors);
console.log("Giá trị trả về:", lastColor);

// - array.unshift(value1, value2, ...): Giống push, nhưng thêm phần tử vào đầu mảng
colors.unshift("orange", "pink");
console.log("Mảng colors sau khi unshift:", colors);

// - array.shift(): Xóa 1 phần tử ở đầu mảng và trả về phần tử đó
let firstColor = colors.shift();
console.log("Mảng colors sau khi shift:", colors);
console.log("Giá trị trả về:", firstColor);

// - array.splice(starIndex, deleteCount, value1, value2)
animals.splice(2, 0, "tiger", "cow");
console.log("Mảng animals sau khi splice:", animals);

// - array.slice(start, end): copy ra một array mới từ vị trí start đến end (không báo phần tử ở vị trí end)
let newColors = colors.slice(1, 3);
console.log("Mảng colors mới được slice:", newColors);

// - array.concat(array1, array2,...): Tạo ra một mảng mới, bao gồm tất cả phần tử của mảng ban đầu, và các mảng được truyền vào
let concatArray = colors.concat(newColors);
console.log("Mảng color mới sau khi concat:", concatArray);

// - array.indexOf(value): Trả về vị trí chỉ mục của phần tử đầu tiên tìm thấy, ngược lại trả về -1
// - array.lastindexOf(value): Giống indexOf nhưng tìm kiếm từ cuối mảng
let indexCat = animals.indexOf("cat");
if (indexCat !== -1) {
  console.log('Có giá trị "cat" trong mảng animals');
} else {
  console.log("Không có giá trị cat trong mảng animals");
}

// - array.includes(value): trả về true nếu tìm thấy, ngược lại trả về false
let hasDuck = animals.includes("duck");
if (hasDuck) {
  console.log('Có giá trị "duck" trong mảng animals');
} else {
  console.log('Không có giá trị "duck" trong mảng animals');
}

// - join: chuyển mảng thành chuỗi kèm kí tự phân cách
let date = [10, 5, 2023];
let str = date.join("/");
console.log("join:", str);

// - split: chuyển chuỗi thành mảng dựa vào kí tự phân cách
let arr = str.split("/");
console.log("split:", arr);

// - array.reverse(): Đảo ngược thứ tự của phần tử trong mảng
console.log("Mảng colors trước khi reverse:", colors);
colors.reverse();
console.log("Mảng colors sau khi reverse:", colors);

// Đảo ngược chuỗi bằng split, join và reverse
let myStr = "Hello Cybersoft";
let strArr = myStr.split("");
let strReverse = strArr.reverse();
let strJoin = strReverse.join("");
console.log(strJoin);

// - array.sort(): Sắp xếp mảng
console.log("Mảng animals trước khi sort:", animals);
animals.sort();
console.log("Mảng animals sau khi sort:", animals);

// Mặc định hàm sort sẽ chuyển các giá trị trong mảng về chuỗi để so sánh
// Để sắp xếp số: ta sẽ viết 1 hàm so sánh, hàm này nhận vào 2 tham số a,b.
// Để sắp xếp tăng dần ta return a-b, giảm dần return b-a.
// Sau đó đưa hàm này vào làm đói số của hàm sort
let nums = [3, 5, 1, 9, 15, 8, 21, 7];
function compare(a, b) {
  return a - b;
}
nums.sort(compare);
console.log("Mảng nums sau khi sort:", nums);
