const removeFromArray = function (arr, ...toDelete) {
  return arr.filter((item) => !toDelete.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
