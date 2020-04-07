const sentence = "hello there from lighthouse labs";
timeIncremented = 0;
let giffySentence = "";
for (const char of sentence) {
  timeIncremented += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, timeIncremented)
} 

if (timeIncremented !==0) {
  setTimeout(() => {
    console.log('\n');
  }, timeIncremented)
};

