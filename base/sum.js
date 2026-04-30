function main() {
  let a = 1;
  let b = 2;

  function sum(a, b) {
    return a + b;
  }
  const c = sum(a, b);
  console.log(c);
}

module.exports = { main };