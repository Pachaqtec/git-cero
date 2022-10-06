function points(games) {
  return games.reduce((acc, game) => {
    let [myTeam, rivalTeam] = game.split(":");
    myTeam = Number(myTeam);
    rivalTeam = Number(rivalTeam);

    if (myTeam === rivalTeam) return (acc += 1);

    let victory = myTeam > rivalTeam ? 3 : 0;
    return (acc += victory);
  }, 0);
}
/*
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])); //30
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])); //10
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])); //0
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])); //15
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])); //12
*/
/*
// ?? devuelve el primer elemento que no sea null o undefined;
//  || devuelve el primer elemento que sea true;
//  && devuelve el primer elemento que sea false;

console.log(undefined ?? false ?? 10);
console.log(undefined && false && 10);
console.log(undefined || false || 10);
*/
