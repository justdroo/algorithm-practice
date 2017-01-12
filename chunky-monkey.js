function chunkArrayInGroups(arr, size) {
  let x = [0];
  let i = 0;
  while (x.reduce((a,b) => a.concat(b)).length != arr.length ) {
    if (i === 0) {
      x = [];
      x.push(arr.slice(i, size));
      i += 1;
    } else {
      x.push(arr.slice(i * size, (i + 1) * size))
      i += 1;
    }
  }
  return x;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
