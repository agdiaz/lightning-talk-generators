import naturalNumbersGenerator from '../src/01-natural-numbers-generator';

describe('Natural numbers generator', () => {
  const generator = naturalNumbersGenerator(1, 10);

  it('generates the first 10 numbers', () => {
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(3);
    expect(generator.next().value).toBe(4);
    expect(generator.next().value).toBe(5);
    expect(generator.next().value).toBe(6);
    expect(generator.next().value).toBe(7);
    expect(generator.next().value).toBe(8);
    expect(generator.next().value).toBe(9);
    expect(generator.next().value).toBe(10);
  });

  it('does not generate more than 10 numbers', () => {
    expect(generator.next().done).toBeTruthy();
    expect(generator.next().value).toBeUndefined();
  })
});
