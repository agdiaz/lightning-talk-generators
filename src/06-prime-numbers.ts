// Super optimized isPrime function
const isPrime = (n: number): boolean => {
  if (n <= 0) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for(let divisor = 5; divisor * divisor < n; divisor += 6) {
    if (n % divisor === 0 || n % (divisor + 2) === 0) {
      return false;
    }
  }

  return true;
};

// 101 =?= 101, 123 =?= 321, etc...
const isPalindromic = (n: number): boolean  => {
  const originalDigits = n.toString().split('');
  const digitsCount = originalDigits.length;
  const halfIndex = Math.floor(digitsCount);

  for(let index = 0; index < halfIndex; index++) {
    if (originalDigits[index] !== originalDigits[digitsCount - 1 - index]) { return false; }
  }

  return true;
};

// 10 has 2 digits, 101 has 3 digits, 1 has 1 digit
const countDigits = (n: number): number =>
  Math.log(n) * Math.LOG10E + 1 | 0;

// Prime numbers to the infinity and beyond!
function* infinitePrimeNumbers(): Generator<number> {
  let currentNumber = 1;

  while(currentNumber < Number.MAX_SAFE_INTEGER) {
    if (isPrime(currentNumber)) {
      yield currentNumber;
    }
    currentNumber++;
  }
}

export default infinitePrimeNumbers;
export {
  isPalindromic,
  countDigits
};
