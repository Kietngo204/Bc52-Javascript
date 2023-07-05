let titleEl = document.getElementById("title");

if (titleEl) {
  titleEl.innerHTML = "Hello";
}
// console.log(data);

//Kiêm tra giá trị của các biến, hàm bằng console.log()
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 5));

// Debug bằng breakpoint
function greeting(name) {
  // debugger;
  let text = `Hello ${name}`;
  say(text);
}
function say(text) {
  document.write("**" + text + "**");
}
greeting("Bob");
