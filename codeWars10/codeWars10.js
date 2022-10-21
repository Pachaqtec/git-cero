function betterThanAverage(classPoints, yourPoints) {
  const promNotas = classPoints.reduce((acc, nota) => (acc += nota / classPoints.length), 0);

  console.log(promNotas);

  return promNotas < yourPoints;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
