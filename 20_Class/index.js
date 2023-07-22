class Student {
  // Khởi tạo thuộc tính
  constructor(name, email, className) {
    this.name = name;
    this.email = email;
    this.className = className;
  }

  // Khởi tạo phương thức
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}
const student1 = new Student("Bob", "bob@gmail.com", "BC52");
console.log("student1:", student1);
student1.sayHi();

// Lập trình hướng đối tượng (OOP)
// 4 tính chất của OOP: tính đóng gói, tính kế thừa, tính đa hình, tính trừu tượng

// - Tính kế thừa
class Employee {
  constructor(id, name, email, dateOfBirth, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
  }
  getInfo() {
    console.log(`Id: ${this.id} - Name: ${this.name} - Email: ${this.email}`);
  }
  calcSalary() {}
}

// Tạo class IT kế thừa class Employee
class IT extends Employee {
  constructor(id, name, email, dateOfBirth, address, role, languages) {
    // Gọi và thực thi constructor của class cha
    super(id, name, email, dateOfBirth, address);
    // Khai báo các thuộc tính của riêng class IT
    this.role = role;
    this.languages = languages;
  }

  // Ghi đè (override) lại phương thức của class cha
  calcSalary(salary) {
    return salary * 0.9;
  }
}
const it1 = new IT(
  "IT0001",
  "John",
  "john@gmail.com",
  "20/08/1990",
  "123 CMT8",
  "frontend",
  ["HTML", "CSS", "Javascript"]
);
console.log("it1:", it1);
it1.getInfo();
console.log(it1.calcSalary(1000000).toLocaleString());

class HR extends Employee {
  constructor(id, name, email, dateOfBirth, address, responsibility) {
    super(id, name, email, dateOfBirth, address);
    this.responsibility = responsibility;
  }
  calcSalary(salary) {
    const bonus = 1000;
    return (salary + bonus) * 0.9;
  }
}

const hr1 = new HR(
  "HR0001",
  "Khải",
  "khai@gmail.com",
  "15/08/1993",
  "123 CT",
  "Recruitment"
);
console.log("hr1:", hr1);
hr1.getInfo();
console.log(hr1.calcSalary(1000000));

// - Tính đa hình
let employees = [it1, hr1];

// Bởi vì tất cả object trong mảng đều kế thừa cùng 1 lớp cha, nên ta không cần quan tâm phần tử hiện tại là đối tượng của lớp nào, ta chỉ cần biết nó chắc chắn có phương thức calcSalary
for (let employee of employees) {
  const salary = employee.calcSalary(2000);
  console.log(`${employee.name} - ${salary}`);
}
