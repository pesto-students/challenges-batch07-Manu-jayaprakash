const limitFunctionCallCount = (cb, cbLimit) => (...args) => {
  if (cbLimit > 0) {
    cbLimit--;
    return cb(...args);
  }
  return null;
};

export { limitFunctionCallCount };
