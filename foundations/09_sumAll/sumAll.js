const sumAll = function (from, to) {
  let arr = [];

  if (from < 0 || to < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(from) || !Number.isInteger(to)) {
    return "ERROR";
  }

  if (from > to) {
    [from, to] = [to, from];
  }

  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr.reduce((accum, val) => accum + val, 0);
};

// Do not edit below this line
module.exports = sumAll;
