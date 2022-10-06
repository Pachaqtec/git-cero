function isSortedAndHow(array) {
  const ascending = [...array].sort((a, b) => (a > b ? 1 : -1)).toString();
  const descending = [...array].sort((a, b) => (a > b ? -1 : 1)).toString();

  array = array.toString();

  if (array === ascending || array === descending) return array === ascending ? "yes, ascending" : "yes, descending";
  return "no";
}

/*
console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));

*/