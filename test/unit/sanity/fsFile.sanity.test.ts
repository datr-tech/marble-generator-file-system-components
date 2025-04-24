import { fsFile } from '@app-lgfsc/fsFile';

describe('fsFile', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 7;
      const numChildComponentsFound = Object.keys(fsFile).length
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
