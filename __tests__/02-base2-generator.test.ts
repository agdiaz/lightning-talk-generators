import base2Generator from '../src/02-base2-generator';

describe('Base2 numbers', () => {
  it('returns 1 if exponential number is 0', () => {
    const numbers = base2Generator();

    expect(numbers.next().value).toBe(1);
    expect(numbers.next().value).toBe(2);
  });

  it('returns always even numbers for exponential numbers greather than 0', () => {
    const numbers = base2Generator(1);

    expect(numbers.next().value % 2).toBe(0);
    expect(numbers.next().value % 2).toBe(0);
    expect(numbers.next().value % 2).toBe(0);
    expect(numbers.next().value % 2).toBe(0);
    expect(numbers.next().value % 2).toBe(0);
  });
});
