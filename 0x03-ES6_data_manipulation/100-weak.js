const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let called = weakMap.get(endpoint) || 0;
  called += 1;
  weakMap.set(endpoint, called);

  if (called >= 5) {
    throw Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
