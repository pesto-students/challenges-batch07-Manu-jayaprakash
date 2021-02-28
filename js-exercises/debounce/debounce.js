function debounce(fn, timeInMs) {
  let timeOutId;
  function debounced() {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fn();
    }, timeInMs);
  }

  return debounced;
}

export { debounce };
