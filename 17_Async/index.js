// Bất đồng bộ
console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");

/* Promise */
// Promise có 3 trạng tháng:
// - PENDING: Chờ xử lý tác vụ bất đồng bộ
// - FULFILLED: Xử lý thành công và trả về kết quả
// - REJECTED: Xử lý thất bại và trả về lỗi

function main() {
  return new Promise((resolve, reject) => {
    // Giả lập gọi API lấy dữ liệu của user
    setTimeout(() => {
      let data = { id: 1, name: "Khai Truong", score: [8, 7, 8] };
      resolve(data);

      reject("Không tìm thấy thông tin user");
    }, 5000);
  });
}
let promise = main();
console.log("promise:", promise);

promise.then((data) => {
  console.log("promise:", promise);
  console.log("data:", data);
});

promise.catch((error) => {
  console.log("promise:", promise);
  console.log("error:", error);
});

// API
// Các thành phần của Web API
// - url: www.cybersoft.edu.vn/users/1234
// - method:
// + GET: yêu cầu trả về một tài nguyên (resource)
// + POST: tạo mới một tài nguyên
// + PUT: cập nhật một tài nguyên
// + DELETE: xóa một tài nguyên
// - status code
// + 200: Success
// + 404: Not found
// + 400: Bad request
// + 500: Internal server

// Thực hành API
function getUsers() {
  let promise = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });

  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getUsers();
function getTodos() {
  axios({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getTodos();

function getPosts() {
  return axios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
  });
}

getPosts()
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
