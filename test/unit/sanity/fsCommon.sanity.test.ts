import { fsCommon } from '@app-lgfsc/fsCommon';

describe('fsCommon', () => {
  describe('sanity', () => {
    test('should contain the expected "getStat" child component', () => {
      const { getStat } = fsCommon;
      expect(typeof getStat === 'function').toEqual(true);
    });
  });
});
