function isSortedAndHow(array) {
  const ascending = JSON.stringify([...array].sort((a, b) => (a > b ? 1 : -1)));
  const descending = JSON.stringify([...array].sort((a, b) => (a > b ? -1 : 1)));

  array = JSON.stringify(array);

  if (array === ascending || array === descending) return array === ascending ? "yes, ascending" : "yes, descending";
  return "no";
}
/*
console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
*/
