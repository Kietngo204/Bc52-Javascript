let studentA = {
  name: "Alice",
  className: "BC52",
  age: 20,

  calcScore(html, css, js) {
    return (html + css + js) / 3;
  },
};

let studentB = {
  name: "Bob",
  className: "BC52",
  age: 25,

  calcScore(html, css, js) {
    return (html + css + js) / 3;
  },
};
// Định nghĩa Constructor
function Student(name, className, age) {
  // Ngầm định tạo ra 1 đối tượng this = {}

  this.name = name; // this = {name: 'Jack'}
  this.className = className;
  this.age = age;

  // Ngầm định return về đối tượng this ở trên
}

Student.prototype.getInfo = function () {
  console.log(`Name: ${this.name} - Class: ${this.className}`);
};
Student.prototype.calcScore = (html, css, js) => {
  return (html + css + js) / 3;
};

// Sử dụng Constructor
let studentC = new Student("Jack", "BC52", 28);
console.log("studentC:", studentC);
studentC.getInfo();
console.log("Score:", studentC.calcScore(6, 4, 8));
let studentD = new Student("Mike", "BC52", 20);
console.log("studentD:", studentD);
studentD.getInfo();
console.log("Score:", studentD.calcScore(10, 5, 7));
