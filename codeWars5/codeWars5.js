function sameCase(a, b) {
  if (/[a-z]/gi.test(a) && /[a-z]/gi.test(b)) {
    if (a === a.toLowerCase() && b === b.toLowerCase()) return 1;
    else if (a === a.toUpperCase() && b === b.toUpperCase()) return 1;
    return 0;
  }
  return -1;
}

// console.log(sameCase("C", "B"));
// console.log(sameCase("b", "a"));
// console.log(sameCase("d", "d"));
// console.log(sameCase("c", "B"));
