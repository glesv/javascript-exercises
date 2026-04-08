const getAge = function (person) {
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (arr) {
  const sorted = arr.sort((a, b) => getAge(b) - getAge(a));

  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
