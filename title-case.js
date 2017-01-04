function titleCase(str) {
  x = str.toLowerCase().split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(" ")
  return x
}

console.log(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
console.log(titleCase("sHoRt AnD sToUt") === "Short And Stout");
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout");
