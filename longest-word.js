// ATTEMPT 1
// function findLongestWord(str) {
//   a = ["I"]
//
//   str.split(" ").forEach(word => {
//     if (word.length > a[a.length - 1].length) {
//       a.push(word)
//     }
//   })
//
//   return a[a.length - 1].length
// }

// ATTEMPT 2
function findLongestWord(str) {
  var longestWord = str.split(" ").reduce((longWord, currentWord) => {
    // if (currentWord.length > longWord.length) {
    //   return currentWord
    // } else {
    //   return longWord
    // }

    // ATTEMPT 2.1
    return currentWord.length > longWord.length ? currentWord : longWord;
  }, "")
  return longestWord.length
}

console.log("Should be 6, got:: " + findLongestWord('The quick brown fox jumped over the lazy dog'))

console.log("Should be 5, got:: " + findLongestWord('May the force be with you'))

console.log("Should be 6, got:: " + findLongestWord('Google do a barrel roll'))

console.log("Should be 19, got:: " + findLongestWord('What if we try a super-long word such as otorhinolaryngology'))
