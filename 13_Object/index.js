// Khai báo object (đối tượng)
let car = {
  // Khai báo thuộc tính (property) cho object
  // key: value
  brand: "Toyota",
  color: "Silver",
  weight: 1000,
};
// Truy cập các thuộc tính của object bằng toán tử
console.log("brand:", car.brand);
// Truy cập các thuộc tính của object bằng object["property"]
console.log("color:", car["color"]);
// Truy cập động các thuộc tính của object bằng giả trị của một biến
let key = "weight";
console.log(car[key]); // => car["weight"]

// Thay đổi giá trị của thuộc tính
car.color = "Red";
console.log("Thuộc tính color sau khi thay dổi:", car.color);

// Thêm thuộc tính mới vào object
car.price = (5e9).toLocaleString();
console.log("Object car sau khi thêm thuộc tính price:", car);

// Xoá thuộc tính
delete car.weight;
console.log("Object car sau khi xoá thuộc tính weight:", car);

// Kiểm tra một thuộc tính có tồn tại trong object hay không
// Khi truy cập một thuộc tính không tồn tại, trả ra undefined
if (car.power) {
  console.log("Thuộc tính power có tồn tại");
} else {
  console.log("Thuộc tính power không tồn tại");
}
// Hoặc sử dụng từ khoá in để kiểm tra
if ("price" in car) {
  console.log("Thuộc tính power có tồn tại");
} else {
  console.log("Thuộc tính power không tồn tại");
}

let user = {
  // Thuộc tính
  name: "Alice",
  age: 18,
  // Phương thức
  sayHi() {
    // Từ khoá "this": đại diện cho đối tượng gọi tới phương thức
    console.log(`Hi ${this.name}`);
  },
  // Không sử dụng arrow function để định nghĩa phương thức cho object
  // Lý do: arrow function không định nghĩa từ khoá this, mà nó sẽ sử dụng this của hàm bao bọc lấy nó (nếu có)
  // sayHello: () => {
  //   console.log(`Hi ${user.name}`);
  // },
};
user.sayHi();
