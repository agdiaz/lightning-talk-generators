// Example 01
import naturalNumbersGenerator from './01-natural-numbers-generator';

const first10 = naturalNumbersGenerator(1, 10);

for (const number of first10) {
  console.log(number);
}

// Example 02
import base2 from './02-base2-generator';

const base2Numbers = base2(0);

console.log(base2Numbers.next());
console.log(base2Numbers.next());
console.log(base2Numbers.next());
console.log(base2Numbers.next());
console.log(base2Numbers.next());

// Example 03
import teamGenerator from './03-countable-yields';

const winnerTeam = teamGenerator();

console.log(winnerTeam.next().value);
console.log(winnerTeam.next().value);
console.log(winnerTeam.next().value);
console.log(winnerTeam.next().value);
console.log(winnerTeam.next().value);
console.log(winnerTeam.next().value);
console.log(winnerTeam.next().done);

// Example 04
import writerConsumer from './04-consumer';

const writer = writerConsumer();
writer.next(); // Starts the observer
writer.next("Dear reader, how is this lightning talk going?"); // receives value as yield inside the gen
writer.next();

// Example 05
import letterGenerator from './05-return-throw';

const letters = letterGenerator();
console.log(letters.next().value);
// ...
console.log(letters.next().value);
letters.return(0);
console.log(letters.next().value);
console.log(letters.next().done);

const lettersThrow = letterGenerator();
console.log(lettersThrow.next().value);
lettersThrow.throw("Stop now, it's late!");
