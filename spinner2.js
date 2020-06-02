
const spinner = ["\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    "]

let countdown = 0; 
for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(line);
  }, countdown)
  countdown = countdown + 200; 
};