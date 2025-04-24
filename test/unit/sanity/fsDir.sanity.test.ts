import { fsDir } from '@app-lgfsc/fsDir';

describe('fsDir', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 4;
      const numChildComponentsFound = Object.keys(fsDir).length;
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
