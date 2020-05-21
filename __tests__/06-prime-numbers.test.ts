import { countDigits, isPalindromic, isPrime } from '../src/06-prime-numbers';

describe('count digits', () => {
  it('returns 1 from digits from 0 to 9', () =>{
    expect(countDigits(9)).toBe(1);
  });

  it('returns the count of digits of any positive number', () =>{
    expect(countDigits(123456)).toBe(6);
  });

  it('returns the count of digits of any negative number', () =>{
    expect(countDigits(-123456)).toBe(6);
  });
});

describe('isPalindromic', () => {
  it('returns true whether the number is the same reading in both directions: left-to-right or right-to-left', () => {
    expect(isPalindromic(12321)).toBeTruthy();
  })

  it('returns false whether the number is not the same reading in both directions: left-to-right or right-to-left', () => {
    expect(isPalindromic(123521)).toBeFalsy();
  })
});

describe('isPrime', () => {
  it('returns false for negative numbers', () => {
    expect(isPrime(-10)).toBeFalsy();
  });

  it('returns false for the number 0', () => {
    expect(isPrime(0)).toBeFalsy();
  });

  it('returns true for the number 1', () => {
    expect(isPrime(1)).toBeTruthy();
  });

  it('returns true for a number divisible by itself and 1', () => {
    expect(isPrime(3)).toBeTruthy();
  });

  it('returns false for a number divisible by other numbers than itself and 1', () => {
    expect(isPrime(4201135)).toBeFalsy();
  });
})
