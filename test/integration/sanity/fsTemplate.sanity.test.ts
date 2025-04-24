import { fsTemplate } from '../../../dist';

describe('fsTemplate', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 5;
      const numChildComponentsFound = Object.keys(fsTemplate).length;
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
