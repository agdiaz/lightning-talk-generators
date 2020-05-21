const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

function* letterGenerator(): Generator<string> {
  try {
    let currentIndex = 0;

    while(true) {
      yield LETTERS[currentIndex];
      currentIndex = (currentIndex + 1) % LETTERS.length;
    }
  } catch(e) {
    console.warn(`Something happened: ${e}`);
  } finally {
    console.log("No more letters for you!");
  }
}

export default letterGenerator;
