getProducts();

function getProducts() {
  apiGetProducts()
    .then((response) => {
      display(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createProduct() {
  // DOM và khởi tạo object product
  let product = {
    name: getElement("#TenSP").value,
    price: +getElement("#GiaSP").value,
    image: getElement("#HinhSP").value,
    type: getElement("#loaiSP").value,
  };

  // Gọi API thêm sản phẩm
  apiCreateProduct(product)
    .then(() => {
      // Sau khi thêm thành công, dữ liệu chỉ mới được cập nhật ở phía server. Ta cẩn gọi lại apiGetProduct để lấy được danh sách những sản phẩm mới nhất (bao gồm sản phẩm mình mới thêm)
      return apiGetProducts();
    })
    .then((response) => {
      // response này là kết quả promise của hàm apiGetProduct
      display(response.data);
      // Ẩn modal
      $("#myModal").modal("hide");
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteProduct(productId) {
  apiDeleteProduct(productId)
    .then(() => {
      return apiGetProducts();
    })
    .then((response) => {
      display(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function selectProduct(productId) {
  // Hiển thị modal
  $("#myModal").modal("show");
  // Hiển thị title và footer của modal
  getElement(".modal-title").innerHTML = "Cập nhật sản phẩm";
  getElement(".modal-footer").innerHTML = `
    <button class="btn btn-secondary" data-dismiss="modal">Hủy</button>
    <button class="btn btn-success" onclick="updateProduct(${productId})">Cập nhật</button>
  `;
  apiGetProductById(productId)
    .then((response) => {
      // Lấy thông tin sản phẩn thành công => Hiển thị dữ liệu lên form
      let product = response.data;
      getElement("#TenSP").value = product.name;
      getElement("#GiaSP").value = product.price;
      getElement("#HinhSP").value = product.image;
      getElement("#loaiSP").value = product.type;
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateProduct(productId) {
  // DOM và khởi tạo object product
  let newProduct = {
    name: getElement("#TenSP").value,
    price: +getElement("#GiaSP").value,
    image: getElement("#HinhSP").value,
    type: getElement("#loaiSP").value,
  };

  apiUpdateProduct(productId, newProduct)
    .then(() => {
      return apiGetProducts();
    })
    .then((response) => {
      display(response.data);
      $("#myModal").modal("hide");
    })
    .catch((error) => {
      console.log(error);
    });
}

function display(products) {
  let html = products.reduce((result, value, index) => {
    let product = new Product(
      value.id,
      value.name,
      value.price,
      value.image,
      value.type
    );
    return (
      result +
      `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <img src="${product.image}" width="100px" height="100px"/>
            </td>
            <td>${product.type}</td>
            <td>
                <div class = "d-flex">
                    <button class = "btn btn-primary mr-3" onclick="selectProduct(${
                      product.id
                    })"
                    >Xem</button>
                    <button class = "btn btn-danger" onclick="deleteProduct(${
                      product.id
                    })">Xóa</button>
                </div>
            </td>
        </tr>
      `
    );
  }, "");
  document.getElementById("tblDanhSachSP").innerHTML = html;
}

/********************* DOM *********************/
getElement("#btnThemSP").onclick = () => {
  getElement(".modal-title").innerHTML = "Thêm sản phẩm";
  getElement(".modal-footer").innerHTML = `
    <button class="btn btn-secondary" data-dismiss="modal">Hủy</button>
    <button class="btn btn-success" onclick="createProduct()">Thêm</button>
  `;
};
getElement("#txtSearch").onkeypress = (event) => {
  if (event.key !== "Enter") {
    return;
  }
  apiGetProducts(event.target.value)
    .then((response) => {
      display(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
/********************* Utils *********************/
function getElement(selector) {
  return document.querySelector(selector);
}
