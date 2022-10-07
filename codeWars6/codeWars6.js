function DNAtoRNA(dna) {
  // version 1
  // return dna.replaceAll('T', 'U');

  //version 2
  return dna.replace(/[T]/g, "U");
}

/*
console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));
*/
