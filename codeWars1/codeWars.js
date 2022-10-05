function howMuchILoveYou(nbPetals) {
  const petalos = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"];
  return petalos[nbPetals % 6];
}