import { fsTemplateIndex } from '../../../dist';

describe('fsTemplateIndex', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 6;
      const numChildComponentsFound = Object.keys(fsTemplateIndex).length
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
