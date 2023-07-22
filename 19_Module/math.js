export function sum(...numbers) {
  return numbers.reduce((result, value) => {
    return result + value;
  }, 0);
}
