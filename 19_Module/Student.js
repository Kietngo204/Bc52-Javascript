// Khi quản lý theo cơ chế module, để function Student có thể sử dụng được ở file index.js ta cần phải export nó
export default function Student(name, email, className) {
  this.name = name;
  this.email = email;
  this.className = className;
}
