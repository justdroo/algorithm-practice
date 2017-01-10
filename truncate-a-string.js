function truncateString(str, num) {
  // if (num <= 3 && str.length > num) {
  //   return str.slice(0, num) + "...";
  // } else if(str.length === num || str.length < num) {
  //   return str
  // } else if (str.length > num) {
  //   return str.slice(0, num - 3) + "...";
  // } else {
  //   return "Please input a positive integer"
  // }

  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + "...";
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
