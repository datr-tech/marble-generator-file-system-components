import { fsCommon } from '../../../dist';

describe('fsCommon', () => {
  describe('sanity', () => {
    test('should contain the expected "getStat" child component', () => {
      const { getStat } = fsCommon;
      expect(typeof getStat === 'function').toEqual(true);
    });
  });
});
