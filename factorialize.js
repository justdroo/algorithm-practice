function factorialize(num) {
  let x = [];
  let y = 1
  for (var i = 1; i <= num; i++) {
    x.push(i)
  }
  x.forEach(function(el){
    y = el * y
  })
  console.log(y)
}

//refactoring

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(5)

// factorialize(5);
