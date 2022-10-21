const betterThanAverage = (classPoints, yourPoints) =>
  classPoints.reduce((acc, nota) => (acc += nota / classPoints.length), 0) < yourPoints;

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
