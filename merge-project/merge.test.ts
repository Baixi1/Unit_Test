import { merge } from './merge.ts';

describe('merge function', () => {
  test('should merge three sorted collections correctly', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [-1, -2, -3];
    const expectedResult = [-3, -2, -1, 1, 2, 3, 4, 5, 6];
    const actualResult = merge(collection1, collection2, collection3);
    expect(actualResult).toEqual(expectedResult);
  });

  test('should handle empty collections', () => {
    const collection1 = [];
    const collection2 = [2, 4, 6];
    const collection3 = [-1, -2, -3];
    const expectedResult = [-3, -2, -1, 2, 4, 6];
    const actualResult = merge(collection1, collection2, collection3);
    expect(actualResult).toEqual(expectedResult);

    // Other cases with empty collections can be tested similarly
  });

  test('should handle all elements being equal', () => {
    const collection1 = [1, 1, 1];
    const collection2 = [1, 1, 1];
    const collection3 = [1, 1, 1];
    const expectedResult = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    const actualResult = merge(collection1, collection2, collection3);
    expect(actualResult).toEqual(expectedResult);
  });

  // You can add more test cases here to cover different edge cases
});