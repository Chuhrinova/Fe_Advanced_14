
const  { source } = require('./db');
const  { mult2, filterEven } = require('./map');

test('массив каждый элемент * 2', () => {
    expect(mult2(source)).toEqual([2,4,6]);
  });
test('массив четных', () => {
    expect(filterEven(source)).toEqual([2]);
  });
test('массив четных', () => {
    expect(filterEven([])).toEqual([]);
  });