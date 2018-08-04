let processArgs = process.argv;
let processArgsSum = 0;

for (let i = 2; i < processArgs.length; i++) {
  processArgsSum += parseInt(processArgs[i]);
}

console.log(processArgsSum);