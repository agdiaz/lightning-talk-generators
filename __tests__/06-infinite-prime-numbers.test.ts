import infinitePrimeNumbers from '../src/06-prime-numbers';

describe('Primes generator', () => {
  it('creates an infinite stream of prime numbers', () => {
    const numbers = infinitePrimeNumbers();

    expect(numbers.next().value).toBe(1);
    expect(numbers.next().value).toBe(2);
    expect(numbers.next().value).toBe(3);
    expect(numbers.next().value).toBe(5);
    expect(numbers.next().value).toBe(7);
    expect(numbers.next().value).toBe(11);
  });

  it('never ends to create new numbers', () => {
    const numbers = infinitePrimeNumbers();

    for(let n = 0; n < 10000; n++) {
      numbers.next();
    }

    expect(numbers.next().done).toBeFalsy();
  });
})
