function* writerConsumer(): Generator {
  console.log("I'm going to write everything");
  console.log(yield);
  console.log("And that was all folks!");

  return 0;
}

export default writerConsumer;
