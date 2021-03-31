const isValid = (val) => {
  if (isNaN(val)) {
    throw new TypeError(`${val} is not a number`);
  }
};
function rangeIter(lb, ub) {
  isValid(lb);
  isValid(ub);
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (lb <= ub) {
            return { value: lb++, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}

export { rangeIter };
