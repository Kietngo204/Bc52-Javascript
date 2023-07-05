// Truy cập
let msg = localStorage.getItem("msg");
console.log("msg:", msg);

// Thêm hoặc cập nhật
localStorage.setItem("username", "dannguyen");

// Xoá
localStorage.removeItem("msg");

// localStorage chỉ lưu trữ các kiểu dữ liệu cơ bản như string, number, boolean, null, undefined không lưu trữ dữ liệu object/array/function
let user = { id: 1, name: "Alice" };
localStorage.setItem("user", user);

let userStorage = localStorage.getItem("user");
console.log(userStorage);

// Chuyển đổi array/object thành JSON để lưu xuống localStorage
let userJson = JSON.stringify(user);
console.log("userJson:", userJson);
console.log("typeof userJson:", typeof userJson);
localStorage.setItem("userJson", userJson);

// Chuyển đổi JSON thành array/object
let userStorageJson = localStorage.getItem("userJson");
let userObject = JSON.parse(userStorageJson);
console.log("userObject", userObject);

let student = {
  id: 1,
  name: "Nam",
  calcScore() {
    return 10;
  },
};

// Khi chuyển array/object thành JSON, các phương thức trong object sẽ bị loại bỏ
let studentJson = JSON.stringify(student);
console.log("studentJson", studentJson);

// sessionStorage tương tự như localStorage nhưng dữ liệu sẽ bị mất khi ta tắt trình duyệt đi
