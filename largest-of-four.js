function largestOfFour(arr) {
  let largestArr = arr.map( a => {
    return a.reduce((largest, current) => {
      return largest < current ? current : largest
    })
  })

  return largestArr
}


console.log("Expected:: [27,5,39,1001] Got:: " + largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
