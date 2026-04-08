const palindromes = function (string) {
  let arr = string
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, "")
    .split("");

  console.log(arr);
  console.log(arr.reverse());

  return arr.join("") === arr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
