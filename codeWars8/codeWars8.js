function powersOfTwo(n) {
  //   Version 1
  //   const container = [];

  //   for(let i = 0; i < n + 1; i++) {
  //     container.push(2 ** i)
  //   };

  //   return container;

  //   Version 2
  return new Array(n + 1).fill().map((_, i) => 2 ** i);
}

// console.log(0);
// console.log(1);
// console.log(4);
