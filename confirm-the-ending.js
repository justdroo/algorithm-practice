function confirmEnding(str, target) {
  return str.slice(-target.length) === target ? true : false;
}

console.log("Expect True:: " + confirmEnding("Bastian", "n"));
console.log("Expect False:: " + confirmEnding("Connor", "n"));
