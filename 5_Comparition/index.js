// Toán tử so sánh
// So sánh bằng: ==, ===
// So sánh hơn: >, >=
// So sánh bé: <, <=
// So sánh khác: !=, !==
// Kết quả trả về của phép toán so sánh là boonlean (true/false)

// So sánh number
console.log("5 == 5", 5 == 5);
console.log("3 == 8", 3 == 8);
console.log("'7' == 7", "7" == 7);
console.log("'7' === 7", "7" === 7);

console.log("3 != 3", 3 != 3);
console.log("'3' !== 3", "3" !== 3);

// So sánh string (chuỗi)
console.log("'Annie' > 'Alice'", "Annie" > "Alice");
console.log("'Apple' > 'Banana'", "Apple" > "Banana");

// Ép kiểu chuỗi về số
let a = "100";
console.log("Chuyển chuỗi a thành số - cách 1:", +a);
console.log("Chuyển chuỗi a thành số - cách 2:", parseInt(a));
