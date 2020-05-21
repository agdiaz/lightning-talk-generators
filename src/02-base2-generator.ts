function* base2(from = 0, until = Number.MAX_SAFE_INTEGER): Generator<number> {
  let currentExponent = from;

  while(currentExponent <= until) {
    yield Math.pow(2, currentExponent);
    currentExponent++;
  }
}

export default base2;
