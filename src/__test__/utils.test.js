import { calcTileType } from '../js/utils';

test('check border drawing', () => {
  expect(calcTileType(0, 8)).toBe('top-left');
  expect(calcTileType(7, 8)).toBe('top-right');
  expect(calcTileType(4, 8)).toBe('top');
  expect(calcTileType(56, 8)).toBe('bottom-left');
  expect(calcTileType(63, 8)).toBe('bottom-right');
  expect(calcTileType(60, 8)).toBe('bottom');
  expect(calcTileType(24, 8)).toBe('left');
  expect(calcTileType(31, 8)).toBe('right');
  expect(calcTileType(27, 8)).toBe('center');
});
