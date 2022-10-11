function powersOfTwo(n) {
  //   Version 1
  //   const container = [];

  //   for(let i = 0; i < n + 1; i++) {
  //     container.push(2 ** i)
  //   };

  //   return container;

  //   Version 2
  //   return new Array(n + 1).fill().map((_, i) => 2 ** i);

  // Version 3
  return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(4));
