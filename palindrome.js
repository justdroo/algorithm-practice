function palindrome(str) {
  let strSD = str.replace(/ |\_|\,|\.|\:|\-|\(|\)|/g, "").toLowerCase();

  let reverse = strSD.split("").reverse().join("");


  if ( reverse === strSD) {
    return true;
  } else {
    return false;
  }
}



// console.log(palindrome("eye"));
// console.log(palindrome("racecar"));
// console.log(palindrome("Drew"));
// console.log(palindrome("Racecar"));
// console.log(palindrome("race CAR"))
// console.log("Should be true, got:: " + palindrome("never odd or even"))
// console.log("Should be true, got:: " + palindrome("_eye"))
// console.log("Should be true, got:: " + palindrome("A man, a plan, a canal. Panama"))
// console.log("Should be true, got:: " + palindrome("0_0 (: /-\ :) 0-0"))/
