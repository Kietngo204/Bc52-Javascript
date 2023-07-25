// 1. optional chaining (?)
const h1EL = document.getElementById("title");

// const title = h1EL.innerHTML; // Lỗi vì h1EL là null

// Cách 1: Dùng if
// let title = "";
// if (h1EL) {
//   title = h1EL.innerHTML;
// }

// Cách 2: Dùng toán tử &&
// let title = h1EL && h1EL.innerHTML;
// console.log(title);

// Cách 3: Dùng toán tử ? (optional chaining)
let title = h1EL?.innerHTML;
console.log(title);

const user = {
  name: "Alice",
  pets: {
    cat: {
      name: "dog",
    },
  },
};
console.log("Dog name:", user.pets.dog?.name);
console.log("Cat name:", user.pets?.cat?.name);
console.log("Cat name:", user.languages?.[0]);

// Kiểm tra phương thức có tồn tại hay không trước khi gọi
user.methodNotExisting?.();

// 2. Nullish coalescing (??)
// let score = 0 || "N/A";
let score = 0 ?? "N/A";
console.log("score:", score);

let str = null ?? "Empty string";
console.log("str:", str);

// 3. Try catch

// VD1: Bắt lỗi cú pháp
try {
  noExistingFunction();
  console.log("Try catch");
} catch (error) {
  console.log("error name:", error.name);
  console.log("error message:", error.message);
  console.log("error stack:", error.stack);
}

// VD2: Xử lí ném ra lỗi
try {
  const user = JSON.parse(localStorage.getItem("user"));
  // Kiểm tra nếu không có thông tin user dùng xử lý thông tin user và ném ra lỗi
  if (!user) {
    throw new Error("User not found");
  }
  console.log("User:", user);
} catch (error) {
  console.log("error name:", error.name);
  console.log("error message:", error.message);
  console.log("error stack:", error.stack);
}
console.log("Running");

// 4. Async await

function apiGetProducts(searchValue) {
  return axios({
    url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/products",
    method: "GET",
    params: {
      name: searchValue || undefined,
    },
  });
}

function apiCreateProduct(product) {
  return axios({
    url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/products",
    method: "POST",
    data: product,
  });
}

function createProduct() {
  let product = {
    name: "Samsung A32",
    price: 4999999,
    image:
      "https://stuff.co.za/wp-content/uploads/2021/04/20210421_112826-scaled.jpg",
    type: "phone",
  };

  apiCreateProduct(product)
    .then((response) => {
      return apiGetProducts();
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function createProductAsync() {
  let product = {
    name: "Samsung A32",
    price: 4999999,
    image:
      "https://stuff.co.za/wp-content/uploads/2021/04/20210421_112826-scaled.jpg",
    type: "phone",
  };

  try {
    await apiCreateProduct(product);
    const response = await apiGetProducts();
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

createProductAsync();
