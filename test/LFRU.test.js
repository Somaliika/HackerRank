const chai = require('chai');
const LFRU = require('../randomExcercises/algorithms/LFRU');

describe('Least frequent recently used cache policy', () => {
  const testCases = [
    { case: [2, 1, 5, 3, 4], result: [2, 1, 5, 3, 4], usage: 0 },
    { case: [2, 1, 5, 3, 4, 1, 6, 3], result: [2, 1, 5, 3, 4, 6], usage: 2 },
    { case: [1, 2, 3, 4, 1, 2, 3, 4, 5, 5], result: [1, 2, 3, 4, 5], usage: 5 },
    { case: [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 9, 1], result: [1, 2, 3, 4, 6, 7, 8, 9], usage: 9 },
    { case: [1, 2, 3, 4, 1, 5, 6, 1, 7, 8, 9, 10, 4, 9, 11, 1], result: [1, 9, 10, 4, 11, 6, 7, 8], usage: 5 },
  ];
  testCases.forEach((test) => {
    it(`should use cache ${test.usage} times and return ${test.result} for ${test.case}`, () => {
      const cache = new LFRU();
      test.case.forEach((elem) => {
        cache.get(elem);
      });
      chai.expect(cache.getKeysInTheCache()).to.have.members(test.result);
      chai.expect(cache.getCacheUsage()).to.be.equal(test.usage);
    });
  });
});
