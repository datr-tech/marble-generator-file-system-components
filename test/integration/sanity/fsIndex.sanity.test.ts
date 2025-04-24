import { fsIndex } from '../../../dist';

describe('fsIndex', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 6;
      const numChildComponentsFound = Object.keys(fsIndex).length;
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
