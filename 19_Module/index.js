import Student from "./Student.js";
// import { sayHi, sayHello } from "./greeting.js";
import * as greeting from "./greeting.js";
import { sum as mathSum } from "./math.js";

const student1 = new Student("Alice", "alice@gmail.com", "BC52");
console.log(student1);
greeting.sayHi(student1.name);
greeting.sayHello(student1.name);

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6));
console.log(mathSum(3, 7, 9, 11));

document.getElementById("btn-add").onclick = () => {
  const random = Math.floor(Math.random() * 100);
  const product = {
    id: random,
    name: `product-${random}`,
  };
  document.getElementById("product-list").innerHTML += `
    <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>
        <button data-id="${product.id}" data-type="update">Chỉnh sửa</button>
            <button data-id="${product.id}" data-type="delete">Xoá</button>
        </td>
    </tr>
`;
};
document.getElementById("product-list").onclick = (event) => {
  const element = event.target;
  const id = element.getAttribute("data-id");
  const type = element.getAttribute("data-type");
  console.log(`id: ${id}, type: ${type}`);
};
