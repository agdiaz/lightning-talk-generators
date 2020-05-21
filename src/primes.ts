import { from } from 'rxjs';
import { filter, groupBy, mergeMap, reduce, take, map } from 'rxjs/operators';

import primeNumberGenerators, { countDigits, isPalindromic } from './06-prime-numbers';

const limit = 1000;

const observable = from(primeNumberGenerators()).pipe(
  take(limit),
  filter(n => isPalindromic(n)),
  groupBy(countDigits),
  mergeMap((group) =>
    group.pipe(
      reduce((groupedList, number) => [...groupedList, number], []),
    )
  ),
  map((list, index) => ({
    digits: (index + 1),
    primeNumbers: list.length,
    numbers: list,
  }))
);

const hrstart = process.hrtime();
const subscription = observable.subscribe(console.log);
const hrend = process.hrtime(hrstart);

subscription.unsubscribe();
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
