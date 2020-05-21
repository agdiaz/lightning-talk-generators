function* naturalNumbers(from = 1, until = Number.MAX_SAFE_INTEGER): Generator<number> {
  let currentNaturalNumber = from;

  while(currentNaturalNumber <= until) {
    yield currentNaturalNumber;
    currentNaturalNumber++;
  }
}

export default naturalNumbers;
